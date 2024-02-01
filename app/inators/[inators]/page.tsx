import BasicArticle from "@/components/inatorscomponents/article/basicarticle";
import ButtonArticle from "@/components/inatorscomponents/article/buttonarticle";
import HeadArticle from "@/components/inatorscomponents/article/headarticle";
import ImageArticle from "@/components/inatorscomponents/article/imagearticle";
import BigBanner from "@/components/inatorscomponents/banner/bigbanner";
import SmallBanner from "@/components/inatorscomponents/banner/smallbanner";
import BannerBlog from "@/components/inatorscomponents/blog/bannerblog";
import Bannerblog2 from "@/components/inatorscomponents/blog/bannerblog2";
import Bannerblogimage from "@/components/inatorscomponents/blog/bannerblogimage";
import Bigblog from "@/components/inatorscomponents/blog/bigblog";
import Blogcards from "@/components/inatorscomponents/blog/blogcards";
import Bloglist from "@/components/inatorscomponents/blog/bloglist";
import Blogpara from "@/components/inatorscomponents/blog/blogpara";
import Imageblog from "@/components/inatorscomponents/blog/imageblog";
import SmallBlog from "@/components/inatorscomponents/blog/smallblog";
import Breadcrumb1 from "@/components/inatorscomponents/breadcrumb/breadcrumb1";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

export default function Page({ params, searchParams }: any) {
  const Types = [
    {
      component: "article",
      types: [
        {
          name: "BasicArticle",
          component: <BasicArticle />,
          installation: ``,
          code: `import Link from 'next/link';
import React from 'react'

const BasicArticle = () => {
  return (
    <div>
      <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 shadow-md">
        <div className="w-full mx-auto space-y-4 text-center">
          <p className="text-xs font-semibold tracki uppercase">#TailwindCSS</p>
          <h1 className="text-4xl font-bold leadi md:text-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            sed!
          </h1>
          <p className="text-sm ">
            by
            <Link
              href="#"
              target="_blank"
              className="underline text-rose-600 mx-1"
            >
              <span>Leroy Jenkins</span>
            </Link>
            on
            <time>Feb 12th 2021</time>
          </p>
        </div>
        <div className="text-gray-800">
          <p>Insert the actual text content here...</p>
        </div>
        <div className="pt-12 border-t border-gray-300">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src="https://source.unsplash.com/75x75/?portrait"
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-300"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">Leroy Jenkins</h4>
              <p className="">
                Sed non nibh iaculis, posuere diam vitae, consectetur neque.
                Integer velit ligula, semper sed nisl in, cursus commodo elit.
                Pellentesque sit amet mi luctus ligula euismod lobortis
                ultricies et nibh.
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-4 space-x-4 align-center">
            <Link
              href="#"
              aria-label="GitHub"
              target="_blank"
              className="p-2 rounded-md text-gray-800 hover:text-rose-600"
            >
              <svg
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="#"
              aria-label="Dribble"
              target="_blank"
              className="p-2 rounded-md text-gray-800 hover:text-rose-600"
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current"
              >
                <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              aria-label="Twitter"
              className="p-2 rounded-md text-gray-800 hover:text-rose-600"
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Email"
              className="p-2 rounded-md text-gray-800 hover:text-rose-600"
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current"
              >
                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BasicArticle`,
        },
        {
          name: "ButtonArticle",
          component: <ButtonArticle />,
          installation: ``,
          code: `
          import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const ButtonArticle = () => {
  return (
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
          
          <Button
            className="px-3 py-1 "
          >
            #TailwindCSS
          </Button>
          <Button
            className="px-3 py-1 "
          >
            #Angular
          </Button>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Related posts</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <Link  href="#" className="hover:underline">
                Nunc id magna mollis
              </Link>
            </li>
            <li>
              <Link  href="#" className="hover:underline">
                Duis molestie, neque eget pretium lobortis
              </Link>
            </li>
            <li>
              <Link  href="#" className="hover:underline">
                Mauris nec urna volutpat, aliquam lectus sit amet
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ButtonArticle
          `,
        },
        {
          name: "HeadArticle",
          component: <HeadArticle />,
          installation: ``,
          code: `import Link from 'next/link';
import React from 'react'

const HeadArticle = () => {
  return (
    <div>
      <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 shadow-md">
        <div className="w-full mx-auto space-y-4">
          <h1 className="text-5xl font-bold leadi">
            Interdum et malesuada fames ac ante ipsum primis in faucibus?
          </h1>
          <div className="flex flex-wrap space-x-2 text-sm ">
            <Link
              href="#"
              className="p-1 hover:underline"
            >
              #MambaUI
            </Link>
            <Link
              href="#"
              className="p-1 hover:underline"
            >
              #TailwindCSS
            </Link>
            <Link
              href="#"
              className="p-1 hover:underline"
            >
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
            <time >Feb 12th 2021</time>
          </p>
        </div>
        <div className="">
          <p>Insert the actual text content here...</p>
        </div>
      </article>
    </div>
  );
}

export default HeadArticle`,
        },
        {
          name: "ImageArticle",
          component: <ImageArticle />,
          installation: ``,
          code: `import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ImageArticle = () => {
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 shadow-md">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <Image
            src="https://source.unsplash.com/random/480x360"
            height={700}
            width={1000}
            alt=""
            className="w-full h-60 sm:h-96 "
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md shadow-lg bg-white dark:bg-black">
            <div className="space-y-2">
              <Link
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                The Best Activewear from the Nordstrom Anniversary Sale
              </Link>
              <p className="text-xs ">
                By
                <Link
                  href="#"
                  className="text-xs hover:underline"
                >
                  Leroy Jenkins
                </Link>
              </p>
            </div>
            <div className="">
              <p>Insert the actual text content here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageArticle`,
        },
      ],
    },
    {
      component: "banner",
      types: [
        {
          name: "SmallBanner",
          component: <SmallBanner />,
          installation: ``,
          code: `import Link from 'next/link';
import React from 'react'

const SmallBanner = () => {
  return (
    <div>
      <div className="px-8 py-2 shadow-md">
        <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
          <div>
            <span>
              Get up to 50% off your first order + free shipping,&nbsp;
            </span>
            <Link href="#" className="underline mx-1">
              sign up
            </Link>
            today!
          </div>
          <Link
            href="#"
            className="items-center gap-2 hidden md:flex mx-1"
          >
            <svg
              role="img"
              viewBox="0 0 22 22"
              className="fill-current h-4 w-4"
            >
              <path
                clipRule="evenodd"
                d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="hover:underline focus-visible:underline">
              Gift Cards
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SmallBanner`,
        },
        {
          name: "BigBanner",
          component: <BigBanner />,
          installation: ``,
          code: `import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const BigBanner = () => {
  return (
    <div>
      <div className="p-6 py-12 bg-rose-600 text-gray-50 shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">
              Up to 50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">MAMBA</span>
            </div>
            <Link href="#">
              <Button className="px-5 bg-white text-black hover:text-white">Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBanner;

`,
        },
      ],
    },
    {
      component: "blog",
      types: [
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
        {
          name: "Blogcards",
          component: <Blogcards />,
          installation: `npx shadcn-ui@latest add card`,
          code: `import { Card } from '@/components/ui/card';
import React from 'react'

const Blogcards = () => {
  return (
    <div>
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <Card className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://source.unsplash.com/random/900×700/?girl=1"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium  mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium  mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-rose-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className=" inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            <div className="p-4 md:w-1/3">
              <Card className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://source.unsplash.com/random/900×700/?girl=2"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium  mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium  mb-3">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-rose-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className=" inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            <div className="p-4 md:w-1/3">
              <Card className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://source.unsplash.com/random/900×700/?girl=3"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium  mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium  mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-rose-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className=" inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogcards`,
        },
        {
          name: "Bloglist",
          component: <Bloglist />,
          installation: ``,
          code: `import React from 'react'

const Bloglist = () => {
  return (
    <div>
      <section className="shadow-md body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font ">
                  CATEGORY
                </span>
                <span className="mt-1  text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium  title-font mb-2">
                  Bitters hashtag waistcoat fashion axe chia unicorn
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-rose-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font ">
                  CATEGORY
                </span>
                <span className="mt-1  text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium  title-font mb-2">
                  Meditation bushwick direct trade taxidermy shaman
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-rose-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font ">
                  CATEGORY
                </span>
                <span className="text-sm ">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium  title-font mb-2">
                  Woke master cleanse drinking vinegar salvia
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-rose-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bloglist`,
        },
      ],
    },
    {
      component: "breadcrumb",
      types: [
        {
          name: "Breadcrumb1",
          component: <Breadcrumb1 />,
          installation: ``,
          code: `import Link from "next/link";
import React from "react";

const Breadcrumb1 = () => {
  return (
    <div>
      <nav
        aria-label="breadcrumb"
        className="w-full p-4 shadow-md"
      >
        <ol className="flex h-8 space-x-2">
          <li className="flex items-center">
            <Link href="#" title="Back to homepage" className="hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 pr-1 text-gray-600"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <Link
              href="#"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Parent
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <Link
              href="#"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Parent
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <Link
              href="#"
              className="flex items-center px-1 capitalize hover:no-underline cursor-default"
            >
              Current
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb1;
`,
        },
      ],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
    {
      component: "",
      types: [],
    },
  ];

  const selectedType = Types.find((type) => type.component === params.inators);

  //  console.log(selectedType?.types)

  return (
    <div>
      {selectedType?.types.map((type, index) => {
        return (
          <PreviewComponent
            code={type?.code}
            installation={type?.installation}
            key={index}
          >
            {type?.component}
          </PreviewComponent>
        );
      })}
    </div>
  );
}
