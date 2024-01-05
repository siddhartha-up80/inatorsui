import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerBlog = () => {
  return (
    <div>
      <div className="relative flex flex-col max-w-2xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x divide-gray-300 shadow-md">
        <div className="p-3 space-y-1">
          <h3 className="text-3xl font-semibold">Lorem ipsum dolor sit amet</h3>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            possimus repellat incidunt odit eligendi mollitia quaerat autem
            nobis fugiat natus?
          </p>
        </div>
        <div className="flex items-center gap-3 p-3">
          <Image
            alt=""
            height={500}
            width={500}
            src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover w-12 h-12 bg-gray-500 rounded-full shadow"
          />
          <div className="space-y-1">
            <span className="text-xs">April 03, 2021</span>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-rose-600 text-gray-50"
              >
                javascript
              </Link>
              <Link
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-rose-600 text-gray-50"
              >
                serverless
              </Link>
              <Link
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-rose-600 text-gray-50"
              >
                aws
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBlog;
