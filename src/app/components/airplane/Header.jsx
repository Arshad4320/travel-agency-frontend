"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MapPin, CalendarDays, PlaneTakeoff } from "lucide-react";
import Button from "../button/Button";

const AirplaneHeader = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (from) query.append("from", from);
    if (to) query.append("to", to);
    if (date) query.append("date", date);
    query.append("transportType", "airplane");
    router.push(`/search?${query.toString()}`);
  };

  return (
    <div className="relative w-full min-h-cover">
      {/* ✅ Background Image (Airplane) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1600&q=80"
          alt="Airplane background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-3">
          Find Your Flight
        </h1>

        {/* Search Box */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-4 items-center w-full max-w-4xl">
          {/* From Input */}
          <div className="relative w-full md:w-1/4">
            <MapPin className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="From (City / Airport)"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-10 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
            />
          </div>

          {/* To Input */}
          <div className="relative w-full md:w-1/4">
            <MapPin className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="To (City / Airport)"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-10 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
            />
          </div>

          {/* Date Input */}
          <div className="relative w-full md:w-1/4">
            <CalendarDays className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-10 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
            />
          </div>

          {/* Search Button */}
          <Button onClick={handleSearch} title={"Search"} />
        </div>
      </div>
    </div>
  );
};

export default AirplaneHeader;
