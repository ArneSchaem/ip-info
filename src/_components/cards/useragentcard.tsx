"use client";

import React, { useState, useEffect } from "react";

export default function UserAgentCard() {
  const [userAgent, setUserAgent] = useState("Loading...");

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  return (
    <div className="relative bg-[#191919] rounded-3xl flex-1 p-8 flex flex-col gap-4 w-full ">
      <h1 className="flex text-xl md:text-2xl font-bold tracking-tighter text-gray-100 leading-tight">
        User Agent Info
      </h1>
      <h2 className="text-gray-400">{userAgent}</h2>
    </div>
  );
}
