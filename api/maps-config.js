module.exports = function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  const key = process.env.MAPS || process.env.MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY;
  if (!key) {
    return response.status(500).json({ error: "Maps API key is not configured." });
  }

  response.setHeader("Cache-Control", "no-store");
  return response.status(200).json({ key });
};