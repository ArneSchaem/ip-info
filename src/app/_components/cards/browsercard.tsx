"use client";

export default function BrowserCard() {
  const ua = navigator.userAgent;
  const browsers = ["Chrome", "Firefox", "Safari", "Opera", "Edge"];
  const name = browsers.find((b) => ua.includes(b)) || "Unbekannter Browser";
  const version = ua.split(`${name}/`)[1]?.split(" ")[0] || "";

  return (
    <div className="flex flex-col bg-gray-200 justify-center items-center p-4 rounded-lg w-full">
      <h1 className="flex text-xl md:text-2xl font-bold tracking-tighter text-black leading-tight mb-2">
        Browser
      </h1>
      <h2 className="text-gray-500 text-center text-xs md:text-base">
        {`${name} ${version}`}
      </h2>
    </div>
  );
}
