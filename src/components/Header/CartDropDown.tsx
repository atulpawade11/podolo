"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Prices from "../Prices";

interface Product {
  name: string;
  price: number;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    name: "Classic Sunglasses",
    price: 99.99,
    image:
      "https://wp1.manageprojects.co.uk/sunglasses/wp-content/uploads/2025/05/wp_dummy_content_generator_79.jpg",
  },
  {
    name: "Leather Wallet",
    price: 49.99,
    image:
      "https://wp1.manageprojects.co.uk/sunglasses/wp-content/uploads/2025/05/wp_dummy_content_generator_79.jpg",
  },
  {
    name: "Wireless Earbuds",
    price: 149.99,
    image:
      "https://wp1.manageprojects.co.uk/sunglasses/wp-content/uploads/2025/05/wp_dummy_content_generator_79.jpg",
  },
];

export default function CartDropdown() {
  const router = useRouter();

  const renderProduct = (item: Product, index: number, close: () => void) => {
    const { name, price, image } = item;
    return (
      <div key={index} className="flex py-5 last:pb-0">
        <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <Image
            fill
            src={image}
            alt={name}
            className="h-full w-full object-contain object-center"
          />
          <Link
            onClick={close}
            className="absolute inset-0"
            href={"/product-detail"}
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div className="flex justify-between">
            <div>
              <h3 className="text-base font-medium">
                <Link onClick={close} href={"/product-detail"}>
                  {name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                <span>Natural</span>
                <span className="mx-2 border-l border-slate-200 dark:border-slate-700 h-4"></span>
                <span>XL</span>
              </p>
            </div>
            <Prices price={price} className="mt-0.5" />
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500 dark:text-slate-400">Qty 1</p>
            <div className="flex">
              <button
                type="button"
                className="font-medium text-primary-6000 dark:text-primary-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`
              ${open ? "" : "text-opacity-90"}
              group w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:bg-slate-100 rounded-full inline-flex items-center justify-center focus:outline-none relative
            `}
          >
            <div className="w-3.5 h-3.5 flex items-center justify-center bg-primary-500 absolute top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">
              <span className="mt-[1px]">3</span>
            </div>
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.9 16.99 7.54 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.25 22C16.94 22 17.5 21.44 17.5 20.75C17.5 20.06 16.94 19.5 16.25 19.5C15.56 19.5 15 20.06 15 20.75C15 21.44 15.56 22 16.25 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8.25 22C8.94 22 9.5 21.44 9.5 20.75C9.5 20.06 8.94 19.5 8.25 19.5C7.56 19.5 7 20.06 7 20.75C7 21.44 7.56 22 8.25 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9 8H21"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <Link className="block md:hidden absolute inset-0" href="/cart" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="hidden md:block absolute z-10 w-screen max-w-xs sm:max-w-md px-4 mt-3.5 -right-28 sm:right-0 sm:px-0">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                <div className="relative bg-white">
                  <div className="max-h-[60vh] p-5 overflow-y-auto hiddenScrollbar">
                    <h3 className="text-xl font-semibold">Shopping cart</h3>
                    <div className="divide-y divide-slate-100">
                      {PRODUCTS.map((item, index) =>
                        renderProduct(item, index, close)
                      )}
                    </div>
                  </div>
                  <div className="bg-neutral-50 p-5">
                    <p className="flex justify-between font-semibold text-slate-900">
                      <span>
                        <span>Subtotal</span>
                        <span className="block text-sm text-slate-500 font-normal">
                          Shipping and taxes calculated at checkout.
                        </span>
                      </span>
                      <span>$299.00</span>
                    </p>
                    <div className="flex space-x-2 mt-5">
                    <ButtonPrimary
                      type="button"
                      onClick={() => {
                        console.log("navigating to /cart");
                        close();
                        router.push("/cart");
                      }}
                    >
                      View Cart
                    </ButtonPrimary>
                      <ButtonSecondary
                        type="button"
                        onClick={() => {
                          close();
                          router.push("/checkout");
                        }}
                      >
                        Checkout
                      </ButtonSecondary>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
