import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Loginhero = () => {
  return (
    <div>
      <section className="body-font shadow-md">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl ">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className=" text-lg font-medium title-font mb-5">Sign In</h2>
            <div className="relative mb-4">
              <Label htmlFor="full-name" className="leading-7 text-sm">
                Full Name
              </Label>
              <Input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full"
              />
            </div>
            <div className="relative mb-4">
              <Label htmlFor="email" className="leading-7 text-sm">
                Email
              </Label>
              <Input type="email" id="email" name="email" className="w-full" />
            </div>
            <Button className="py-2 px-8 w-full">Sign In</Button>
            <p className="text-xs  mt-3">
              Literally you probably haven&apos;t heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loginhero;