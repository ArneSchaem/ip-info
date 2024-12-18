import React, { useState, useEffect } from "react";

const IPv4Card = () => {
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("/api/get-ip")
      .then((res) => res.json())
      .then((data) => {
        setIp(data.ip?.includes(".") ? data.ip : "Not available");
      });
  }, []);

  return (
    <div className="relative rounded-3xl flex-1 p-8  flex flex-col gap-4 w-full bg-[#191919]">
      <h1 className="flex text-xl md:text-2xl font-bold tracking-tighter text-gray-100 leading-tight">
        IPv4
      </h1>
      <h2 className="text-gray-400">{ip}</h2>
    </div>
  );
};

export default IPv4Card;
