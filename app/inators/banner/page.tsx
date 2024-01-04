//@ts-nocheck
import BigBanner from "@/components/inatorscomponents/banner/bigbanner";
import SmallBanner from "@/components/inatorscomponents/banner/smallbanner";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "SmallBanner",
      component: <SmallBanner />,
      installation: ``,
      code: `import Link from 'next/link';
import React from 'react'

const SmallBanner = () => {
  return (
    <div>
      <div className="px-8 py-2 shadow-md">
        <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
          <div>
            <span>
              Get up to 50% off your first order + free shipping,&nbsp;
            </span>
            <Link href="#" className="underline mx-1">
              sign up
            </Link>
            today!
          </div>
          <Link
            href="#"
            className="items-center gap-2 hidden md:flex mx-1"
          >
            <svg
              role="img"
              viewBox="0 0 22 22"
              className="fill-current h-4 w-4"
            >
              <path
                clipRule="evenodd"
                d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="hover:underline focus-visible:underline">
              Gift Cards
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SmallBanner`,
    },
    {
      name: "BigBanner",
      component: <BigBanner />,
      installation: ``,
      code: `import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const BigBanner = () => {
  return (
    <div>
      <div className="p-6 py-12 bg-rose-600 text-gray-50 shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">
              Up to 50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">MAMBA</span>
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

`,
    },
  ];

  return (
    <div>
      {Types.map((type, index) => {
        return (
          <PreviewComponent
            code={type.code}
            installation={type.installation}
            key={index}
          >
            {type.component}
          </PreviewComponent>
        );
      })}
    </div>
  );
};

export default Page;
