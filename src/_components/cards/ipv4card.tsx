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
    <div className="flex flex-col bg-gray-200 justify-center items-center p-4 break-all rounded-lg">
      <h1 className="flex text-xl md:text-2xl font-bold tracking-tighter text-black leading-tight mb-2">
        IPv4
      </h1>
      <h2 className="text-gray-500">{ip}</h2>
    </div>
  );
};

export default IPv4Card;
