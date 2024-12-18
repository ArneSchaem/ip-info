"use client";

import React, { useState, useEffect } from "react";

export default function BrowserCard() {
  const [browserInfo, setBrowserInfo] = useState({
    name: "Loading...",
    version: "",
  });

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const browsers = ["Chrome", "Firefox", "Safari", "Opera", "Edge"];
    const name = browsers.find((b) => ua.includes(b)) || "Unknown Browser";
    const version = ua.split(`${name}/`)[1]?.split(" ")[0] || "";

    setBrowserInfo({ name, version });
  }, []);

  return (
    <div className="relative bg-[#191919] rounded-3xl flex-1 p-8  flex flex-col gap-4 w-full ">
      <h1 className="flex text-xl md:text-2xl font-bold tracking-tighter text-gray-100 leading-tight">
        Browser
      </h1>
      <h2 className="text-gray-400">
        {`${browserInfo.name} ${browserInfo.version}`}
      </h2>
    </div>
  );
}
