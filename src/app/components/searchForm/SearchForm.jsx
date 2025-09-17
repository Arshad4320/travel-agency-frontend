"use client";
import React from "react";
import { MapPin, Calendar } from "lucide-react";

const SearchForm = ({
  from,
  to,
  date,
  onFromChange,
  onToChange,
  onDateChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {/* From */}
      <div className="relative w-full ">
        <MapPin className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
        <input
          type="text"
          name="from"
          placeholder="From"
          value={from}
          onChange={onFromChange}
          className="w-full px-10 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
        />
      </div>

      {/* To */}
      <div className="relative w-full ">
        <MapPin className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={to}
          onChange={onToChange}
          className="w-full px-10 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
        />
      </div>

      {/* Date */}
      <div className="relative w-full ">
        <Calendar className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
        <input
          type="date"
          name="date"
          value={date}
          onChange={onDateChange}
          className="w-full px-10 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
        />
      </div>
    </div>
  );
};

export default SearchForm;
