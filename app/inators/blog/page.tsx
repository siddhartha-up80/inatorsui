import BannerBlog from "@/components/inatorscomponents/blog/bannerblog";
import Bannerblog2 from "@/components/inatorscomponents/blog/bannerblog2";
import Bannerblogimage from "@/components/inatorscomponents/blog/bannerblogimage";
import Bigblog from "@/components/inatorscomponents/blog/bigblog";
import Blogpara from "@/components/inatorscomponents/blog/blogpara";
import Imageblog from "@/components/inatorscomponents/blog/imageblog";
import SmallBlog from "@/components/inatorscomponents/blog/smallblog";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "SmallBlog",
      component: <SmallBlog />,
      installation: ``,
      code: `import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const SmallBlog = () => {
  return (
    <div>
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
                  alt=''
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
                  alt=''
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
                  alt=''
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
                  alt=''
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

export default SmallBlog`,
    },
    {
      name: "Bigblog",
      component: <Bigblog />,
      installation: ``,
      code: `import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bigblog = () => {
  return (
    <div>
      <section className="shadow-md">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <Link
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 shadow-sm"
          >
            <Image
              width={500}
              height={500}
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>
              <span className="text-xs ">February 19, 2021</span>
              <p>
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id.
              </p>
            </div>
          </Link>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow-sm"
            >
              <Image
                width={500}
                height={500}
                role="presentation"
                alt=""
                className="object-cover w-full rounded h-44 "
                src="https://source.unsplash.com/random/480x360?1"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs ">January 21, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow-sm"
            >
              <Image
                width={500}
                height={500}
                role="presentation"
                alt=""
                className="object-cover w-full rounded h-44 "
                src="https://source.unsplash.com/random/480x360?2"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs ">January 22, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow-sm"
            >
              <Image
                width={500}
                height={500}
                role="presentation"
                alt=""
                className="object-cover w-full rounded h-44 "
                src="https://source.unsplash.com/random/480x360?3"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs ">January 23, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow-sm hidden sm:block"
            >
              <Image
                width={500}
                height={500}
                role="presentation"
                alt=""
                className="object-cover w-full rounded h-44 "
                src="https://source.unsplash.com/random/480x360?4"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs ">January 24, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow-sm hidden sm:block"
            >
              <Image
                width={500}
                height={500}
                role="presentation"
                alt=""
                className="object-cover w-full rounded h-44 "
                src="https://source.unsplash.com/random/480x360?5"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs ">January 25, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline shadow-sm hidden sm:block"
            >
              <Image
                width={500}
                height={500}
                role="presentation"
                alt=""
                className="object-cover w-full rounded h-44 "
                src="https://source.unsplash.com/random/480x360?6"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs ">January 26, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <Button
              className="px-6 py-3 hover:underline shadow-sm "
            >
              Load more posts...
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bigblog;
`,
    },
    {
      name: "BannerBlog",
      component: <BannerBlog />,
      installation: ``,
      code: `import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerBlog = () => {
  return (
    <div>
      <div className="relative flex flex-col max-w-2xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x divide-gray-300 shadow-md">
        <div className="p-3 space-y-1">
          <h3 className="text-3xl font-semibold">Lorem ipsum dolor sit amet</h3>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            possimus repellat incidunt odit eligendi mollitia quaerat autem
            nobis fugiat natus?
          </p>
        </div>
        <div className="flex items-center gap-3 p-3">
          <Image
            alt=""
            height={500}
            width={500}
            src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover w-12 h-12 bg-gray-500 rounded-full shadow"
          />
          <div className="space-y-1">
            <span className="text-xs">April 03, 2021</span>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-rose-600 text-gray-50"
              >
                javascript
              </Link>
              <Link
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-rose-600 text-gray-50"
              >
                serverless
              </Link>
              <Link
                href="#"
                className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-rose-600 text-gray-50"
              >
                aws
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBlog;
`,
    },
    {
      name: "Bannerblog2",
      component: <Bannerblog2 />,
      installation: ``,
      code: `import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bannerblog2 = () => {
  return (
    <div>
      <div className="shadow-md">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
          <div className="flex items-center justify-between">
            <span className="text-sm ">Jun 1, 2020</span>
            <Link
              href="#"
              className="px-2 py-1 font-bold rounded bg-rose-600 text-gray-50"
            >
              Javascript
            </Link>
          </div>
          <div className="mt-3">
            <Link href="#" className="text-2xl font-bold hover:underline">
              Nos creasse pendere crescit angelos etc
            </Link>
            <p className="mt-2">
              Tamquam ita veritas res equidem. Ea in ad expertus paulatim
              poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei
              spero. Tantumdem naturales excaecant notaverim etc cau perfacile
              occurrere. Loco visa to du huic at in dixi aër.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link href="#" className="hover:underline text-rose-600">
              Read more
            </Link>
            <div>
              <Link href="#" className="flex items-center">
                <Image
                  height={500}
                  width={500}
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline ">
                  Leroy Jenkins
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannerblog2;
`,
    },
    {
      name: "Bannerblogimage",
      component: <Bannerblogimage />,
      installation: ``,
      code: `import Link from "next/link";
import React from "react";

const Bannerblogimage = () => {
  return (
    <div>
      <div className="shadow-md">
        <div className="container grid grid-cols-12 mx-auto">
          <div
            className="bg-no-repeat bg-cover bg-gray-500  col-span-full lg:col-span-4"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/640x480?cute")',
              backgroundPosition: "center center",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
            }}
          />
          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
            <div className="flex justify-start">
              <span className="px-2 py-1 text-xs rounded-full bg-rose-600 text-gray-50">
                Label
              </span>
            </div>
            <h1 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
            <p className="flex-1 pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              reprehenderit adipisci tempore voluptas laborum quod.
            </p>
            <Link
              href="#"
              className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-rose-600"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="self-center text-sm">by Leroy Jenkins</span>
              </div>
              <span className="text-xs">3 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannerblogimage;
`,
    },
    {
      name: "Imageblog",
      component: <Imageblog />,
      installation: ``,
      code: `import Link from 'next/link';
import React from 'react'

const Imageblog = () => {
  return (
    <div>
      <div className="shadow-md">
        <div className="container grid grid-cols-12 mx-auto">
          <div
            className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-500 text-white lg:col-span-6 lg:h-auto"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/640x480")',
              backgroundPosition: "center center",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col items-center p-8 py-12 text-center">
              <span>12 June</span>
              <h1 className="py-4 text-5xl font-bold">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p className="pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                Link!
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-300">
            <div className="pt-6 pb-4 space-y-2">
              <span>12 June</span>
              <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                Link!
              </p>
              <Link
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm text-rose-600"
              >
                <span>Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <span>12 June</span>
              <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                Link!
              </p>
              <Link
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm text-rose-600"
              >
                <span>Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <span>12 June</span>
              <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                Link!
              </p>
              <Link
                href="#"
                className="inline-flex items-center py-2 space-x-2 text-sm text-rose-600"
              >
                <span>Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imageblog
`,
    },
    {
      name: "Blogpara",
      component: <Blogpara />,
      installation: ``,
      code: `import Image from "next/image";
import React from "react";

const Blogpara = () => {
  return (
    <div>
      <div className="max-w-md p-6 overflow-hidden rounded-lg shadow-md">
        <article>
          <h2 className="text-xl font-bold">
            Sed diam massa, semper a condimentum
          </h2>
          <p className="mt-4 ">
            Morbi porttitor mi in diam scelerisque commodo. Proin sed laoreet
            libero. Fusce faucibus porttitor lacus, at blandit mauris blandit
            eget. Donec facilisis lorem et risus commodo, quis auctor nulla
            varius. Pellentesque facilisis feugiat turpis, id molestie augue
            semper quis. Nunc ornare eget est sit amet elementum.
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <Image
              height={500}
              width={500}
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-10 h-10 rounded-full "
            />
            <div>
              <h3 className="text-sm font-medium">Leroy Jenkins</h3>
              <time className="text-sm ">Feb 18th 2021</time>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blogpara;
`,
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
