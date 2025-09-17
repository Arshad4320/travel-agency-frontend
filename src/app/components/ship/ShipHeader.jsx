"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MapPin, CalendarDays, Ship } from "lucide-react";
import Button from "../button/Button";
import HeaderImage from "../headerImage/HeaderImage";
import Title from "../Title";
import SearchForm from "../searchForm/SearchForm";

const ShipHeader = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (from) query.append("from", from);
    if (to) query.append("to", to);
    if (date) query.append("date", date);
    query.append("transportType", "ship");
    router.push(`/search?${query.toString()}`);
  };

  return (
    <div className="relative w-full min-h-[80vh]">
      {/* ✅ Background Image */}
      <HeaderImage
        src={
          "https://images.unsplash.com/photo-1596434220574-9af8bf9a0891?q=80&w=1600&auto=format&fit=crop"
        }
      />

      {/* ✅ Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-24 px-6">
        <Title
          heading={"Find Your Ship"}
          text="Book your Ship tickets easily and enjoy a safe journey"
        />

        {/* ✅ Search Box */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-4 items-center w-full max-w-4xl">
          <SearchForm
            from={from}
            to={to}
            date={date}
            onFromChange={(e) => setFrom(e.target.value)}
            onToChange={(e) => setTo(e.target.value)}
            onDateChange={(e) => setDate(e.target.value)}
          />
          <Button onClick={handleSearch} title={"Search"} />
        </div>
      </div>
    </div>
  );
};

export default ShipHeader;
