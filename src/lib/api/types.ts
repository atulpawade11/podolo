// import { User } from './../Contexts/types';
export interface CurrencyDetails {
  currency_code: string;
  currency_symbol: string;
  currency_minor_unit: number;
  currency_decimal_separator: string;
  currency_thousand_separator: string;
  currency_prefix: string;
  currency_suffix: string;
}

export interface LoginResponse {
  token: string;
//   user: { id: string; name: string; email: string, status: 'authenticated' | 'unauthenticated' | 'loading' };
    user_display_name: string;
    user_email: string;
    user_nicename: string;
}

export interface UserResponse {
    id: number;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    url: string;
    description: string;
    link: string;
    locale: string;
    nickname: string;
    slug: string;
    roles: string[];
    registered_date: string;
    capabilities: { [key: string]: boolean };
    extra_capabilities: { [key: string]: boolean };
    avatar_urls: {
      '24': string;
      '48': string;
      '96': string;
    };
    meta: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      persisted_preferences: any[];
    };
    yoast_head: string | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    yoast_head_json: any | null;
    is_super_admin: boolean;
    woocommerce_meta: {
      variable_product_tour_shown: string;
      activity_panel_inbox_last_read: string;
      activity_panel_reviews_last_read: string;
      categories_report_columns: string;
      coupons_report_columns: string;
      customers_report_columns: string;
      orders_report_columns: string;
      products_report_columns: string;
      revenue_report_columns: string;
      taxes_report_columns: string;
      variations_report_columns: string;
      dashboard_sections: string;
      dashboard_chart_type: string;
      dashboard_chart_interval: string;
      dashboard_leaderboard_rows: string;
      order_attribution_install_banner_dismissed: string;
      homepage_layout: string;
      homepage_stats: string;
      task_list_tracked_started_tasks: string;
      android_app_banner_dismissed: string;
      launch_your_store_tour_hidden: string;
      coming_soon_banner_dismissed: string;
    };
    _links: {
      self: Array<{ href: string }>;
      collection: Array<{ href: string }>;
    };
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
  price: string;
  regular_price: string;
  sale_price: string;
  price_range: { min: string; max: string } | null;
  currency_code: string;
  currency_symbol: string;
  currency_minor_unit: number;
  currency_decimal_separator: string;
  currency_thousand_separator: string;
  currency_prefix: string;
  currency_suffix: string;
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
}

export type ProductList = Product[];

export interface QuantityLimits {
  minimum: number;
  maximum: number;
  multiple_of: number;
  editable: boolean;
}

export interface VariationAttribute {
  attribute: string;
  value: string;
}

export interface CartItem {
  key: string;
  id: number;
  quantity: number;
  quantity_limits: QuantityLimits;
  name: string;
  short_description: string;
  description: string;
  sku: string;
  low_stock_remaining: number | null;
  images: ProductImage[];
  variation: VariationAttribute[];
  prices: { price: string; regular_price: string; sale_price: string };
}

export interface Cart {
  items: CartItem[];
  totals: { total_price: string; total_tax: string };
}

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface ApiError {
  code: string;
  message: string;
  data?: { status: number };
}
