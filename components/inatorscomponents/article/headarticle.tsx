import Link from 'next/link';
import React from 'react'

const HeadArticle = () => {
  return (
    <div className="w-full">
      <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 shadow-md">
        <div className="w-full mx-auto space-y-4">
          <h1 className="text-5xl font-bold leadi">
            Interdum et malesuada fames ac ante ipsum primis in faucibus?
          </h1>
          <div className="flex flex-wrap space-x-2 text-sm ">
            <Link href="#" className="p-1 hover:underline">
              #MambaUI
            </Link>
            <Link href="#" className="p-1 hover:underline">
              #TailwindCSS
            </Link>
            <Link href="#" className="p-1 hover:underline">
              #Angular
            </Link>
          </div>
          <p className="text-sm ">
            by
            <Link
              href="#"
              target="_blank"
              className="hover:underline text-rose-600"
            >
              <span>Leroy Jenkins</span>
            </Link>
            on
            <time>Feb 12th 2021</time>
          </p>
        </div>
        <div className="">
          <p>Insert the actual text content here...</p>
        </div>
      </article>
    </div>
  );
}

export default HeadArticle