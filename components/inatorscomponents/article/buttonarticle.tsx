import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const ButtonArticle = () => {
  return (
    <div className="w-full">
      {" "}
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 shadow-md">
        <article className="space-y-8  ">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracki md:text-5xl">
              Suspendisse ut magna et ipsum sodales accumsan.
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
              <div className="flex items-center md:space-x-2">
                <Image
                  src="https://source.unsplash.com/75x75/?portrait"
                  height={500}
                  width={700}
                  alt=""
                  className="w-4 h-4 border rounded-full bg-gray-500 border-gray-300"
                />
                <p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                4 min read • 1,570 views
              </p>
            </div>
          </div>
          <div className="text-gray-800">
            <p>Insert the actual text content here...</p>
          </div>
        </article>
        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
            <Button className="px-3 py-1 ">#TailwindCSS</Button>
            <Button className="px-3 py-1 ">#Angular</Button>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Related posts</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <Link href="#" className="hover:underline">
                  Nunc id magna mollis
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Duis molestie, neque eget pretium lobortis
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Mauris nec urna volutpat, aliquam lectus sit amet
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonArticle