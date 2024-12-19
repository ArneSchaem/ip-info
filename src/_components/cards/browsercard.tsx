"use client";

import React, { useState, useEffect } from "react";
import { PanelTop } from "lucide-react";

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
    <div className="relative rounded-3xl flex-1 p-8  flex flex-col gap-4 w-full bg-[#191919]">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-[#252525]">
          <PanelTop className="w-5 h-5 text-rose-400" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-gray-100">
          Browser
        </h1>
      </div>
      <h2 className="text-gray-400">
        {`${browserInfo.name} ${browserInfo.version}`}
      </h2>
    </div>
  );
}
