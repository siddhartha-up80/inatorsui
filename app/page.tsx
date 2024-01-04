import InstallCode from "@/components/installcode";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="">
        <div className="max-w-7xl flex flex-col justify-center p-1 md:px-10 mx-auto sm:pt-10 lg:flex-row lg:justify-between items-center">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left leading-snug">
            <h1 className="text-5xl font-bold leadi sm:text-6xl leading-snug">
              Kickstart your
              <span className="text-rose-600 leading-snug"> Next.js 14 </span>
              website in minutes
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 leading-snug">
              Inators UI is a collection of UI components and templates based on
              Tailwind and Shadcn/ui, just copy and use
            </p>{" "}
            <div className="mb-8 text-lg leading-snug md:w-[350px] ">
              <InstallCode installation={"npx shadcn-ui@latest init"} />
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link href="/inators">
                <Button className="">Browse all Components</Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
            <Image
              src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              height={500}
              width={500}
              className="rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="p-6 my-6">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 text-gray-100"
              >
                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">150+</p>
              <p className="capitalize">Components</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 text-gray-100"
              >
                <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">30+</p>
              <p className="capitalize">Categories</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 text-gray-100"
              >
                <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                <rect width="32" height="32" x="80" y="264"></rect>
                <rect width="32" height="32" x="240" y="128"></rect>
                <rect width="32" height="32" x="136" y="168"></rect>
                <rect width="32" height="32" x="400" y="264"></rect>
                <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">100%</p>
              <p className="capitalize">Next.js 14 Compatible</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 text-gray-100"
              >
                <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">100%</p>
              <p className="capitalize">Copy Paste work</p>
            </div>
          </div>
        </div>
      </section>
      {/* stats */}

      {/* features section */}

      <section className="lg:p-8">
        <div className="md:container px-2 mx-auto space-y-20 lg:space-y-36">
          <div className="flex flex-col max-w-xl mx-auto overflow-hidden rounded-md lg:max-w-full lg:flex-row min-h-96">
            <div className="flex items-center justify-center flex-1 px-4 mb-8 lg:flex-3 h-72 lg:justify-start sm:h-80 lg:h-96 lg:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                height={500}
                width={500}
                className="rounded-sm"
              />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 lg:flex-2">
              <span className="mb-2 text-xs tracking-widest uppercase text-rose-600">
                {" "}
                Make Next.js 14 your new playground{" "}
              </span>
              <h2 className="text-3xl font-bold">
                {" "}
                Easy to use UI elements based on Tailwind CSS and Shadcn/ui{" "}
              </h2>
              <p className="my-6 ">
                {" "}
                Inators UI is a toolkit for developers and designers to make
                creating nextjs client side as well as server side interfaces
                easier. Inspired from Mamba UI, we have multiple components to
                help you get started. Everything is modular and customizable to
                fit your project. From cards to buttons to blogs, you can
                quickly create a variety of layouts that is responsible for
                next.js 14 and look great on any screen.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-xl mx-auto overflow-hidden rounded-md lg:max-w-full lg:mx-0 lg:flex-row-reverse min-h-96">
            <div className="flex items-center justify-center flex-1 px-4 mb-8 lg:flex-3 h-72 lg:justify-end sm:h-80 lg:h-96 lg:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                height={500}
                width={500}
                className="rounded-sm"
              />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 lg:flex-2">
              <span className="mb-2 text-xs tracking-widest uppercase text-rose-600">
                {" "}
                just copy paste skills required{" "}
              </span>
              <h2 className="text-3xl font-bold">
                Get the server side compatible components in one place
              </h2>
              <p className="my-6 ">
                {" "}
                We know it&apos;s frustrating to find an UI kit with all the
                supported components for next.js 14 and then find out that each
                element does not work with server side, so here you will find
                150+ building blocks for free. And there are many more on the
                way!{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-xl mx-auto overflow-hidden rounded-md lg:max-w-full lg:mx-0 lg:flex-row min-h-96">
            <div className="flex items-center justify-center flex-1 px-4 my-8 lg:justify-start lg:flex-3 h-72 sm:h-80 lg:h-96 lg:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1675865254433-6ba341f0f00b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                height={500}
                width={500}
                className="rounded-sm"
              />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 lg:flex-2">
              <span className="mb-2 text-xs tracking-widest uppercase text-rose-600">
                {" "}
                just a couple of copy pasting code{" "}
              </span>
              <h2 className="text-3xl font-bold">
                Stop wasting time with ChatGPT for components
              </h2>
              <p className="my-6 ">
                {" "}
                What used to take hours, can now be done in a few clicks. Just
                copy-paste the code from Inators UI into your project, add your
                own content and hit publish. You just need a little brain and a
                little developer skills to create something beautiful even
                without chatGPT.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* features section */}

      {/* banner section */}
      <section className="py-6 bg-rose-600 text-gray-50 mt-14">
        <div className="container justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-around lg:flex lg:flex-row">
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-none">
              Follow on github for more project updates
            </h2>
            <p className="px-4 text-lg lg:px-0">
              {" "}
              When I add something new, you will be the first to know{" "}
            </p>
          </div>
          <div className="flex flex-row items-center self-center justify-center flex-shrink-0 lg:justify-end">
            <Link href="https://github.com/siddhartha-up80">
              <Button
                variant="outline"
                size="lg"
                className="text-black dark:text-white"
              >
                Github
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* banner section */}

      {/* faq section */}
      <section className="mt-14 md:max-w-[70vw] mx-auto">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 ">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to contact me.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What is Inators UI?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                Inators UI is a free, open-source collection of UI elements
                based on Tailwind CSS, shadcn/ui and inspired from MambaUI that
                make it easy for anyone to build a next.js 14 web-app in
                minutes. Whether you&apos;re looking to create an e-commerce
                website or a personal blog, Inators UI have all the elements you
                need to get started right away..{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Will it support server side components in next.js 14?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                Yes, it is 100% compatible with next.js 14 without making any
                component client side.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Some of the components don&apos;t seem to work. Is something
                broken?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                Just install necessary dependencies and try again, if it is not
                working than contact us via email or contact form.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
      {/* faq section */}
    </main>
  );
}
