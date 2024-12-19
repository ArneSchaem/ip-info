"use client";

import React, { useState, useEffect } from "react";
import { FileUser } from "lucide-react";

export default function UserAgentCard() {
  const [userAgent, setUserAgent] = useState("Loading...");

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  return (
    <div className="relative rounded-3xl flex-1 p-8  flex flex-col gap-4 w-full bg-[#191919] leading-tight">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-[#252525]">
          <FileUser className="w-5 h-5 text-orange-400" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-gray-100">
          User Agent Info
        </h1>
      </div>
      <h2 className="text-gray-400">{userAgent}</h2>
    </div>
  );
}
