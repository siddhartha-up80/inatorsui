import Cardarticle from "@/components/inatorscomponents/card/cardarticle";
import Cardimage from "@/components/inatorscomponents/card/cardimage";
import Cardimagebutton from "@/components/inatorscomponents/card/cardimagebutton";
import Cardimagepara from "@/components/inatorscomponents/card/cardimagepara";
import Cardinstagram from "@/components/inatorscomponents/card/cardinstagram";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Cardimagepara",
      component: <Cardimagepara />,
      installation: `npx shadcn-ui@latest add button card`,
      code: `import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const Cardimagepara = () => {
  return (
    <div>
      <Card className="flex flex-col max-w-lg overflow-hidden rounded-lg shadow-md">
        <CardHeader className="flex flex-row items-center space-x-4">
          <CardTitle className="flex space-y-1">
            <div>
              <Image
                height={800}
                width={800}
                alt=""
                src="https://source.unsplash.com/500x500/?portrait"
                className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
              />
            </div>
          </CardTitle>
          <CardDescription className="flex flex-col">
            <Link href="#" className="text-sm font-semibold">
              Leroy Jenkins
            </Link>
            <span className="text-xs ">4 hours ago</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            height={500}
            width={500}
            src="https://source.unsplash.com/random/100x100/?5"
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">
            Nam cu platonem posidonium sanctus debitis te
          </h2>
          <p className="text-sm ">
            Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
            pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud
            atqui apeirian...
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <Button
              aria-label="Share this post"
              className="px-3 py-2 text-center "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current "
              >
                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
              </svg>
            </Button>
            <Button aria-label="Bookmark this post" className="px-3" py-2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current "
              >
                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
              </svg>
            </Button>
          </div>
          <div className="flex space-x-2 text-sm ">
            <Button className="flex items-center p-1 space-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Number of comments"
                className="w-4 h-4 fill-current "
              >
                <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
              </svg>
              <span>30</span>
            </Button>
            <Button className="flex items-center p-1 space-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Number of likes"
                className="w-4 h-4 fill-current "
              >
                <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
              </svg>
              <span>283</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cardimagepara;
`,
    },
    {
      name: "Cardimage",
      component: <Cardimage />,
      installation: `npx shadcn-ui@latest add button card`,
      code: `import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

const Cardimage = () => {
  return (
    <Card>
      <CardContent className="max-w-xs p-6 rounded-md shadow-md">
        <Image
          height={500}
          width={500}
          src="https://source.unsplash.com/random/300x300/?girl"
          alt=""
          className="object-cover object-top w-full rounded-md h-72 shadow-sm"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-tighter uppercase text-rose-600">
            Quisque
          </span>
          <h2 className="text-xl font-semibold tracki">Nam maximus purus</h2>
        </div>
        <p className="">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </CardContent>
    </Card>
  );
};

export default Cardimage;
`,
    },
    {
      name: "Cardimagebutton",
      component: <Cardimagebutton />,
      installation: `npx shadcn-ui@latest add button card`,
      code: `import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'

const Cardimagebutton = () => {
  return (
    <div>
      <Card className="max-w-xs rounded-md shadow-md">
        <Image
          height={500}
          width={500}
          src="https://source.unsplash.com/random/500x500/?girl"
          alt=""
          className="object-cover object-top w-full rounded-t-md h-72 shadow-md"
        />
        <CardContent className="flex flex-col justify-between px-2 py-6 text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracki">Donec lectus leo</h2>
            <p className="text-gray-800">
              Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md">
            Read more
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Cardimagebutton`,
    },

    {
      name: "Cardinstagram",
      component: <Cardinstagram />,
      installation: `npx shadcn-ui@latest add button card`,
      code: `import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Cardinstagram = () => {
  return (
    <div>
      <Card className="rounded-md shadow-md sm:w-96">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            <Image
              height={500}
              width={500}
              src="https://source.unsplash.com/500x500/?girl,cute"
              alt=""
              className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-300"
            />
            <div className="-space-y-1">
              <h2 className="text-sm font-semibold leadi">leroy_jenkins72</h2>
              <span className="inline-block text-xs leadi text-gray-600">
                Somewhere
              </span>
            </div>
          </div>
          <button title="Open options" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
              <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
              <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
            </svg>
          </button>
        </div>
        <img
          src="https://source.unsplash.com/301x301/?girl"
          alt=""
          className="object-cover object-center w-full h-72 bg-gray-500"
        />
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                title="Like post"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Add a comment"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Share post"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                </svg>
              </button>
            </div>
            <button
              type="button"
              title="Bookmark post"
              className="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full bg-gray-500 border-gray-100"
                  src="https://source.unsplash.com/40x40/?portrait?1"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full bg-gray-500 border-gray-100"
                  src="https://source.unsplash.com/40x40/?portrait?2"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full bg-gray-500 border-gray-100"
                  src="https://source.unsplash.com/40x40/?portrait?3"
                />
              </div>
              <span className="text-sm">
                Liked by
                <span className="font-semibold">Mamba UI</span>and
                <span className="font-semibold">86 others</span>
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm">
              <span className="text-base font-semibold">leroy_jenkins72</span>
              Nemo ea quasi debitis impedit!
            </p>
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full py-0.5 bg-transparent border-none rounded text-sm pl-0 text-gray-800"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Cardinstagram;
`,
    },
    {
      name: "Cardarticle",
      component: <Cardarticle />,
      installation: `npx shadcn-ui@latest add button card`,
      code: `import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react'

const Cardarticle = () => {
  return (
    <div>
      <Card className="max-w-lg pb-4 shadow-md">
        <CardHeader>
          <div className="flex justify-between border-bottom">
            <div className="flex items-center">
              <Link href="#" className="mb-0 capitalize ">
                Photography
              </Link>
            </div>
            <Link href="#">See All</Link>
          </div>
        </CardHeader>

        <div className="space-y-4">
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <img
                src="https://source.unsplash.com/random/480x360/?girl,portrait"
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 "
              />
              <div className="flex items-center text-xs">
                <span>6 min ago</span>
              </div>
            </div>
            <Link href="#" className="block">
              <h3 className="text-xl font-semibold text-rose-600">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </Link>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default Cardarticle`,
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
