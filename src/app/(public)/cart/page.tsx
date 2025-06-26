'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Midi dress with 2 straps',
            price: 265,
            quantity: 1,
            image: '/images/dress-red.png',
        },
        {
            id: 2,
            name: 'Midi dress with 2 straps',
            price: 265,
            quantity: 1,
            image: '/images/dress-black.png',
        },
    ]);

    const handleQuantityChange = (id: number, delta: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 2.5;
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen bg-white">
            <div className="container m-auto">
                {/* Breadcrumb Section */}
                <div className="py-6 px-6">
                    <div className="w-full mx-auto">
                        <nav className="text-sm text-gray-500 mb-2">
                            <ol className="flex items-center justify-center space-x-2">
                                <li>
                                    <Link href="/" className="hover:underline text-yellow-400 text-lg">Cart</Link>
                                </li>
                                <li className="text-gray-400 text-lg font-bold pl-4 pr-4">•••</li>
                                <li className="text-gray-800 text-lg">Address</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Cart Section */}
                <div className="w-full mx-auto px-6 py-8">
                    <h2 className="text-xl font-bold mb-6">My Cart ({cartItems.length} items)</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="md:col-span-2 space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="w-full border border-gray-300 p-4">
                                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 w-full">
                                  
                                  {/* Product Image */}
                                  <div className="w-[100px] h-[120px] flex-shrink-0">
                                    <Image
                                      src={item.image}
                                      alt={item.name}
                                      width={100}
                                      height={100}
                                      className="rounded-md object-cover w-full h-full"
                                    />
                                  </div>
                              
                                  {/* Content Row */}
                                  <div className="flex flex-col md:flex-row items-center justify-between flex-1 w-full mt-4 md:mt-0">
                                    {/* Title & Price */}
                                    <div className="text-center md:text-left mb-2 md:mb-0">
                                      <h3 className="font-normal text-xl text-base">{item.name}</h3>
                                      <p className="text-md text-gray-500">${item.price}</p>
                                    </div>
                              
                                    {/* Quantity Controls */}
                                    <div className="flex items-center space-x-2 border border-gray-300">
                                      <button
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                        className="px-3 py-1 cursor-pointer"
                                      >
                                        -
                                      </button>
                                      <span>{item.quantity}</span>
                                      <button
                                        onClick={() => handleQuantityChange(item.id, 1)}
                                        className="px-3 py-1 cursor-pointer"
                                      >
                                        +
                                      </button>
                                    </div>
                              
                                    {/* Total Price */}
                                    <div className="font-normal  text-gray-500 text-lg">${item.price * item.quantity}</div>
                              
                                    {/* Trash Icon */}
                                    <button className="text-gray-500 hover:text-red-600 cursor-pointer">
                                        🗑
                                    </button>
                                  </div>
                                </div>
                              </div>
                              
                            ))}

                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="Coupon code"
                                    className="border border-gray-300 p-2 flex-1"
                                />
                                <button className="bg-yellow-600 text-white px-4 py-2 hover:bg-yellow-700 cursor-pointer">
                                    Apply Coupon
                                </button>
                                <button className="bg-gray-800 text-white px-4 py-2 hover:bg-gray-900 cursor-pointer">
                                    Update Cart
                                </button>
                            </div>
                        </div>

                        {/* Cart Totals */}
                        <div className="border border-gray-300 p-6 bg-white">
                            <h4 className="text-xl font-semibold mb-4">Cart totals</h4>

                            <div className="space-y-2 text-sm">
                                {/* Subtotal */}
                                <div className="flex justify-between text-lg">
                                    <span>SUBTOTAL</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>

                                {/* Shipping Info in Gray Box */}
                                <div className="bg-gray-100 p-6 space-y-3">
                                    <div className="flex justify-between text-black">
                                        <span>Shipping</span>
                                        <span>----</span>
                                    </div>
                                    <div className="flex justify-between text-black">
                                        <span>Flat rate</span>
                                        <span>----</span>
                                    </div>
                                    <div className="flex justify-between text-black">
                                        <span>Shipping to NY.</span>
                                        <span>${shipping.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between text-base text-lg mt-2">
                                    <span>TOTAL</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <Link href="/checkout">
                                <button className="mt-6 w-full bg-yellow-600 text-white py-3 hover:bg-yellow-700 cursor-pointer">
                                    Proceed To Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
