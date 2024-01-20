import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

const Herobasicimage = () => {
  return (
    <div className="w-full">
      <section>
        <div className="bg-rose-600 shadow-md">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-4xl font-bold leadi sm:text-6xl xl:max-w-3xl text-gray-50">
              Provident blanditiis cum exercitationem
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
            <div className="flex flex-wrap justify-center">
              <Button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900 shadow-md"
              >
                Get started
              </Button>
              <Button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded shadow-md"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <Image
          height={800}
          width={1000}
          src="https://source.unsplash.com/random/480x320"
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
        />
      </section>
    </div>
  );
}

export default Herobasicimage