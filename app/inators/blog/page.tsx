//@ts-nocheck
import Bigblog from "@/components/inatorscomponents/blog/bigblog";
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
