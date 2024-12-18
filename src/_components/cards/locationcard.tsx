import React, { useEffect, useState } from "react";

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
    <div className="relative bg-[#191919] rounded-3xl flex-1 p-8 flex flex-col gap-4 w-full ">
      <h1 className="flex text-xl md:text-2xl font-bold tracking-tighter text-gray-100 leading-tight">
        Location{" "}
      </h1>
      <h2 className="text-gray-400">City: {location.city}</h2>
      <h2 className="text-gray-400">Country: {location.country}</h2>
    </div>
  );
};

export default LocationCard;
