"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MapPin, CalendarDays, PlaneTakeoff } from "lucide-react";
import HeaderImage from "../headerImage/HeaderImage";
import Title from "./../Title";
import SearchForm from "./../searchForm/SearchForm";
import Button from "./../button/Button";

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
    <div className="relative w-full min-h-[80vh]">
      {/* ✅ Background Image */}
      <HeaderImage
        src={
          "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1600&q=80"
        }
      />

      {/* ✅ Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-24 px-6">
        <Title
          heading={"Find Your Airplane"}
          text="Book your airplane tickets easily and enjoy a safe journey"
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
          <Button onClick={handleSearch} title="Search" />
        </div>
      </div>
    </div>
  );
};

export default AirplaneHeader;
