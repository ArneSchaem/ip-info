import React, { useEffect, useState } from "react";

const IspCard = () => {
  const [provider, setProvider] = useState("Unknown");

  useEffect(() => {
    fetch("/api/get-isp")
      .then((res) => res.json())
      .then((data) => setProvider(data.provider || "Unknown"));
  }, []);

  return (
    <div className="flex flex-col bg-gray-200 justify-center items-center p-4 rounded-lg">
      <h1 className="text-xl font-bold text-black mb-2">
        Internet Service Provider
      </h1>
      <h2 className="text-gray-500">Provider: {provider}</h2>
    </div>
  );
};

export default IspCard;
