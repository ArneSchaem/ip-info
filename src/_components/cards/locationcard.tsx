import React, { useEffect, useState } from "react";
import { MapPinned } from "lucide-react";

const LocationCard = () => {
  const [location, setLocation] = useState({
    city: "Unknown",
    country: "Unknown",
  });

  useEffect(() => {
    fetch("/api/get-location")
      .then((res) => res.json())
      .then((data) =>
        setLocation({
          city: data.city || "Unknown",
          country: data.country || "Unknown",
        }),
      );
  }, []);

  return (
    <div className="relative rounded-3xl flex-1 p-8  flex flex-col gap-4 w-full bg-[#191919] leading-tight">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-[#252525]">
          <MapPinned className="w-5 h-5 text-rose-400" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-gray-100">
          Location{" "}
        </h1>
      </div>
      <h2 className="text-gray-400">City: {location.city}</h2>
      <h2 className="text-gray-400">Country: {location.country}</h2>
    </div>
  );
};

export default LocationCard;
