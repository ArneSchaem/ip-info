"use client";

import React from "react";

export default function UserAgentCard() {
  const userAgent = navigator.userAgent;

  return (
    <div className="flex flex-col bg-gray-200 justify-center items-center p-4 rounded-lg w-full">
      <h1 className="flex text-xl md:text-2xl font-bold tracking-tighter text-black leading-tight mb-2">
        User Agent Info
      </h1>
      <div className="text-gray-500 text-center text-xs md:text-base">
        {userAgent}
      </div>
    </div>
  );
}
