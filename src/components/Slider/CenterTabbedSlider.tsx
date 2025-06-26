'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';

interface Product {
  id: string | number;
  name: string;
  image: string;
  price: number;
}

interface CenterTabbedSliderProps {
  tabs: string[];
  selectedTab: string;
  onTabChange: (tab: string) => void;
  products: Product[];
}

export default function CenterTabbedSlider({
  tabs,
  selectedTab,
  onTabChange,
  products,
}: CenterTabbedSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const slidesPerView = 4;
  const shouldShowArrows = products.length > slidesPerView;

  const slidePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const slideNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="relative px-2 lg:px-0 bg-gray-100 text-center lg:py-18 py-10">
      <div className="container mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center space-x-6 mb-6 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`border-b-2 pb-2 transition ${
                tab === selectedTab
                  ? 'text-black border-black'
                  : 'text-gray-500 border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Swiper and Arrows */}
        <div className="relative">
          {shouldShowArrows && (
            <button
              onClick={slidePrev}
              aria-label="Previous"
              className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 z-10 flex items-center justify-center rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-100"
            >
              &#x276E;
            </button>
          )}

          {shouldShowArrows && (
            <button
              onClick={slideNext}
              aria-label="Next"
              className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 z-10 flex items-center justify-center rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-100"
            >
              &#x276F;
            </button>
          )}

          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper: any) => {
              swiperRef.current = swiper;
            }}
            navigation={false}
            autoplay
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {products.map((p) => (
              <SwiperSlide key={p.id}>
                <div className="p-2 border border-gray-300 bg-white">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-40 object-contain"
                  />
                  <h3 className="text-sm font-semibold mt-2">{p.name}</h3>
                  <p className="text-sm font-bold">${p.price.toFixed(2)}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
