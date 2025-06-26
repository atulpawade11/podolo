import React from 'react';
import { Product } from '@/types/products';
import WishlistButton from '@/components/WishlistButton';

interface Grid2x2SlideProps {
  products: Product[];
}

const Grid2x2Slide: React.FC<Grid2x2SlideProps> = ({ products }) => {
  return (
    <div className="flex flex-col space-y-4">
      {products.map((product) => {
        const hasDiscount = !!product.discountPercent;
        const discountedPrice = hasDiscount
          ? (product.price * (1 - product.discountPercent! / 100)).toFixed(2)
          : product.price.toFixed(2);

        return (
          <div
            key={product.id}
            className="relative p-2 lg:p-0 bg-white text-center"
          >
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
              className="mx-auto w-100 h-100 mb-2 bg-gray-200"
              alt={product.name}
            />

            {/* Product Info */}
            <div className="text-md font-normal text-black">{product.name}</div>

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
      })}
    </div>
  );
};

export default Grid2x2Slide;
