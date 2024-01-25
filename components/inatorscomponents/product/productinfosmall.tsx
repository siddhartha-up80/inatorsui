import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

const Productinfosmall = () => {
  return (
    <div className='w-full'>
      <section className=" body-font overflow-hidden shadow-md">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font  tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-rose-500 text-3xl title-font font-medium mb-4">
                Animated Night Hill Illustrations
              </h1>

              <p className="leading-relaxed mb-4">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.
              </p>
              <div className="flex border-t  py-2">
                <span className="">Color</span>
                <span className="ml-auto ">Blue</span>
              </div>
              <div className="flex border-t  py-2">
                <span className="">Size</span>
                <span className="ml-auto ">Medium</span>
              </div>
              <div className="flex border-t border-b mb-6  py-2">
                <span className="">Quantity</span>
                <span className="ml-auto ">4</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl ">$58.00</span>
                <Button className="flex ml-auto  py-2 px-6">Button</Button>
                <button className="rounded-full w-10 h-10  p-0 border-0 inline-flex items-center justify-center  ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
            <Image
              height={800}
              width={800}
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://source.unsplash.com/random/900×700/?girl=1"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productinfosmall