"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, CalendarDays, Search } from "lucide-react";
import Button from "./../button/Button";

const TrainHeader = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (from) query.append("from", from);
    if (to) query.append("to", to);
    if (date) query.append("date", date);
    query.append("transportType", "train");
    router.push(`/search?${query.toString()}`);
  };

  return (
    <div className="relative w-full min-h-[80vh]">
      {/* ✅ Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/flagged/photo-1550719723-8602e87f2dc8?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Train background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* ✅ Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Find Your Train
        </h1>

        {/* ✅ Search Box */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-4 items-center w-full max-w-4xl">
          {/* From */}
          <div className="relative w-full md:w-1/4">
            <MapPin className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="From (Station / City)"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-10 py-2 rounded-lg  focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
            />
          </div>

          {/* To */}
          <div className="flex items-center gap-2 w-full md:flex-1 border rounded-xl px-3 py-2 bg-white hover:shadow-md transition">
            <MapPin className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="To (Station / City)"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-10 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
            />
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 w-full md:flex-1 border rounded-xl px-3 py-2 bg-white hover:shadow-md transition">
            <CalendarDays className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none text-black"
            />
          </div>

          {/* Button */}
          {/* <button
            onClick={handleSearch}
            className="flex items-center justify-center gap-2 w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
          >
         
          </button> */}
          <Button onClick={handleSearch} title={"Search"} />
        </div>
      </div>
    </div>
  );
};

export default TrainHeader;
