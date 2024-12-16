import React, { useState, useEffect } from "react";

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
    <div className="flex flex-col bg-gray-200 justify-center items-center p-4 rounded-lg">
      <h1 className="text-xl font-bold">IPv6</h1>
      <h2 className="text-gray-500">{ip}</h2>
    </div>
  );
};

export default Ipv6Card;
