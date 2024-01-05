import Image from 'next/image';
import React from 'react'

const Carouselslider = () => {
  return (
    <div>
      <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
        <Image
        height={800}
        width={800}
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://source.unsplash.com/random/241x361/?girl=1"
          alt="Image 1"
        />
        <Image
        height={800}
        width={800}
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://source.unsplash.com/random/241x361/?girl=2"
          alt="Image 2"
        />
        <Image
        height={800}
        width={800}
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://source.unsplash.com/random/241x361/?girl=3"
          alt="Image 3"
        />
        <Image
        height={800}
        width={800}
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://source.unsplash.com/random/241x361/?girl=4"
          alt="Image 4"
        />
        <Image
        height={800}
        width={800}
          className="h-48 aspect-video rounded-sm object-cover object-center bg-gray-500"
          src="https://source.unsplash.com/random/241x361/?girl=5"
          alt="Image 5"
        />
      </div>
    </div>
  );
}

export default Carouselslider