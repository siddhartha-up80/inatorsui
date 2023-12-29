import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className=" text-gray-800">
        <div className="max-w-7xl flex flex-col justify-center p-6 md:px-10 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between items-center">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left leading-snug">
            <h1 className="text-5xl font-bold leadi sm:text-6xl leading-snug">
              Kickstart your
              <span className="text-rose-600 leading-snug"> Next.js 14 </span>
              website in minutes
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 leading-snug">
              Inators UI is a collection of UI components and templates based on
              Tailwind and Shadcn/ui, just copy and use
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link href="/inators">
                <Button className="">Browse all Components</Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
            <img
              src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-sm"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
