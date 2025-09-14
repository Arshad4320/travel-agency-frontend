"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AirplaneHeader = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();
  //  const handleSearch = () => {
  //    const query = new URLSearchParams();
  //    if (from) query.append("from", from);
  //    if (to) query.append("to", to);
  //    if (date) query.append("date", date);
  //    query.append("transportType", "bus"); // always bus

  //    router.push(`/search?${query.toString()}`);
  //  };

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (from) query.append("from", from);
    if (to) query.append("to", to);
    if (data) query.append("data", data);
    query.append("transportType", "airplane");
    router.push(`/search?${query.toString()}`);
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* ✅ Background Image (Airplane) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1470&q=80"
          alt="Airplane background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Find Your Flight
        </h1>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center w-full max-w-3xl">
          <input
            type="text"
            placeholder="From (City / Airport)"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
            className="w-full md:w-1/4 px-4 py-2 rounded-lg border focus:outline-none text-black"
          />
          <input
            type="text"
            placeholder="To (City / Airport)"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
            }}
            className="w-full md:w-1/4 px-4 py-2 rounded-lg border focus:outline-none text-black"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className="w-full md:w-1/4 px-4 py-2 rounded-lg border focus:outline-none text-black"
          />
          <button
            onClick={handleSearch}
            className="w-full md:w-1/4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirplaneHeader;
