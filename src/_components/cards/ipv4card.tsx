import React, { useState, useEffect } from "react";

const IPv4Card = () => {
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/get-ip")
      .then((res) => {
        if (!res.ok) throw new Error("Fehler beim Abrufen der IP");
        return res.json();
      })
      .then((data) => {
        setIp(data.ip);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div className="flex flex-col bg-red-100 justify-center items-center p-4 rounded-lg">
        <h1 className="text-xl font-bold text-red-600">Fehler</h1>
        <h2 className="text-red-500">{error}</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-gray-200 justify-center items-center p-4 rounded-lg">
      <h1 className="text-xl font-bold">IPv4</h1>
      <h2 className="text-gray-500">{loading ? "Lade..." : ip}</h2>
    </div>
  );
};

export default IPv4Card;
