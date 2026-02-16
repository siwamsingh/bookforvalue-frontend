"use client"
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

import MobileHero1 from "@/assets/HeroCarsole/heroimg1.png"
import MobileHero2 from "@/assets/HeroCarsole/heroimg2.png"
import MobileHero3 from "@/assets/HeroCarsole/heroimg3.png"
import MobileHero4 from "@/assets/HeroCarsole/heroimg4.png"

interface HeroCarouselProps {
  images: StaticImageData[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const smallImages = [MobileHero1, MobileHero2, MobileHero3, MobileHero4]

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  images,
  autoSlide = true,
  autoSlideInterval = 6000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full max-w-7xl mx-auto ">
      <div className="relative overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`slide-${index}`}
              className="w-full bg-gray-900 flex-shrink-0 hidden sm:block object-contain"
            />
          ))}

          {smallImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`slide-${index}`}
              className="w-full bg-gray-900 flex-shrink-0 block sm:hidden object-contain"
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                currentIndex === index
                  ? "bg-white scale-110"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
