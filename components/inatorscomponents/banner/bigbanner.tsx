import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const BigBanner = () => {
  return (
    <div className="w-full">
      <div className="p-6 py-12 bg-rose-600 text-gray-50 shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">
              Up to 50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">INATORS</span>
            </div>
            <Link href="#">
              <Button className="px-5 bg-white text-black hover:text-white">Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
