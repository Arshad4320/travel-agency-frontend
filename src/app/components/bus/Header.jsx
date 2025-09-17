"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Calendar } from "lucide-react";
import Title from "../Title";
import Button from "../button/Button";

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
    <section className="relative w-full min-h-[85vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1527259472076-72d783997a85?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Bus background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl text-center px-4">
        {/* Title */}
        <Title
          text="Book your bus tickets easily and enjoy a safe journey."
          heading="Travel Anywhere, Anytime"
        />

        {/* Search Form */}
        <div className="mt-8 w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-4 items-center">
          {/* From */}
          <div className="flex items-center gap-2 w-full md:flex-1 bg-gray-50 px-3 py-2 rounded-lg border focus-within:ring-2 focus-within:ring-green-500">
            <MapPin className="text-green-600 shrink-0" />
            <input
              type="text"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500"
            />
          </div>

          {/* To */}
          <div className="flex items-center gap-2 w-full md:flex-1 bg-gray-50 px-3 py-2 rounded-lg border focus-within:ring-2 focus-within:ring-green-500">
            <MapPin className="text-green-600 shrink-0" />
            <input
              type="text"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500"
            />
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 w-full md:flex-1 bg-gray-50 px-3 py-2 rounded-lg border focus-within:ring-2 focus-within:ring-green-500">
            <Calendar className="text-green-600 shrink-0" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none text-gray-800"
            />
          </div>

          {/* Search Button */}
          <Button onClick={handleSearch} title={"Search"} />
        </div>
      </div>
    </section>
  );
};

export default Header;
