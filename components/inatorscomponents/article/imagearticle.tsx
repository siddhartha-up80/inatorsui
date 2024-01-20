import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ImageArticle = () => {
  return (
    <div className="w-full">
      <div className="p-5 mx-auto sm:p-10 md:p-16 shadow-md">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <Image
            src="https://source.unsplash.com/random/480x360"
            height={700}
            width={1000}
            alt=""
            className="w-full h-60 sm:h-96 "
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md shadow-lg bg-white dark:bg-black">
            <div className="space-y-2">
              <Link
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                The Best Activewear from the Nordstrom Anniversary Sale
              </Link>
              <p className="text-xs ">
                By
                <Link href="#" className="text-xs hover:underline">
                  Leroy Jenkins
                </Link>
              </p>
            </div>
            <div className="">
              <p>Insert the actual text content here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageArticle