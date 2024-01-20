import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'

const Testimonialcardlarge = () => {
  return (
    <div>
      <section className="my-8 shadow-md ">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-4xl font-semibold leadi text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <Card className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 shadow-md">
              <p className="relative px-6 py-1 text-lg italic text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-rose-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-rose-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </Card>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-rose-600 text-gray-50">
              <Image
              height={200}
              width={200}
                src="https://source.unsplash.com/50x50/?girl?1"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300"
              />
              <p className="text-xl font-semibold leadi">Distinctio Animi</p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <Card className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 shadow-md">
              <p className="relative px-6 py-1 text-lg italic text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-rose-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-rose-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </Card>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-rose-600 text-gray-50">
              <Image
              height={200}
              width={200}
                src="https://source.unsplash.com/50x50/?girl?2"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300"
              />
              <p className="text-xl font-semibold leadi">Distinctio Animi</p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <Card className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 shadow-md">
              <p className="relative px-6 py-1 text-lg italic text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-rose-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-rose-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </Card>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-rose-600 text-gray-50">
              <Image
              height={200}
              width={200}
                src="https://source.unsplash.com/50x50/?girl?3"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300"
              />
              <p className="text-xl font-semibold leadi">Distinctio Animi</p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <Card className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 shadow-md">
              <p className="relative px-6 py-1 text-lg italic text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-rose-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-rose-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </Card>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-rose-600 text-gray-50">
              <Image
              height={200}
              width={200}
                src="https://source.unsplash.com/50x50/?girl?4"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300"
              />
              <p className="text-xl font-semibold leadi">Distinctio Animi</p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonialcardlarge