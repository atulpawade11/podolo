'use client';

import UserGreeting from "@/components/Dashboard/UserGreeting";
import AccountInfo from "@/components/Dashboard/AccountInfo";
import BillingAddress from "@/components/Dashboard/BillingAddress";
import StatusCards from "@/components/Dashboard/StatusCards";
import PaymentCards from "@/components/Dashboard/PaymentCards";
import RecentOrders from "@/components/Dashboard/RecentOrders";

export default function AccountDashboard() {
  return (
    <div>
      <UserGreeting />
      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Account Info */}
        <AccountInfo />

        {/* Billing Address */}
        <BillingAddress
          showProfileImage
          user={{
            name: 'Kevin Gilbert',
            addressLine: 'Indore - 1207, Madhya Pradesh',
            email: 'kevin.gilbert@gmail.com',
            secEmail: 'kevin12345@gmail.com',
            phone: '+1-202-555-0118',
            imageUrl: '/images/Image-7.png'
          }}
          onEditClick={() => console.log("Edit clicked")}
        />


        {/* Status Cards */}
        <StatusCards />
      </div>

      {/* Payment Cards (static for now) */}
      <PaymentCards />
  
      {/* Recent Orders */}
      <RecentOrders />
    </div>
  );
}
