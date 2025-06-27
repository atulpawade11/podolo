export interface SimpleProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface ProductImage {
  id: number;
  src: string;
  thumbnail: string;
  srcset: string;
  sizes: string;
  name: string;
  alt: string;
}

export interface ProductPrices {
  currency_code: string;
  currency_symbol: string;
  currency_minor_unit: number;
  currency_decimal_separator: string;
  currency_thousand_separator: string;
  currency_prefix: string;
  currency_suffix: string;
  price: string;
  regular_price: string;
  sale_price: string;
  price_range: { min: string; max: string } | null;
}

export interface AddToCart {
  text: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  variation: string;
  permalink: string;
  sku: string;
  summary: string;
  short_description: string;
  description: string;
  on_sale: boolean;
  prices: ProductPrices;
  average_rating: string;
  review_count: number;
  images: ProductImage[];
  has_options: boolean;
  is_purchasable: boolean;
  is_in_stock: boolean;
  low_stock_remaining: number | null;
  add_to_cart: AddToCart;
}

export type ProductList = Product[];
