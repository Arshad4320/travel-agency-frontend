import { Search } from "lucide-react";
import React from "react";

const Button = ({ onClick, title }) => {
  return (
    // <button
    //   className="flex items-center justify-center gap-2 w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
    //   onClick={onClick}
    // >
    //   {title}
    //   <Search size={18} />
    // </button>
    <button
      onClick={onClick}
      className="w-full md:w-1/4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition-all"
    >
      {title}
    </button>
  );
};

export default Button;

//  <button
//    onClick={handleSearch}
//    className="w-full md:w-1/4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition-all"
//  >
//    Search
//  </button>;
