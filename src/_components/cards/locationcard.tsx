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
    <div className="flex flex-col bg-gray-200 justify-center items-center p-4 break-all rounded-lg">
      <h1 className="flex text-xl md:text-2xl font-bold tracking-tighter text-black leading-tight mb-2">
        Location
      </h1>
      <h2 className="text-gray-500">City: {location.city}</h2>
      <h2 className="text-gray-500">Country: {location.country}</h2>
    </div>
  );
};

export default LocationCard;
