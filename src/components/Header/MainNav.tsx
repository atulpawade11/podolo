"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import AvatarDropdown from "./AvatarDropdown";
import CartDropdown from "./CartDropDown";
import Wishlist from "./Wishlist";
import Topbar from "./Topbar";
import Marquee from "./TopMarquee";
import { useAuth } from "@/lib/Contexts/AuthContext";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <Topbar />
      <header className="bg-white border-b border-gray-900/10 sticky top-0 z-50">
        <div className="container m-auto">
          <nav
            aria-label="Global"
            className="mx-auto flex w-full items-center justify-between p-4 lg:px-6"
          >
            {/* Logo + Menu */}
            <div className="flex items-center gap-x-10 lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  alt=""
                  src="/logo.png"
                  className="h-14 w-auto"
                  width={50}
                  height={50}
                />
              </Link>

              <PopoverGroup className="hidden lg:flex lg:gap-x-8">
                <a href="#" className="text-base font-medium text-gray-900">
                  Home
                </a>

                {["Sunglasses", "Watches", "Clothing", "Shoes", "Brands"].map(
                  (category) => (
                    <Popover key={category} className="relative">
                      <PopoverButton className="flex items-center gap-x-1 cursor-pointer outline-0 text-base font-medium text-gray-900">
                        {category}
                        <ChevronDownIcon className="size-5 text-gray-400" />
                      </PopoverButton>
                      <PopoverPanel className="absolute top-full left-0 z-10 mt-3 w-56 rounded-xl bg-white shadow-lg ring-1 ring-gray-200">
                        <div className="p-4 text-sm text-gray-600">
                          Placeholder for {category} dropdown
                        </div>
                      </PopoverPanel>
                    </Popover>
                  )
                )}

                <a href="#" className="text-base font-medium text-gray-900">
                  Sales
                </a>
              </PopoverGroup>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Search + Icons */}
            <div className="hidden lg:flex items-center gap-x-3 ml-auto">
              {/* Search Bar */}
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search products"
                  className="w-full rounded-md border border-gray-300 pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <MagnifyingGlassIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              {/* User Icon */}
              <button className="group w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:bg-slate-100 rounded-full inline-flex items-center justify-center focus:outline-none">
                <UserIcon className="w-6 h-6 text-gray-600 group-hover:text-black" />
              </button>

              <Wishlist />
              <CartDropdown />
              {user?.status === "authenticated" && <AvatarDropdown />}
            </div>
          </nav>

          {/* Mobile Menu */}
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image
                    alt=""
                    src="/logo.png"
                    className="h-8 w-auto"
                    width={32}
                    height={32}
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="size-5 flex-none group-data-open:rotate-180"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <div className="py-6">  
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>

                  {/* Mobile Topbar Content */}
                  <div className="mt-4 border-t border-gray-200 pt-4 space-y-4">
                    {/* Social Icons */}
                    <div className="flex space-x-4 text-[#011e41]">
                      <SquaresPlusIcon className="h-5 w-5 cursor-pointer" />
                      <CursorArrowRaysIcon className="h-5 w-5 cursor-pointer" />
                      <ChartPieIcon className="h-5 w-5 cursor-pointer" />
                      <FingerPrintIcon className="h-5 w-5 cursor-pointer" />
                    </div>

                    {/* Center Text */}
                    <div className="text-sm text-gray-700">
                      Summer sale discount off 70%{" "}
                      <a href="#" className="font-semibold text-[#011e41] underline hover:no-underline">
                        Shop Now
                      </a>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col space-y-2 text-[#011e41] font-medium">
                      <a href="#">About</a>
                      <a href="#">Blog</a>
                      <a href="#">Contact</a>
                      <a href="#">FAQ's</a>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </header>
      <Marquee />
    </>
  );
}
