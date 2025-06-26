import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-slate-800 text-sm">
            <div className="border-b">
                <div className="container m-auto">
                    {/* Top Icons Section */}
                    <div className="py-8 px-4 md:px-12 flex flex-wrap justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <Image src="/footer/free-delivery.png" alt="Free Shipping" width={60} height={60} />
                            <div>
                                <p className="font-semibold text-lg">Free Shipping</p>
                                <p className="text-xs font-normal text-slate-600">Free Shipping for orders</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src="/footer/guarantee.png" alt="Money Guarantee" width={60} height={60} />
                            <div>
                                <p className="font-semibold text-lg">Money Guarantee</p>
                                <p className="text-xs font-normal text-slate-600">within 30 days</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src="/footer/customer-service.png" alt="Online Support" width={60} height={60} />
                            <div>
                                <p className="font-semibold text-lg">Online Support</p>
                                <p className="text-xs font-normal text-slate-600">24 hours a day, 7 days a week</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src="/footer/credit-cards.png" alt="Flexible Payment" width={60} height={60} />
                            <div>
                                <p className="font-semibold text-lg">Flexible Payment</p>
                                <p className="text-xs font-normal text-slate-600">Pay with Multiple Credit Cards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Link Sections */}
            <div className="border-b">
                <div className="container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 py-14 px-4 md:px-12">
                        <div>
                            <h4 className="font-semibold mb-4">COMPANY INFO</h4>
                            <ul className="space-y-4 text-slate-600 text-xs">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Payment</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">SUPPORT</h4>
                            <ul className="space-y-4 text-slate-600 text-xs">
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Return & Exchanges</a></li>
                                <li><a href="#">Shopping Support</a></li>
                                <li><a href="#">Shipping & Returns Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">SHOP BY</h4>
                            <ul className="space-y-4 text-slate-600 text-xs">
                                <li><a href="#">Sunglasses</a></li>
                                <li><a href="#">Clothes</a></li>
                                <li><a href="#">Shoes</a></li>
                                <li><a href="#">Watches</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">MORE INFO</h4>
                            <ul className="space-y-4 text-slate-600 text-xs">
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Customer Service</a></li>
                                <li><a href="#">Manufactures</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>

                        {/* Sign Up and Social */}
                        <div>
                            <div className="mb-4">
                                <Image src="/logo.png" alt="Logo" width={100} height={40} className="mb-4" />
                                
                                <h4 className="font-semibold mb-2">SIGN UP FOR EMAIL</h4>
                                <p className="text-xs text-slate-600 mb-3">
                                Enjoy 15% your first order when you signup to our newsletter.
                                </p>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-2/3 px-3 py-2 border border-gray-300 rounded-l text-sm focus:outline-none"
                                    />
                                    <button className="bg-amber-500 text-white px-4 rounded-r flex items-center">SIGN UP</button>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center">
                                <p className="font-semibold mb-0 mr-4">FOLLOW US:</p>
                                <div className="flex space-x-3 text-xl text-slate-600">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container m-auto">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs px-4 md:px-12 py-6 text-slate-500">
                    <p>Copyright ©2025 Paddoolo. All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <a href="#">Blog</a>
                        <a href="#">Privacy & Policy</a>
                        <a href="#">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
