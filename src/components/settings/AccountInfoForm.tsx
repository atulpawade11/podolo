'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { AccountFormData } from '@/types/settings';

type Props = {
  formData: AccountFormData;
  setFormData: React.Dispatch<React.SetStateAction<AccountFormData>>;
};

export default function AccountInfoForm({ formData, setFormData }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, avatar: imageUrl, isLocal: true }));
    }
  };

  return (
    <div className="w-full mx-auto bg-white border border-gray-200 rounded-sm shadow-sm">
      <h2 className="font-medium text-sm text-gray-700 mb-6 border-b border-gray-300 p-4">
        ACCOUNT SETTING
      </h2>

      <div className="flex flex-col md:flex-row gap-8 p-4">
        {/* Avatar Section */}
        <div className="flex flex-col items-center md:block space-y-2">
          <div className="w-28 h-28 relative rounded-full overflow-hidden">
            <Image
              src={formData.avatar || '/default-avatar.png'}
              alt="User Avatar"
              width={112}
              height={112}
              className="object-cover rounded-full"
            />
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            type="button"
            className="text-sm text-black hover:text-yellow-500 cursor-pointer"
          >
            Change Avatar
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Form Inputs */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          {[
            { label: 'Display Name', name: 'displayName' },
            { label: 'Username', name: 'username' },
            { label: 'Full Name', name: 'fullName' },
            { label: 'Email', name: 'email' },
            { label: 'Secondary Email', name: 'secondaryEmail' },
            { label: 'Phone', name: 'phone' },
            { label: 'Phone Number', name: 'phoneNumber' },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block mb-1 font-medium text-gray-700">
                {label}
              </label>
              <input
                type="text"
                name={name}
                value={formData[name as keyof AccountFormData] || ''}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-3"
              />
            </div>
          ))}

          {/* Bio field */}
          <div className="col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
            />
          </div>

          {/* Submit button */}
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
    </div>
  );
}
