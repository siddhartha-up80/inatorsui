import CarouselShad from "@/components/inatorscomponents/carousel/carouselshad";
import Carouselslider from "@/components/inatorscomponents/carousel/carouselslider";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Carousel",
      component: <CarouselShad />,
      installation: `npx shadcn-ui@latest add carousel
`,
      code: `import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const CarouselShad = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <Image
            height={800}
            width={800}
            alt=""
            src={"https://source.unsplash.com/random/500x500/?girl"}
            className="object-cover object-top h-[70vh] "
          />
        </CarouselItem>{" "}
        <CarouselItem>
          <Image
            height={800}
            width={800}
            alt=""
            src={"https://source.unsplash.com/random/500x500/?girl"}
            className="object-cover object-top h-[70vh] "
          />
        </CarouselItem>{" "}
        <CarouselItem>
          <Image
            height={800}
            width={800}
            alt=""
            src={"https://source.unsplash.com/random/500x500/?girl=2"}
            className="object-cover object-top h-[70vh] "
          />
        </CarouselItem>{" "}
        <CarouselItem>
          <Image
            height={800}
            width={800}
            alt=""
            src={"https://source.unsplash.com/random/500x500/?girl=3"}
            className="object-cover object-top h-[70vh] "
          />
        </CarouselItem>{" "}
        <CarouselItem>
          <Image
            height={800}
            width={800}
            alt=""
            src={"https://source.unsplash.com/random/500x500/?girl=4"}
            className="object-cover object-top h-[70vh] "
          />
        </CarouselItem>{" "}
        <CarouselItem>
          <Image
            height={800}
            width={800}
            alt=""
            src={"https://source.unsplash.com/random/500x500/?girl=5"}
            className="object-cover object-top h-[70vh] "
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselShad
`,
    },
    {
      name: "Carouselslider",
      component: <Carouselslider />,
      installation: `npx shadcn-ui@latest add carousel
`,
      code: `import Image from 'next/image';
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
`,
    },

  ];

  return (
    <div>
      {Types.map((type, index) => {
        return (
          <PreviewComponent
            code={type.code}
            installation={type.installation}
            key={index}
          >
            {type.component}
          </PreviewComponent>
        );
      })}
    </div>
  );
};

export default Page;
