import { Button } from '@/components/ui/button';
import React from 'react'

const Herobasic = () => {
  return (
    <div className="w-full">
      <section className="shadow-md">
        <div className="mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-3xl font-bold leadi sm:text-5xl">
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
            <Button
              variant={"outline"}
              className="px-8 py-3 m-2 text-lg font-semibold"
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herobasic