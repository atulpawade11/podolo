'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { productApi } from '@/lib/api/services/products';
import { ProductList } from '@/lib/api/types';

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductList | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await productApi.getProducts();
      setProducts(data);
      setError(error);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-red-500 bg-red-100 p-4 rounded">
          Error: {error}
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return <div className="container mx-auto p-4">No products found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <div className="relative w-full h-48">
              <Image
                src={product.images[0]?.src || '/fallback.jpg'}
                alt={product.images[0]?.alt || 'product image'}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>{product.prices.currency_symbol}{(parseFloat(product.prices.price) / 100).toFixed(2)}</p>
            <button className="bg-blue-500 text-white p-2 rounded mt-2">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}