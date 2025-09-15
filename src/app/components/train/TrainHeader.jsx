"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className="relative w-full min-h-cover">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/flagged/photo-1550719723-8602e87f2dc8?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Train background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Train</h1>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center w-full max-w-3xl">
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2 rounded-lg border focus:outline-none text-black"
          />
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2 rounded-lg border focus:outline-none text-black"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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

export default TrainHeader;
