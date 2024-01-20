import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bannerblog2 = () => {
  return (
    <div className="w-full">
      <div className="shadow-md">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
          <div className="flex items-center justify-between">
            <span className="text-sm ">Jun 1, 2020</span>
            <Link
              href="#"
              className="px-2 py-1 font-bold rounded bg-rose-600 text-gray-50"
            >
              Javascript
            </Link>
          </div>
          <div className="mt-3">
            <Link href="#" className="text-2xl font-bold hover:underline">
              Nos creasse pendere crescit angelos etc
            </Link>
            <p className="mt-2">
              Tamquam ita veritas res equidem. Ea in ad expertus paulatim
              poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei
              spero. Tantumdem naturales excaecant notaverim etc cau perfacile
              occurrere. Loco visa to du huic at in dixi aër.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link href="#" className="hover:underline text-rose-600">
              Read more
            </Link>
            <div>
              <Link href="#" className="flex items-center">
                <Image
                  height={500}
                  width={500}
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline ">Leroy Jenkins</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannerblog2;
