import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async (req: VercelRequest, res: VercelResponse) => {
  const searchParams = new URLSearchParams(req.query as Record<string, string>);
  const targetUrl = `https://api.yeatwork.ru/skills?${searchParams.toString()}`;

  try {
    const apiResponse = await fetch(targetUrl, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!apiResponse.ok) {
      res.status(apiResponse.status).json(await apiResponse.json());
      return;
    }

    const data = await apiResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
};
