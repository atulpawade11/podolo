'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type PaymentMethod = 'cod' | 'card' | 'net';

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');

  const paymentLabels: Record<PaymentMethod, string> = {
    cod: 'Cash On Delivery',
    card: 'Credit/Debit Card',
    net: 'Net Banking',
  };

  const handleConfirm = () => {
    router.push('/invoice');
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="container m-auto">
        {/* Breadcrumb */}
        <div className="py-6 px-6">
          <nav className="text-sm text-gray-500 mb-2">
            <ol className="flex items-center justify-center space-x-2">
              <li>
                <Link href="/" className="hover:underline text-yellow-400 text-lg">
                  Checkout
                </Link>
              </li>
              <li className="text-gray-400 text-lg font-bold px-4">•••</li>
              <li className="text-gray-800 text-lg">Address</li>
            </ol>
          </nav>
        </div>

        {/* Main Section */}
        <div className="w-full mx-auto px-6 py-8">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Add Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Form */}
            <div className="md:col-span-2 bg-white">
              <div className="border border-gray-300 p-6">
                {/* Personal Details */}
                <div className="mb-6">
                  <h3 className="font-normal mb-2">1. Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="border border-gray-300 p-2 w-full" />
                    <input type="text" placeholder="Last Name" className="border border-gray-300 p-2 w-full" />
                    <input type="email" placeholder="Email Address" className="border border-gray-300 p-2 w-full" />
                    <input type="tel" placeholder="Phone Number" className="border border-gray-300 p-2 w-full" />
                  </div>
                </div>

                {/* Shipping Details */}
                <div className="mb-6">
                  <h3 className="font-normal mb-2">02. Shipping Details</h3>
                  <input type="text" placeholder="Street Address" className="border border-gray-300 p-2 w-full mb-2" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" placeholder="City" className="border border-gray-300 p-2 w-full" />
                    <input type="text" placeholder="Country" className="border border-gray-300 p-2 w-full" />
                    <input type="text" placeholder="Zip Code" className="border border-gray-300 p-2 w-full" />
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Save this information for next time</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>Text me with news and offers</span>
                    </label>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="font-normal mb-2">03. Payment Method</h3>
                  <div className="xl:flex lg:flex space-x-4 mb-6">
                    {(['cod', 'card', 'net'] as PaymentMethod[]).map((method) => (
                      <label
                        key={method}
                        className={`flex text-gray-300 items-center space-x-2 border border-gray-300 p-2 w-full cursor-pointer rounded-md ${
                          paymentMethod === method ? 'ring-1 ring-green-600' : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method}
                          checked={paymentMethod === method}
                          onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                        />
                        <span className="capitalize font-medium">{paymentLabels[method]}</span>
                      </label>
                    ))}
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold text-lg">Credit/Debit Card</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Card Number" className="border border-gray-300 p-2 rounded-md w-full" />
                        <input type="text" placeholder="Card holder name" className="border border-gray-300 p-2 rounded-md w-full" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input type="text" placeholder="City" className="border border-gray-300 p-2 rounded-md w-full" />
                        <input type="text" placeholder="Country" className="border border-gray-300 p-2 rounded-md w-full" />
                        <input type="text" placeholder="Zip Code" className="border border-gray-300 p-2 rounded-md w-full" />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'cod' && (
                    <div className="mb-6 bg-gray-50 p-4 border border-gray-200 rounded-md">
                      <p className="text-gray-700">
                        You’ve selected <strong>Cash On Delivery</strong>. Your payment will be collected upon delivery.
                      </p>
                    </div>
                  )}

                  {paymentMethod === 'net' && (
                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold text-lg">Net Banking</h4>
                      <select className="border border-gray-300 p-2 rounded-md w-full">
                        <option>Select Bank</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="sbi">SBI</option>
                        <option value="axis">Axis Bank</option>
                      </select>
                      <p className="text-sm text-gray-600">
                        You’ll be redirected to your bank’s login page to complete the payment.
                      </p>
                    </div>
                  )}

                  <div className="xl:flex lg:flex justify-between">
                    <button className="bg-yellow-600 text-white px-6 py-2 hover:bg-yellow-700 border border-gray-300 cursor-pointer">
                      Continue Shopping
                    </button>
                    <button onClick={handleConfirm} className="bg-blue-900 text-white px-6 py-2 hover:bg-blue-950 border border-gray-300 cursor-pointer">
                      Confirm Order
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 border border-gray-300">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
              <div className="flex items-start space-x-4 mb-4 border-b pb-4">
                <img src="/images/dress-red.png" alt="product" className="w-16 h-20 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-medium">Midi dress with 2 straps</p>
                  <p className="text-sm text-gray-500">$265</p>
                  <button className="text-red-600 text-xs mt-1 cursor-pointer">🗑 REMOVE</button>
                </div>
                <div className="text-sm text-gray-500">Qty. 1</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>SUBTOTAL</span>
                  <span>$530.00</span>
                </div>
                <div className="bg-gray-100 p-2 rounded space-y-1">
                  <div className="flex justify-between text-gray-500">
                    <span>Shipping</span>
                    <span>----</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Discount</span>
                    <span>$10.50</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping to NY.</span>
                    <span>$2.50</span>
                  </div>
                </div>
                <div className="flex justify-between font-bold text-base">
                  <span>TOTAL</span>
                  <span>$532.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
