import Link from "next/link";
import {
  SquaresPlusIcon, // for social icon (generic grid)
  CursorArrowRaysIcon,
  ChartPieIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";

export default function Topbar() {
  return (
    <div className="hidden lg:block w-full bg-white border-b border-gray-200 text-sm">
        <div className="container m-auto">
            <div className="w-full mx-auto px-4 flex items-center justify-between h-10">
                {/* Left - Social Icons (substitutes) */}
                <div className="flex items-center space-x-2 text-[#011e41]">
                    <SquaresPlusIcon className="h-5 w-5 cursor-pointer" />
                    <CursorArrowRaysIcon className="h-5 w-5 cursor-pointer" />
                    <ChartPieIcon className="h-5 w-5 cursor-pointer" />
                    <FingerPrintIcon className="h-5 w-5 cursor-pointer" />
                </div>

                {/* Center - Announcement */}
                <div className="text-center text-gray-700">
                    Summer sale discount off 70%{" "}
                    <Link href="/category" className="font-semibold text-[#011e41] underline hover:no-underline">
                        Shop Now
                    </Link>
                </div>

                {/* Right - Links */}
                <div className="flex items-center space-x-5 text-[#011e41] font-medium">
                    <Link href="#">About</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Contact</Link>
                    <Link href="#">FAQs</Link>
                </div>
            </div>
        </div>
    </div>
  );
}


