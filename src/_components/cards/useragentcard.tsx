"use client";

import React, { useState, useEffect } from "react";

export default function UserAgentCard() {
  const [userAgent, setUserAgent] = useState("Loading...");

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  return (
    <div className="flex flex-col bg-gray-200 justify-center items-center p-4 break-all rounded-lg">
      <h1 className="flex text-xl md:text-2xl font-bold tracking-tighter text-black leading-tight mb-2">
        User Agent Info
      </h1>
      <div className="text-gray-500 text-center text-base">{userAgent}</div>
    </div>
  );
}
