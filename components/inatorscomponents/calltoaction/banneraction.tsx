import { Button } from "@/components/ui/button";
import React from "react";

const Banneraction = () => {
  return (
    <div className="w-full">
      <section className="py-6 shadow-md">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <h1 className="text-3xl font-semibold leadi text-center lg:text-left">
            Nobis a dolores, quia sit ad quasi dolorem in?
          </h1>
          <Button className="px-8 py-3 text-lg font-semibold">Contact</Button>
        </div>
      </section>
    </div>
  );
};

export default Banneraction;
