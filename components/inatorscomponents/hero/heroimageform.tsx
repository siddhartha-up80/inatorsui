import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import React from 'react'

const Heroimageform = () => {
  return (
    <div className="w-full">
      <section className="p-6 shadow-md">
        <div className="flex gap-6 mx-auto text-center md:flex-row flex-col-reverse">
          <div className="w-full py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
            <span className="block mb-2 text-rose-600">
              Inators design system
            </span>
            <h1 className="text-5xl font-extrabold ">
              Build it with Inators UI
            </h1>
            <p className="my-8">
              <span className="font-medium ">Modular and versatile.</span>
              Fugit vero facilis dolor sit neque cupiditate minus esse accusamus
              cumque at.
            </p>
            <form action="" className="self-stretch space-y-3">
              <div>
                <Label className="text-sm sr-only">Your name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md focus:ring focus:ri border-gray-300"
                />
              </div>
              <div>
                <Label className="text-sm sr-only">Email address</Label>
                <Input
                  id="lastname"
                  type="text"
                  placeholder="Email address"
                  className="w-full rounded-md focus:ring focus:ri border-gray-300"
                />
              </div>
              <Button type="button" className="w-full py-2 font-semibold">
                Join the waitlist
              </Button>
            </form>
          </div>
          <div className='w-full my-auto'>
            <Image
              height={800}
              width={1000}
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500 object-top shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Heroimageform