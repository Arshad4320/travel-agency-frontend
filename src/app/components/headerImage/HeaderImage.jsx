import React from "react";

const HeaderImage = ({ src }) => {
  return (
    <div className="absolute inset-0">
      <img src={src} className="w-full h-full object-cover" loading="lazy" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
    </div>
  );
};

export default HeaderImage;
