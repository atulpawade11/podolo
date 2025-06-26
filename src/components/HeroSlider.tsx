"use client"; // Only if using Next.js app directory

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Fashion Fusion",
    price: "$123.99",
    button: "Shop Now",
    image: "/images/hero1.png", 
  },
  {
    id: 2,
    title: "Urban Explorer",
    price: "$89.50",
    button: "Explore Now",
    image: "/images/hero1.png",
  },
];

export default function HeroSwiperSlider() {
  return (
    <div className="w-full h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-[.5]"
                priority
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center px-6 md:px-50">
                <div className="text-white space-y-4 max-w-[400px]">
                  <div className="text-xl font-semibold">{slide.price}</div>
                  <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
                  <button className="px-6 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition rounded-sm">
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
