'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const sliderItems = [
  { title: 'Running', image: '/images/running.png' },
  { title: 'Mountain Bike', image: '/images/mountain-bike.png' },
  { title: 'Swimming', image: '/images/swimming.png' },
  { title: 'Driving', image: '/images/driving.png' },
  { title: 'Mountain Bike', image: '/images/mountain-bike.png' },
];

export default function EyewearSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative bg-white py-12 px-8">
      <div className="absolute right-0 top-0 w-full lg:w-2/3 h-1/4 lg:h-1/2 bg-[#0A1C3C] z-0" />

      <div className="max-w-full mx-auto relative z-10">
        <div className="flex justify-center items-center relative mb-8">
          <h2 className="lg:text-4xl text-xl font-bold text-[#ffffff] lg:text-[#0A1C3C] lg:mr-8 mr-2">EYEWEAR</h2>
          <h2 className="lg:text-4xl text-xl font-bold text-white lg:pr-115 pr-0">FOR ANY ACTIVITY</h2>

          {/* Arrows (only on large screens) */}
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 gap-2 z-20 hidden lg:flex">
            <button
              ref={prevRef}
              className="w-8 h-8 cursor-pointer rounded-full border border-gray-300 text-white hover:bg-gray-100 hover:text-black flex items-center justify-center"
            >
              &#x276E;
            </button>
            <button
              ref={nextRef}
              className="w-8 h-8 cursor-pointer rounded-full border border-gray-300 text-white hover:bg-gray-100 hover:text-black flex items-center justify-center"
            >
              &#x276F;
            </button>
          </div>
        </div>

        <div className="container m-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            loop={true}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            onInit={(swiper) => {
              // @ts-expect-error
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full h-72 object-cover rounded"
                  />
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dots (only visible on small devices) */}
          <div className="swiper-pagination mt-6 block lg:hidden text-center" />
        </div>
      </div>
    </div>
  );
}
