import Productbasic from "@/components/inatorscomponents/product/productbasic";
import Productinfo from "@/components/inatorscomponents/product/productinfo";
import Productinfosmall from "@/components/inatorscomponents/product/productinfosmall";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Productbasic",
      component: <Productbasic />,
      installation: `npx shadcn-ui@latest add card`,
      code: `import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'

const Productbasic = () => {
  return (
    <div className="w-full">
      <section className="shadow-md body-font">
        <div className="container px-10 py-24 mx-auto">
          <div className="flex flex-wrap gap-6 justify-center">
            <Card className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                    height={500}
                    width={500}
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/random/900×700/?girl=1"
                />
              </a>
              <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className=" title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </Card>
            <Card className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                    height={500}
                    width={500}
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/random/900×700/?girl=2"
                />
              </a>
              <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className=" title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </Card>
            <Card className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                    height={500}
                    width={500}
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/random/900×700/?girl=3"
                />
              </a>
              <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className=" title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </Card>
            <Card className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                    height={500}
                    width={500}
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/random/900×700/?girl=4"
                />
              </a>
              <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className=" title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </Card>
            <Card className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                    height={500}
                    width={500}
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/random/900×700/?girl=5"
                />
              </a>
              <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className=" title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </Card>
            <Card className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                    height={500}
                    width={500}
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/random/900×700/?girl=6"
                />
              </a>
              <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className=" title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </Card>
            <Card className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                    height={500}
                    width={500}
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/random/900×700/?girl=7"
                />
              </a>
              <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className=" title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </Card>
            <Card className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                    height={500}
                    width={500}
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://source.unsplash.com/random/900×700/?girl=8"
                />
              </a>
              <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className=" title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productbasic`,
    },
    {
      name: "Productinfo",
      component: <Productinfo />,
      installation: `npx shadcn-ui@latest add card button`,
      code: `import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

const Productinfo = () => {
  return (
    <div>
      <section className="shadow-md body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
                height={500}
                width={500}
              alt="ecommerce"
              className="lg:w-[23vw] w-full lg:h-auto h-[50vh] object-cover object-center rounded"
              src="https://source.unsplash.com/random/900×700/?girl=1"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font  tracking-widest">
                BRAND NAME
              </h2>
              <h1 className=" text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-rose-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-rose-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-rose-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-rose-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-rose-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className=" ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2  space-x-2s">
                  <a className="">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2  mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2  rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2  ml-1  rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2  ml-1 bg-rose-500 rounded-full w-6 h-6 focus:outline-none" />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none  py-2 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center  pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl ">$58.00</span>
                <Button className="flex ml-auto py-2 px-6">
                  Button
                </Button>
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productinfo`,
    },
    {
      name: "Productinfosmall",
      component: <Productinfosmall />,
      installation: `npx shadcn-ui@latest add button`,
      code: `import { Button } from '@/components/ui/button';
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

export default Productinfosmall`,
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
