'use client';

import { HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function NewArrivalSection() {
  const products = [
    {
      id: 1,
      name: 'Sporto Men Watch',
      image: '/watches/1.png',
      price: 125,
      oldPrice: 150,
      rating: 4,
      discount: '15%',
    },
    {
      id: 2,
      name: 'Wrist Men Watch',
      image: '/watches/2.png',
      price: 125,
      rating: 4,
    },
    {
      id: 3,
      name: 'Mekano Men Watch',
      image: '/watches/3.png',
      price: 125,
      oldPrice: 150,
      rating: 4,
      discount: '15%',
    },
    
  ];

  return (
      <div className="lg:pr-42 p-4">
        {/* Right: Headline and Products */}
        <div className="w-full lg:w-full">
          <div className="relative inline-block mb-8 text-left">
            {/* Background Circle or Image */}
            <div className="absolute -left-10 -top-3 w-30 h-30 bg-gray-200 rounded-full z-0 hidden lg:block" style={{ backgroundImage: "url('/watches/circle-bg.png')" }}></div>

            {/* Title Text */}
            <h2 className="relative z-10 lg:text-4xl text-2xl text-center lg:text-left font-bold leading-tight text-black">
              New Arrival Men Watch <br /> <span className="block">Look Style</span>
            </h2>
          </div>
          

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {products.map((product) => (
              <div key={product.id} className="relative bg-white lg:text-left">
                <div className="bg-white border border-gray-300">
                  {/* Discount badge */}
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-sm">
                      {product.discount}
                    </div>
                  )}
                  {/* Wishlist Icon */}
                  <div className="absolute top-2 right-2 text-gray-500 hover:text-red-500 cursor-pointer">
                    <HeartIcon className="w-5 h-5" />
                  </div>
                  <div className="relative w-full h-60">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-scale-down"
                    />
                  </div>
                </div>
                <h3 className="mt-4 font-semibold text-sm">{product.name}</h3>
                {/* Rating */}
                <div className="flex space-x-1 mt-2 text-yellow-400 text-sm">
                  {Array.from({ length: product.rating }, (_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                {/* Pricing */}
                <div className="mt-1 text-sm font-bold text-gray-900">
                  ${product.price.toFixed(2)}{' '}
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 text-xs ml-1">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button className="bg-yellow-600 text-white px-6 py-2 text-sm font-medium rounded shadow hover:bg-yellow-700 transition cursor-pointer">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
  );
}
