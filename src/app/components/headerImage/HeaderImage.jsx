import React from "react";

const HeaderImage = ({ src }) => {
  return (
    <div className="absolute inset-0">
      <img src={src} className="w-full h-full object-cover" loading="lazy" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};

export default HeaderImage;
