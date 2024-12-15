import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ip =
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"]?.toString().split(",")[0] || // Proxy
    req.socket.remoteAddress;

  res.status(200).json({ ip: ip || "Keine IP gefunden" });
}
