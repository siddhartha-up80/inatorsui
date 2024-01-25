import { Card } from '@/components/ui/card';
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

export default Productbasic