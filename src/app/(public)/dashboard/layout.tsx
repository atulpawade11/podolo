// src/app/(public)/dashboard/layout.tsx
import React from 'react';
import Breadcrumb from "@/components/Dashboard/Breadcrumb";
import Sidebar from '@/components/Dashboard/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb />

        <div className="flex gap-6">
          {/* Sidebar */}
          <Sidebar />
          <main className="flex-1 p-4 space-y-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
