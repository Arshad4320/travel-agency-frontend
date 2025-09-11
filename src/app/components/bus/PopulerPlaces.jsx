import React from "react";
import Image from "next/image";
import Title from "../Title";

const PopulerPlaces = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      alt: "Cox's Bazar",
    },
    {
      src: "https://images.unsplash.com/photo-1599904866895-6a3786e8f917?auto=format&fit=crop&w=800&q=80",
      alt: "Sundarbans",
    },
    {
      src: "https://images.unsplash.com/photo-1597673661533-1b348f42bff8?auto=format&fit=crop&w=800&q=80",
      alt: "Bandarban Hills",
    },
    {
      src: "https://images.unsplash.com/photo-1599923329680-2b08f1093d63?auto=format&fit=crop&w=800&q=80",
      alt: "Srimangal Tea Garden",
    },
    {
      src: "https://images.unsplash.com/photo-1587393958675-2c804f837e3b?auto=format&fit=crop&w=800&q=80",
      alt: "Ahsan Manzil",
    },
    {
      src: "https://images.unsplash.com/photo-1617196037921-1ff29d7e0f44?auto=format&fit=crop&w=800&q=80",
      alt: "Lalbagh Fort",
    },
  ];

  return (
    <section className="py-10 px-5 max-w-7xl mx-auto">
      <Title text="Most Beautiful Places in Bangladesh" />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-sm font-medium">
              {img.alt}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopulerPlaces;
