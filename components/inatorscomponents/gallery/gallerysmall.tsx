import Image from "next/image";
import React from "react";

const Gallerysmall = () => {
  return (
    <div>
      <section className="py-6 shadow-md">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <Image
              height={800}
              width={1000}
              title=""
              alt=""
              className="object-cover w-full shadow-md aspect-square"
              src="https://source.unsplash.com/random/300x300/?woman=1"
            />
            <Image
              height={800}
              width={1000}
              title=""
              alt=""
              className="object-cover w-full shadow-md aspect-square"
              src="https://source.unsplash.com/random/300x300/?woman=2"
            />
            <Image
              height={800}
              width={1000}
              title=""
              alt=""
              className="object-cover w-full shadow-md aspect-square"
              src="https://source.unsplash.com/random/300x300/?woman=3"
            />
            <Image
              height={800}
              width={1000}
              title=""
              alt=""
              className="object-cover w-full shadow-md aspect-square"
              src="https://source.unsplash.com/random/300x300/?woman=4"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallerysmall;
