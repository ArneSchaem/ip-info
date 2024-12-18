import React, { useEffect, useState } from "react";

const IspCard = () => {
  const [provider, setProvider] = useState("Unknown");

  useEffect(() => {
    fetch("/api/get-isp")
      .then((res) => res.json())
      .then((data) => setProvider(data.provider || "Unknown"));
  }, []);

  return (
    <div className="relative bg-[#191919] rounded-3xl flex-1 p-8  flex flex-col gap-4 w-full ">
      <h1 className="flex text-xl md:text-2xl font-bold tracking-tighter text-gray-100 leading-tight">
        Internet Service Provider
      </h1>
      <h2 className="text-gray-400">Provider: {provider}</h2>
    </div>
  );
};

export default IspCard;
