import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const SmallBlog = () => {
  return (
    <div className="w-full">
      <section className="py-6 sm:py-12 shadow-md">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
            <p className="font-serif text-sm ">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col">
              <Link
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <Image
                  width={500}
                  height={500}
                  alt=""
                  className="object-cover w-full h-52"
                  src="https://source.unsplash.com/200x200/?fashion?1"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  href="#"
                  className="text-xs tracki uppercase hover:underline text-rose-600"
                >
                  Convenire
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col">
              <Link
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <Image
                  width={500}
                  height={500}
                  alt=""
                  className="object-cover w-full h-52"
                  src="https://source.unsplash.com/200x200/?fashion?2"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  href="#"
                  className="text-xs tracki uppercase hover:underline text-rose-600"
                >
                  Convenire
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                  <span>June 2, 2020</span>
                  <span>2.2K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col">
              <Link
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <Image
                  width={500}
                  height={500}
                  alt=""
                  className="object-cover w-full h-52"
                  src="https://source.unsplash.com/200x200/?fashion?3"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  href="#"
                  className="text-xs tracki uppercase hover:underline text-rose-600"
                >
                  Convenire
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                  <span>June 3, 2020</span>
                  <span>2.3K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col">
              <Link
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <Image
                  width={500}
                  height={500}
                  alt=""
                  className="object-cover w-full h-52"
                  src="https://source.unsplash.com/200x200/?fashion?4"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  href="#"
                  className="text-xs tracki uppercase hover:underline text-rose-600"
                >
                  Convenire
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SmallBlog