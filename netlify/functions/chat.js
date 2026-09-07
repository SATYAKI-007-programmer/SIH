const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_ITEMS = 12;
const MAX_HISTORY_TEXT_LENGTH = 2000;

function jsonResponse(statusCode, payload) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(payload)
  };
}

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method Not Allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return jsonResponse(500, {
      error: "Server is missing GEMINI_API_KEY. Set it in the deployment environment."
    });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch (error) {
    return jsonResponse(400, { error: "Invalid request body" });
  }

  const userMessage = typeof body.message === "string" ? body.message.trim() : "";
  if (!userMessage) {
    return jsonResponse(400, { error: "Missing 'message' field" });
  }
  if (userMessage.length > MAX_MESSAGE_LENGTH) {
    return jsonResponse(413, {
      error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`
    });
  }

  const history = Array.isArray(body.history)
    ? body.history
        .filter((message) =>
          message &&
          (message.role === "user" || message.role === "assistant") &&
          typeof message.text === "string"
        )
        .slice(-MAX_HISTORY_ITEMS)
        .map((message) => ({
          role: message.role,
          text: message.text.trim().slice(0, MAX_HISTORY_TEXT_LENGTH)
        }))
    : [];

  const contents = [
    ...history.map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.text }]
    })),
    { role: "user", parts: [{ text: userMessage }] }
  ];

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{
              text: "You are the Bharat Vividha Cultural Guide. Answer questions about Indian heritage, culture, festivals, travel, and traditions accurately and warmly. If you are unsure, say so rather than guessing."
            }]
          },
          contents,
          generationConfig: { maxOutputTokens: 500, temperature: 0.7 }
        })
      }
    );

    const data = await response.json();
    if (!response.ok) {
      return jsonResponse(response.status, {
        error: data.error?.message || "Upstream API error"
      });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
      || "Sorry, I couldn't generate a response just then. Please try again.";

    return jsonResponse(200, { reply });
  } catch (error) {
    return jsonResponse(500, { error: "Failed to reach the AI service." });
  }
};