// src/components/Dashboard/Sidebar.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'; // Import clsx

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/dashboard/orders', label: 'Order History' },
  { href: '/dashboard/track-order', label: 'Track Order' },
  { href: '/dashboard/wishlist', label: 'Wishlist' },
  { href: '/dashboard/address', label: 'Card & Address' },
  { href: '/dashboard/settings', label: 'Settings' },
  { href: '/login', label: 'Logout' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md py-0 px-0">
      <ul className="space-y-0">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                'block px-4 py-3 hover:bg-yellow-400 hover:text-white transition',
                pathname === link.href ? 'bg-yellow-500 text-white font-medium' : ''
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
