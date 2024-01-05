import Image from "next/image";
import React from "react";

const Blogpara = () => {
  return (
    <div>
      <div className="max-w-md p-6 overflow-hidden rounded-lg shadow-md">
        <article>
          <h2 className="text-xl font-bold">
            Sed diam massa, semper a condimentum
          </h2>
          <p className="mt-4 ">
            Morbi porttitor mi in diam scelerisque commodo. Proin sed laoreet
            libero. Fusce faucibus porttitor lacus, at blandit mauris blandit
            eget. Donec facilisis lorem et risus commodo, quis auctor nulla
            varius. Pellentesque facilisis feugiat turpis, id molestie augue
            semper quis. Nunc ornare eget est sit amet elementum.
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <Image
              height={500}
              width={500}
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-10 h-10 rounded-full "
            />
            <div>
              <h3 className="text-sm font-medium">Leroy Jenkins</h3>
              <time className="text-sm ">Feb 18th 2021</time>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blogpara;
