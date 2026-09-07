const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_ITEMS = 12;
const MAX_HISTORY_TEXT_LENGTH = 2000;

function sendJson(response, statusCode, payload) {
  response.status(statusCode).setHeader("Cache-Control", "no-store").json(payload);
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { error: "Method Not Allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return sendJson(response, 500, {
      error: "Server is missing GEMINI_API_KEY. Set it in Vercel project environment variables."
    });
  }

  const body = request.body || {};
  const userMessage = typeof body.message === "string" ? body.message.trim() : "";
  if (!userMessage) {
    return sendJson(response, 400, { error: "Missing 'message' field" });
  }
  if (userMessage.length > MAX_MESSAGE_LENGTH) {
    return sendJson(response, 413, {
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
    const geminiResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
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

    const data = await geminiResponse.json();
    if (!geminiResponse.ok) {
      return sendJson(response, geminiResponse.status, {
        error: data.error?.message || "Upstream API error"
      });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
      || "Sorry, I couldn't generate a response just then. Please try again.";

    return sendJson(response, 200, { reply });
  } catch (error) {
    return sendJson(response, 500, { error: "Failed to reach the AI service." });
  }
};