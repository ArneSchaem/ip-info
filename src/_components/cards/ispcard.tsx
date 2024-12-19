import React, { useEffect, useState } from "react";
import { EthernetPort } from "lucide-react";

const IspCard = () => {
  const [provider, setProvider] = useState("Unknown");

  useEffect(() => {
    fetch("/api/get-isp")
      .then((res) => res.json())
      .then((data) => setProvider(data.provider || "Unknown"));
  }, []);

  return (
    <div className="relative rounded-3xl flex-1 p-8  flex flex-col gap-4 w-full bg-[#191919] ">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-[#252525]">
          <EthernetPort className="w-5 h-5 text-sky-400" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-gray-100 leading-tight">
          Internet Service Provider
        </h1>
      </div>
      <h2 className="text-gray-400">Provider: {provider}</h2>
    </div>
  );
};

export default IspCard;
