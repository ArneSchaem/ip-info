"use client";

import { useState, useEffect } from "react";

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
    <div className="flex flex-col bg-gray-200 justify-center items-center p-4 break-all rounded-lg">
      <h1 className="flex text-xl md:text-2xl font-bold tracking-tighter text-black leading-tight mb-2">
        Browser
      </h1>
      <h2 className="text-gray-500 text-center text-base">
        {`${browserInfo.name} ${browserInfo.version}`}
      </h2>
    </div>
  );
}
