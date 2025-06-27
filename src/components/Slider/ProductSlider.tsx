'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { SimpleProduct } from '@/types/products'; // updated import
import ProductSlide from './ProductSlide';
import Grid2x2Slide from './Grid2x2Slide';
import SingleSlide from './SingleSlide';
import Row4Slide from './Row4Slide';
import CenterTabbedSlider from './CenterTabbedSlider';

interface ProductSliderProps {
  title?: string;
  products: SimpleProduct[]; // updated type
  layout?: 'grid2x2' | 'row4' | 'single' | 'tabbed' | 'center-tabbed';
  tabs?: string[];
  selectedTab?: string;
  onTabChange?: (tab: string) => void;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  products,
  layout = 'row4',
  tabs,
  selectedTab,
  onTabChange,
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const isTabbed = layout === 'tabbed';
  const slidesPerView = isTabbed
    ? 5
    : layout === 'single'
    ? 1
    : layout === 'grid2x2'
    ? 2
    : layout === 'row4'
    ? 4
    : 4;

  if (layout === 'center-tabbed') {
    return (
      <CenterTabbedSlider
        products={products}
        tabs={tabs || []}
        selectedTab={selectedTab || ''}
        onTabChange={onTabChange || (() => {})}
      />
    );
  }

  return (
    <div className="relative mb-12 overflow-visible">
      <div className="container m-auto">
        {title && (
          <h2 className="text-2xl font-normal text-slate-900 mb-6">{title}</h2>
        )}

        {isTabbed && tabs?.length ? (
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-6 text-sm font-medium">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => onTabChange?.(tab)}
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
            <div className="flex space-x-2">
              <button
                ref={prevRef}
                className="w-8 h-8 z-50 cursor-pointer rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 bg-white"
              >
                &#x276E;
              </button>
              <button
                ref={nextRef}
                className="w-8 h-8 z-50 cursor-pointer rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 bg-white"
              >
                &#x276F;
              </button>
            </div>
          </div>
        ) : title ? (
          <div className="flex justify-end mb-4 space-x-2">
            <button
              ref={prevRef}
              className="w-8 h-8 z-50 cursor-pointer rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 bg-white"
            >
              &#x276E;
            </button>
            <button
              ref={nextRef}
              className="w-8 h-8 z-50 cursor-pointer rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 bg-white"
            >
              &#x276F;
            </button>
          </div>
        ) : null}

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== 'boolean'
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          className="!px-1"
        >
          {layout === 'grid2x2'
            ? products
                .filter((_, i) => i % 2 === 0)
                .map((_, i) => (
                  <SwiperSlide key={i}>
                    <Grid2x2Slide products={products.slice(i * 2, i * 2 + 2)} />
                  </SwiperSlide>
                ))
            : products.map((product) => (
                <SwiperSlide key={product.id}>
                  {layout === 'single' && <SingleSlide product={product} />}
                  {layout === 'row4' && <Row4Slide product={product} />}
                  {layout === 'tabbed' && <ProductSlide product={product} />}
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
