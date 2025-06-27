'use client';

import React, { useState } from 'react';
import ProductSlider from '@/components/Slider/ProductSlider';
import HeroSlider from "@/components/HeroSlider";
import ImageSlider from "@/components/Slider/ImageSlider";
import NewArrival from '@/components/NewArrival';
import Image from 'next/image';
import { SimpleProduct } from '@/types/products';

export default function Home() {
  const [firstTab, setFirstTab] = useState("Latest's Products");
  const [secondTab, setSecondTab] = useState('Sunglasses');

  const products: SimpleProduct[] = [
    { id: 1, name: 'Bride Shoes', price: 52.0, image: '/logo.png', category: "Latest's Products" },
    { id: 2, name: 'Wristh Men Watch', price: 69.0, image: '/logo.png', category: "Latest's Products" },
    { id: 3, name: 'Dustinctive lens collection', price: 36.0, image: '/sunglasses/1.png', category: 'Sunglasses' },
    { id: 4, name: 'Radiant Sight Framers', price: 45.0, image: '/eyeglasses/1.png', category: 'Eyeglasses' },
    { id: 5, name: 'Sphaera Slash', price: 42.0, image: '/eyeglasses/2.png', category: 'Eyeglasses' },
    { id: 6, name: 'Flak 2.0 XL', price: 36.0, image: '/sunglasses/2.png', category: 'Sunglasses' },
    { id: 7, name: 'Vision clarity spectacles', price: 45.0, image: '/eyeglasses/3.png', category: 'Eyeglasses' },
    { id: 8, name: 'Sphaera Slash', price: 42.0, image: '/eyeglasses/3.png', category: 'Eyeglasses' },
    { id: 9, name: 'Sphaera Slash', price: 42.0, image: '/eyeglasses/4.png', category: 'Eyeglasses' },
    { id: 10, name: 'Sphaera Slash', price: 42.0, image: '/eyeglasses/5.png', category: 'Eyeglasses' },
    { id: 11, name: 'Sleek Style Glasses', price: 52.0, image: '/new-arrivals/1.png', category: "New Arrivals" },
    { id: 12, name: 'Spice Thigs up black ribbe.....', price: 52.0, image: '/new-arrivals/2.png', category: "New Arrivals" },
    { id: 13, name: 'Eclipse Vanguard ', price: 360.0, image: '/new-arrivals/3.png', category: "New Arrivals" },
    { id: 14, name: 'Bride Shoes', price: 52.0, image: '/new-arrivals/4.png', category: "New Arrivals" },
    { id: 15, name: 'Sleek Style Glasses', price: 52.0, image: '/new-arrivals/1.png', category: "New Arrivals" },
    { id: 16, name: 'Spice Thigs up black ribbe.....', price: 52.0, image: '/new-arrivals/2.png', category: "New Arrivals" },
    { id: 17, name: 'Eclipse Vanguard ', price: 360.0, image: '/new-arrivals/3.png', category: "New Arrivals" },
    { id: 18, name: 'Vintage Gold Wristwatch ', price: 199.0, image: '/spotlight/1.png', category: "Spotlight Deals" },
    { id: 19, name: 'Vintage Gold Wristwatch ', price: 199.0, image: '/spotlight/1.png', category: "Spotlight Deals" },
    { id: 20, name: 'Vintage Gold Wristwatch ', price: 199.0, image: '/spotlight/1.png', category: "Spotlight Deals" },
    { id: 21, name: 'Vision clarity spectacles', price: 45.0, image: '/watches/1.png', category: 'Watches' },
    { id: 22, name: 'Sphaera Slash', price: 42.0, image: '/watches/2.png', category: 'Watches' },
    { id: 23, name: 'Sphaera Slash', price: 42.0, image: '/watches/3.png', category: 'Watches' },
    { id: 24, name: 'Sphaera Slash', price: 42.0, image: '/watches/1.png', category: 'Watches' },
  ];

  const filterByCategory = (category: string) =>
    products.filter((product) => product.category === category);

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Spotlight + New Arrivals */}
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
          <ProductSlider title="Spotlight Deals" layout="single" products={products.slice(18, 20)} />
          <ProductSlider title="New Arrivals" layout="grid2x2" products={products.slice(10, 16)} />
        </div>
      </div>

      {/* Image Slider */}
      <ImageSlider />

      {/* Tabbed Sunglasses / Eyeglasses */}
      <ProductSlider
        layout="tabbed"
        tabs={['Sunglasses', 'Eyeglasses']}
        selectedTab={secondTab}
        onTabChange={setSecondTab}
        products={filterByCategory(secondTab)}
      />

      {/* Featured Grid (4x2) */}
      <div className="mb-12">
        <div className="container m-auto">
          <h2 className="text-xl font-bold mb-4">Top Fashion Picks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 8).map((p) => (
              <div key={p.id} className="bg-white p-4 rounded shadow">
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold">{p.name}</h3>
                <p className="text-sm font-bold">${p.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner + Watch Slider */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch mb-12">
        <div
          className="w-full md:w-1/3 h-80 lg:h-auto bg-cover bg-center flex flex-col justify-center p-6 text-white"
          style={{ backgroundImage: "url('/watches/bg.png')" }}
        >
          {/* Optional Banner Text */}
        </div>

        <div className="w-full md:w-2/3">
          <NewArrival />
        </div>
      </div>

      {/* Latest Tabbed Products */}
      <ProductSlider
        layout="tabbed"
        tabs={["Latest's Products", "Bestseller's"]}
        selectedTab={firstTab}
        onTabChange={setFirstTab}
        products={filterByCategory(firstTab)}
      />

      {/* Center Tabbed */}
      <ProductSlider
        layout="center-tabbed"
        tabs={['Eyeglasses', 'Sunglasses']}
        selectedTab={secondTab}
        onTabChange={setSecondTab}
        products={filterByCategory(secondTab)}
      />
    </div>
  );
}
