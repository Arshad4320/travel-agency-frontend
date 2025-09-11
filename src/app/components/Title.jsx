import React from "react";

const Title = ({ text }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative inline-block">
      {text}
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 h-1 bg-blue-500 rounded-full"></span>
    </h2>
  );
};

export default Title;
