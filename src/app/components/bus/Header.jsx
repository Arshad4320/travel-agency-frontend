"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (from) query.append("from", from);
    if (to) query.append("to", to);
    if (date) query.append("date", date);
    query.append("transportType", "bus"); // always bus

    router.push(`/search?${query.toString()}`);
  };

  return (
    <section className="relative w-full min-h-cover">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1527259472076-72d783997a85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Bus background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 px-4 flex flex-col items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Travel Anywhere, Anytime
        </h1>

        <div className="w-full max-w-3xl bg-white text-black rounded-md shadow-lg p-4 flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-gray-300"
          />
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-gray-300"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-gray-300"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold transition"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
