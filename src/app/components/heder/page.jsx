"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    // এখানে আপনি search logic বা route করতে পারবেন
    alert(`Searching from ${from} to ${to} on ${date}`);
  };

  return (
    <section className="bg-green-600 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Travel Anywhere, Anytime
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          Book your bus, train, flight, or launch tickets instantly and enjoy a
          hassle-free journey.
        </p>

        {/* Search Form */}
        <div className="w-full max-w-3xl bg-white text-black rounded-md shadow-lg p-4 flex flex-col md:flex-row gap-3">
          {/* From */}
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* To */}
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Date Picker */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Search
          </button>
        </div>

        {/* Optional CTA Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          <Link
            href="/bus"
            className="px-6 py-3 bg-white text-green-600 font-semibold rounded-md hover:bg-gray-100 transition"
          >
            Book Bus
          </Link>
          <Link
            href="/airplane"
            className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-green-600 transition"
          >
            Book Flight
          </Link>
          <Link
            href="/airplane"
            className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-green-600 transition"
          >
            Book Train
          </Link>
          <Link
            href="/airplane"
            className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-green-600 transition"
          >
            Book Ship
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
