import React from "react";

const Title = ({ text, heading }) => {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
        {heading}
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-8">{text}</p>
    </div>
  );
};

export default Title;
