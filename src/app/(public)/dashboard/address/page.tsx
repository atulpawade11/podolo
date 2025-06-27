"use client";

import React from "react";
import PaymentCards from '@/components/Dashboard/PaymentCards';
import BillingAddress from '@/components/Dashboard/BillingAddress';

export default function Address() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <div className="flex gap-6">
          {/* Main Content */}
          <main className="flex-1 space-y-6">
          <h2 className="text-xl font-semibold mb-2">Cards & Address</h2>
            {/* Payment Cards (static for now) */}
            <PaymentCards />
            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Account Info */}
              <BillingAddress
                title="Billing Address"
                showDelete
                onDeleteClick={() => console.log("Deleted")}
                user={{
                  name: 'Kevin Gilbert',
                  addressLine: 'East Bazar, Word No. 04...',
                  email: 'kevin.gilbert@gmail.com',
                  phone: '+1-202-555-0118'
                }}
                onEditClick={() => console.log("Edit clicked")}
              />


              {/* Billing Address */}
              <BillingAddress
              title="Shipping Address"
              showDelete
              onDeleteClick={() => console.log("Deleted")}
              user={{
                name: 'Kevin Gilbert',
                addressLine: 'East Bazar, Word No. 04...',
                email: 'kevin.gilbert@gmail.com',
                phone: '+1-202-555-0118'
              }}
              onEditClick={() => console.log("Edit clicked")}
            />


            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
