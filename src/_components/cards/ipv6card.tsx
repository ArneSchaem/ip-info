import React, { useState, useEffect } from "react";
import { Network } from "lucide-react";

const Ipv6Card = () => {
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("/api/get-ip")
      .then((res) => res.json())
      .then((data) => {
        setIp(data.ip?.includes(":") ? data.ip : "Not available");
      });
  }, []);

  return (
    <div className="relative rounded-3xl flex-1 p-8  flex flex-col gap-4 w-full bg-[#191919]">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-[#252525]">
          <Network className="w-5 h-5 text-purple-400" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-gray-100 leading-tight">
          IPv6
        </h1>
      </div>
      <h2 className="text-gray-400 break-all">{ip}</h2>
    </div>
  );
};

export default Ipv6Card;
