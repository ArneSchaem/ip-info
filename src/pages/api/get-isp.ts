import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";
import { Reader } from "@maxmind/geoip2-node";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const clientIp = requestIp.getClientIp(req);
  const geo = await Reader.open("data/GeoLite2-ASN.mm db");
  const isp = geo.asn(clientIp || "");
  res.status(200).json({
    provider: isp.autonomousSystemOrganization,
  });
}
