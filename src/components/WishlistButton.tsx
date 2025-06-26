"use client";

import { addWishlist, removeWishlist } from "@/lib/api/services/wishlist";
import { useAuth } from "@/lib/Contexts/AuthContext";
import { useWishlist } from "@/lib/Contexts/WishlistContext";
import React, { useEffect, useState } from "react";

export interface WishlistButtonProps {
  className?: string;
  liked?: boolean;
  product_id?: number;
  onClick?: (liked: boolean) => void;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({
  className = "",
  liked = false,
  product_id = 0,
  onClick = () => {},
}) => {
  const [isLiked, setIsLiked] = useState(liked);
  const { user } = useAuth();
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const [loading, setLoading] = useState(false);

  const productIdStr = product_id.toString();

  const handleClick = async () => {
    if (isLiked) {
      // Remove from wishlist
      setLoading(true);
      if (!user || user.status !== "authenticated") {
        removeFromWishlist(productIdStr);
      } else {
        const { data, error } = await removeWishlist(
          product_id,
          user.token || ""
        );
        if (data) {
          removeFromWishlist(productIdStr);
        } else {
          console.error(error);
        }
      }
      setLoading(false);
    } else {
      // Add to wishlist
      setLoading(true);
      if (!user || user.status !== "authenticated") {
        addToWishlist({ id: productIdStr });
      } else {
        const { data, error } = await addWishlist(product_id, user.token || "");
        if (data) {
          addToWishlist({ id: productIdStr });
        } else {
          console.error(error);
        }
      }
      setLoading(false);
    }

    setIsLiked(!isLiked);
    onClick(!isLiked);
  };

  useEffect(() => {
    setIsLiked(liked);
  }, [liked]);

  useEffect(() => {
    const isProductInWishlist = wishlist.includes(productIdStr);
    setIsLiked(isProductInWishlist);
  }, [wishlist, productIdStr]);

  return (
    <button
      className={`w-9 h-9 flex items-center justify-center rounded-full bg-white text-neutral-700 nc-shadow-lg ${className} ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
      onClick={handleClick}
      disabled={loading}
    >
      {loading && (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            opacity="0.2"
          />
          <path
            d="M12 2A10 10 0 0 1 22 12"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 12 12"
              to="360 12 12"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      )}
      {!loading && (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
            stroke={isLiked ? "#ef4444" : "currentColor"}
            fill={isLiked ? "#ef4444" : "none"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default WishlistButton;
