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
    <section className="bg-green-600 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Travel Anywhere, Anytime
        </h1>

        <div className="w-full max-w-3xl bg-white text-black rounded-md shadow-lg p-4 flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-green-300"
          />
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-green-300"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-green-300"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
