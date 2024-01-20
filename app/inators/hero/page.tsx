import Hero from "@/components/inatorscomponents/hero/hero";
import Herobasic from "@/components/inatorscomponents/hero/herobasic";
import Herobasicimage from "@/components/inatorscomponents/hero/herobasicimage";
import Heroimageform from "@/components/inatorscomponents/hero/heroimageform";
import Heroleft from "@/components/inatorscomponents/hero/heroleft";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Herobasic",
      component: <Herobasic />,
      installation: `npx shadcn-ui@latest add button`,
      code: `import { Button } from '@/components/ui/button';
import React from 'react'

const Herobasic = () => {
  return (
    <div>
      <section className="shadow-md">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">
            Quisquam necessita vel
            <span className="text-rose-600">laborum doloribus</span>delectus
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
          </p>
          <div className="flex flex-wrap justify-center">
            <Button className="px-8 py-3 m-2 text-lg font-semibold">
              Get started
            </Button>
            <Button variant={"outline"} className="px-8 py-3 m-2 text-lg font-semibold">
              Learn more
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herobasic`,
    },
    {
      name: "Herobasicimage",
      component: <Herobasicimage />,
      installation: `npx shadcn-ui@latest add button`,
      code: `import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

const Herobasicimage = () => {
  return (
    <div>
      <section>
        <div className="bg-rose-600 shadow-md">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-gray-50">
              Provident blanditiis cum exercitationem
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
            <div className="flex flex-wrap justify-center">
              <Button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900 shadow-md"
              >
                Get started
              </Button>
              <Button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded shadow-md"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <Image
        height={800}
        width={1000}
          src="https://source.unsplash.com/random/480x320"
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
        />
      </section>
    </div>
  );
}

export default Herobasicimage`,
    },
    {
      name: "Heroimageform",
      component: <Heroimageform />,
      installation: `npx shadcn-ui@latest add button`,
      code: `import { Button } from '@/components/ui/button';
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

export default Heroimageform`,
    },
    {
      name: "Hero",
      component: <Hero />,
      installation: `npx shadcn-ui@latest add button`,
      code: `import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="shadow-md">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              height={800}
              width={1000}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold leadi sm:text-5xl">
              Ac mattis
              <span className="text-rose-600">senectus</span>erat pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link target="_blank" href="#">
                <Button className="px-8 py-3 text-lg font-semibold ">
                  Join now
                </Button>
              </Link>
              <Link target="_blank" href="#" className="">
                <Button
                  className="px-8 py-3 text-lg font-semibold "
                  variant={"outline"}
                >
                  Waitlist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
`,
    },
    {
      name: "Heroleft",
      component: <Heroleft />,
      installation: `npx shadcn-ui@latest add button card`,
      code: `import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Heroleft = () => {
  return (
    <div>
      <section className="shadow-md">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold leadi sm:text-5xl">
              Ac mattis
              <span className="text-rose-600">senectus</span>erat pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link target="_blank" href="#">
                <Button className="px-8 py-3 text-lg font-semibold ">
                  Join now
                </Button>
              </Link>
              <Link target="_blank" href="#" className="">
                <Button
                  className="px-8 py-3 text-lg font-semibold "
                  variant={"outline"}
                >
                  Waitlist
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image
                height={800}
                width={1000}
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heroleft;
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
