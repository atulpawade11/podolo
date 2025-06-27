import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import WishlistButton from '@/components/WishlistButton';

interface Row4SlideProps {
  product: Product;
}

const Row4Slide: React.FC<Row4SlideProps> = ({ product }) => {
  const hasDiscount = !!product.discountPercent;
  const discountedPrice = hasDiscount
    ? (product.price * (1 - product.discountPercent! / 100)).toFixed(2)
    : product.price.toFixed(2);

  // Assume product.rating is a number between 0 and 5
  const rating = product.rating ?? 0;

  return (
    <div className="relative p-4 bg-white">
      {/* Wishlist */}
      <div className="absolute top-2 right-2 z-10">
        <WishlistButton product_id={product.id} liked={false} />
      </div>

      {/* Discount Badge */}
      {hasDiscount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
          -{product.discountPercent}%
        </div>
      )}

      {/* Product Image */}
      <div className="relative mx-auto w-full h-[200px] bg-gray-200">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Product Name */}
      <div className="mt-2 text-sm font-medium">{product.name}</div>

      {/* Price */}
      <div className="text-sm mt-1">
        {hasDiscount ? (
          <>
            <span className="text-gray-400 line-through mr-2">${product.price.toFixed(2)}</span>
            <span className="text-red-600 font-semibold">${discountedPrice}</span>
          </>
        ) : (
          <span className="text-gray-800 font-medium">${product.price.toFixed(2)}</span>
        )}
      </div>

      {/* Star Rating with yellow square boxes */}
      <div className="flex gap-1 mt-2">
        {Array.from({ length: 5 }, (_, i) => (
            <div
            key={i}
            className={`w-5 h-5 rounded-[3px] flex items-center justify-center text-xs font-bold border ${
                i < rating
                ? 'bg-gray-200 text-yellow-600 border-yellow-800'
                : 'bg-yellow-400 text-white border-white'
            }`}
            >
                ★
            </div>
        ))}
        </div>

    </div>
  );
};

export default Row4Slide;
