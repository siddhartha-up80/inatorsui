import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <section className="py-6 text-gray-900">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          {/* <h1 className="text-3xl font-bold leadi text-center">Star us on GitHub</h1> */}
          {/* <p className="text-lg font-medium text-center">
            One star will give me a motivation
          </p> */}
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6 items-center">
            <Link href="https://github.com/siddhartha-up80" target="_blank">
              <Button className="text-lg bg-rose-600">Star this on GitHub</Button>
            </Link>
            <Link href="/contact">
              <Button className="text-lg bg-rose-600">Give Feedback</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="">
        <Image
        height="1100"
        width="1200"
          src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="md:w-[60vw] h-[70vh] object-cover mx-auto rounded-md shadow-md"
        />
      </section>
    </div>
  );
};

export default Page;
