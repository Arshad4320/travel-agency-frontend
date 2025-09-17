"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./../button/Button";
import HeaderImage from "../headerImage/HeaderImage";
import SearchForm from "../searchForm/SearchForm";
import Title from "../Title";

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
      <HeaderImage
        src={
          "https://images.unsplash.com/flagged/photo-1550719723-8602e87f2dc8?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0"
        }
      />

      {/* ✅ Header Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-24 px-6">
        <Title
          heading={"Find Your Train"}
          text="Book your train tickets easily and enjoy a safe journey"
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

export default TrainHeader;
