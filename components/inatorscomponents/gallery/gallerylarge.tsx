import Image from "next/image";
import React from "react";

const Gallerylarge = () => {
  return (
    <div>
      <section className="py-6 shadow-md">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            height={800}
            width={1000}
            src="https://source.unsplash.com/random/301x301/?girl"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-md min-h-96 md:col-start-3 md:row-start-1  aspect-square"
          />
          <Image
            height={800}
            width={1000}
            alt=""
            className="w-full h-full rounded shadow-md min-h-48  aspect-square"
            src="https://source.unsplash.com/random/200x200/?girl=0"
          />
          <Image
            height={800}
            width={1000}
            alt=""
            className="w-full h-full rounded shadow-md min-h-48  aspect-square"
            src="https://source.unsplash.com/random/200x200/?girl=1"
          />
          <Image
            height={800}
            width={1000}
            alt=""
            className="w-full h-full rounded shadow-md min-h-48  aspect-square"
            src="https://source.unsplash.com/random/200x200/?girl=2"
          />
          <Image
            height={800}
            width={1000}
            alt=""
            className="w-full h-full rounded shadow-md min-h-48  aspect-square"
            src="https://source.unsplash.com/random/200x200/?girl=3"
          />
          <Image
            height={800}
            width={1000}
            alt=""
            className="w-full h-full rounded shadow-md min-h-48  aspect-square"
            src="https://source.unsplash.com/random/200x200/?girl=4"
          />
          <Image
            height={800}
            width={1000}
            alt=""
            className="w-full h-full rounded shadow-md min-h-48  aspect-square"
            src="https://source.unsplash.com/random/200x200/?girl=5"
          />
          <Image
            height={800}
            width={1000}
            alt=""
            className="w-full h-full rounded shadow-md min-h-48  aspect-square"
            src="https://source.unsplash.com/random/200x200/?girl=6"
          />
          <Image
            height={800}
            width={1000}
            alt=""
            className="w-full h-full rounded shadow-md min-h-48  aspect-square"
            src="https://source.unsplash.com/random/200x200/?girl=7"
          />
          <Image
            height={800}
            width={1000}
            src="https://source.unsplash.com/random/302x302/?girl=9"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-md min-h-96 md:col-start-1 md:row-start-3  aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallerylarge;
