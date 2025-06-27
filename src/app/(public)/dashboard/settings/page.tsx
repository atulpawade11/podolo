'use client';

import { useState } from 'react';
import AccountInfoForm from '@/components/settings/AccountInfoForm';
import AddressSection from '@/components/settings/AddressSection';
import ChangePasswordForm from '@/components/settings/ChangePasswordForm';
import { AccountFormData, AddressData } from '@/types/settings';

export default function Settings() {
  const [formData, setFormData] = useState<AccountFormData>({
    avatar: '',
    displayName: '',
    username: '',
    fullName: '',
    email: '',
    phone: '',
    bio: '',
    secondaryEmail: '',
    phoneNumber: '',
  });

  const [billing, setBilling] = useState<AddressData>({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const [shipping, setShipping] = useState<AddressData>({ ...billing });

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    section: 'billing' | 'shipping'
  ) => {
    const { name, value } = e.target;
    const updater = section === 'billing' ? setBilling : setShipping;
    updater(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving account data:', formData);
    console.log('Billing address:', billing);
    console.log('Shipping address:', shipping);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <AccountInfoForm formData={formData} setFormData={setFormData} />
      <div className="grid md:grid-cols-2 gap-6">
        <AddressSection title="BILLING ADDRESS" section="billing" data={billing} onChange={handleAddressChange} />
        <AddressSection title="SHIPPING ADDRESS" section="shipping" data={shipping} onChange={handleAddressChange} />
      </div>
      <ChangePasswordForm />
    </form>
  );
}
