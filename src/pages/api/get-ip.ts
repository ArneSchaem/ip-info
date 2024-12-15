import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const clientIp = requestIp.getClientIp(req);
  res.status(200).json({ ip: clientIp });
}
