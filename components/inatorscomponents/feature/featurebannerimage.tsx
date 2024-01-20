import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

const Featurebannerimage = () => {
  return (
    <div className="w-full">
      <section className="p-4 lg:p-8 shadow-md">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row ">
            <Image
              height={800}
              width={800}
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="h-full aspect-video  object-top object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 shadow-md">
              <span className="text-xs uppercase">Join, it&apos;s free</span>
              <h3 className="text-3xl font-bold">
                We&apos;re not reinventing the wheel
              </h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <Button className="self-start">Action</Button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <Image
              height={800}
              width={800}
              src="https://source.unsplash.com/640x480/?2"
              alt=""
              className="h-full aspect-video   object-top object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 shadow-md">
              <span className="text-xs uppercase">Join, it&apos;s free</span>
              <h3 className="text-3xl font-bold">
                We&apos;re not reinventing the wheel
              </h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <Button className="self-start">Action</Button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <Image
              height={800}
              width={800}
              src="https://source.unsplash.com/640x480/?3"
              alt=""
              className="h-full aspect-video  object-top object-cover "
            />
            <div className="flex flex-col justify-center flex-1 p-6 shadow-md">
              <span className="text-xs uppercase">Join, it&apos;s free</span>
              <h3 className="text-3xl font-bold">
                We&apos;re not reinventing the wheel
              </h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <Button className="self-start">Action</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featurebannerimage