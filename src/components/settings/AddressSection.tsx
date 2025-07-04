'use client';

import React from 'react';
import { AddressData } from '@/types/settings';

type Props = {
  title: string;
  section: 'billing' | 'shipping';
  data: AddressData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    section: 'billing' | 'shipping'
  ) => void;
};

export default function AddressSection({ title, section, data, onChange }: Props) {
  const fields: { label: string; name: keyof AddressData }[] = [
    { label: 'First Name', name: 'firstName' },
    { label: 'Last Name', name: 'lastName' },
    { label: 'Company Name (Optional)', name: 'company' },
    { label: 'Address', name: 'address' },
    { label: 'City', name: 'city' },
    { label: 'Zip Code', name: 'zip' },
    { label: 'Email', name: 'email' },
    { label: 'Phone Number', name: 'phone' },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-sm shadow-sm w-full">
      <h2 className="font-medium text-sm text-gray-700 mb-6 border-b border-gray-300 p-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm p-4">
        {fields.map(({ label, name }) => (
          <div
            key={name}
            className={name === 'company' || name === 'address' ? 'col-span-2' : ''}
          >
            <label className="block mb-1 font-medium text-gray-700">{label}</label>
            <input
              name={name}
              value={data[name] ?? ''}
              onChange={(e) => onChange(e, section)}
              className="w-full border border-gray-300 px-3 py-3 rounded"
            />
          </div>
        ))}

        <div className="sm:col-span-1">
          <label className="block mb-1 font-medium text-gray-700">Country</label>
          <select
            name="country"
            value={data.country}
            onChange={(e) => onChange(e, section)}
            className="w-full border border-gray-300 px-3 py-3 rounded"
          >
            <option value="">Select Country...</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            {/* Add more countries if needed */}
          </select>
        </div>

        <div className="sm:col-span-1">
          <label className="block mb-1 font-medium text-gray-700">State</label>
          <select
            name="state"
            value={data.state}
            onChange={(e) => onChange(e, section)}
            className="w-full border border-gray-300 px-3 py-3 rounded"
          >
            <option value="">Select State...</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            {/* Add more states as required */}
          </select>
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="w-1/4 bg-yellow-600 hover:bg-yellow-500 text-white font-normal py-3 rounded-sm transition cursor-pointer"
          >
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
}
