import React from 'react';
import { Product } from '@/types/products';
import WishlistButton from '@/components/WishlistButton';

interface SingleSlideProps {
  product: Product;
}

const SingleSlide: React.FC<SingleSlideProps> = ({ product }) => {
  const hasDiscount = !!product.discountPercent;
  const discountedPrice = hasDiscount
    ? (product.price * (1 - product.discountPercent! / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <div className="relative p-2 lg:p-0 text-center bg-white">
      {/* Wishlist Button */}
      <div className="absolute top-2 right-2 z-10">
        <WishlistButton product_id={product.id} liked={false} />
      </div>

      {/* Discount Badge */}
      {hasDiscount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{product.discountPercent}%
        </div>
      )}

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto w-full h-full mb-4 bg-gray-200"
      />

      {/* Product Name */}
      <h3 className="text-md font-normal text-black">{product.name}</h3>

      {/* Price Info */}
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
    </div>
  );
};

export default SingleSlide;
