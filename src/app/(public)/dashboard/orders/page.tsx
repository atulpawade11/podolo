// src/app/(public)/dashboard/orders/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from 'lucide-react';

type Order = {
  id: string;
  status: "COMPLETED" | "CANCELED";
  date: string; // ISO format
  total: string;
  products: number;
};

const ordersData: Order[] = [
  {
    id: "#71667167",
    status: "COMPLETED",
    date: "2025-06-02T19:28:00",
    total: "$80",
    products: 11,
  },
  {
    id: "#95214362",
    status: "CANCELED",
    date: "2025-03-20T23:14:00",
    total: "$160",
    products: 3,
  },
  {
    id: "#71667167",
    status: "COMPLETED",
    date: "2025-02-02T19:28:00",
    total: "$80",
    products: 11,
  },
  {
    id: "#71667167",
    status: "COMPLETED",
    date: "2015-01-15T19:28:00",
    total: "$80",
    products: 11,
  },
  {
    id: "#95214362",
    status: "CANCELED",
    date: "2014-12-20T23:14:00",
    total: "$160",
    products: 3,
  },
  {
    id: "#71667167",
    status: "COMPLETED",
    date: "2025-06-02T19:28:00",
    total: "$80",
    products: 11,
  },
  {
    id: "#95214362",
    status: "CANCELED",
    date: "2025-03-20T23:14:00",
    total: "$160",
    products: 3,
  },
  {
    id: "#71667167",
    status: "COMPLETED",
    date: "2025-02-02T19:28:00",
    total: "$80",
    products: 11,
  },
];

const ITEMS_PER_PAGE = 5;

export default function OrdersPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ordersData.length / ITEMS_PER_PAGE);
  const paginatedOrders = ordersData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white shadow-sm rounded-md overflow-hidden">
      <div className="p-4 font-semibold text-gray-800 border-b">ORDER HISTORY</div>

      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-500 font-normal border-b border-gray-300 bg-gray-50">
            <th className="px-4 py-3">Order ID</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Total</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((order, idx) => (
            <tr key={idx} className="border-b border-gray-300">
              <td className="px-4 py-3 font-normal text-black">{order.id}</td>
              <td
                className={`px-4 py-3 font-normal ${
                  order.status === "COMPLETED" ? "text-green-600" : "text-red-600"
                }`}
              >
                {order.status}
              </td>
              <td className="px-4 py-3 text-gray-500">{formatDate(order.date)}</td>
              <td className="px-4 py-3 text-gray-500">
                {order.total} ({order.products} Products)
              </td>
              <td className="px-4 py-3 text-right">
                <Link
                  href={`/dashboard/orders/${order.id.replace('#', '')}`} // remove '#' if needed
                  className="flex items-center font-normal text-yellow-500 hover:underline font-medium cursor-pointer"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-center p-4 border-t bg-gray-50">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="w-8 h-8 rounded-full border hover:bg-gray-200 disabled:opacity-30 mr-2 flex items-center justify-center cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded-full border text-sm  cursor-pointer ${
                currentPage === i + 1
                  ? "bg-blue-900 text-white"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="w-8 h-8 rounded-full border hover:bg-gray-200 disabled:opacity-30 ml-2 flex items-center justify-center cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

