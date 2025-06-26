import React  from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-0 space-y-0">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

