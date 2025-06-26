import React from "react";
import Image from "next/image";
export default function AccountInfo() {
    return (
        <div className="md:col-span-1 border border-gray-300 rounded p-0 bg-white">
            <h4 className="text-sm font-medium text-black p-4">ACCOUNT INFO</h4>
            <hr className="border-b border-gray-300" />
            <div className="p-4">
                <div className="flex items-start gap-4">
                <Image
                    src="/images/Image-7.png"
                    alt="Kevin Gilbert"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                />
                <div>
                    <h5 className="font-semibold text-gray-800">Kevin Gilbert</h5>
                    <p className="text-sm text-gray-500">Indore - 1207, Madhya Pradesh</p>
                </div>
            </div>
            <p className="text-sm text-black mt-2 mb-3">Email: <a href="mailto:kevin.gilbert@gmail.com" className="text-gray-400">kevin.gilbert@gmail.com</a></p>
            <p className="text-sm text-black mb-3">Sec Email: <a href="mailto:kevin12345@gmail.com" className="text-gray-400">kevin12345@gmail.com</a></p>
            <p className="text-sm text-black">Phone: <a href="tel:+12025550118" className="text-gray-400">+1-202-555-0118</a></p>
            <button className="mt-4 text-sm border border-yellow-500 text-yellow-500 hover:bg-yellow-50 px-4 py-3 rounded cursor-pointer">
                EDIT ACCOUNT
            </button>
        </div>
    </div>
    );
}
  