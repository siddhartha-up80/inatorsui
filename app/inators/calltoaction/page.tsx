import Banneraction from "@/components/inatorscomponents/calltoaction/banneraction";
import Banneractionbutton from "@/components/inatorscomponents/calltoaction/banneractionbutton";
import Banneractionimage from "@/components/inatorscomponents/calltoaction/banneractionimage";
import Banneractionpara from "@/components/inatorscomponents/calltoaction/banneractionpara";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Banneraction",
      component: <Banneraction />,
      installation: `npx shadcn-ui@latest add button
`,
      code: `import { Button } from "@/components/ui/button";
import React from "react";

const Banneraction = () => {
  return (
    <div>
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
`,
    },
    {
      name: "Banneractionbutton",
      component: <Banneractionbutton />,
      installation: `npx shadcn-ui@latest add button
`,
      code: `import { Button } from '@/components/ui/button';
import React from 'react'

const Banneractionbutton = () => {
  return (
    <div>
      <section className="py-6 shadow-md">
        <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
          <div className="flex flex-col justify-center lg:text-left">
            <p className="mb-1 text-sm font-medium tracki uppercase text-rose-600">
              Hic eligendi necessitatibus quod quia
            </p>
            <h1 className="py-2 text-3xl font-medium leadi title-font">
              Master Cleanse Reliac Heirloom
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
            <Button className="inline-flex items-center px-6 py-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-7 h-7 text-gray-50"
              >
                <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 leadi">
                <span className="mb-1 text-xs">GET IT ON</span>
                <span className="font-semibold title-font">Google Play</span>
              </span>
            </Button>
            <Button className="inline-flex items-center px-5 py-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="fill-current w-7 h-7 text-gray-50"
              >
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 leadi">
                <span className="mb-1 text-xs">Download on the</span>
                <span className="font-semibold title-font">App Store</span>
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banneractionbutton
`,
    },
    {
      name: "Banneractionimage",
      component: <Banneractionimage />,
      installation: `npx shadcn-ui@latest add button
`,
      code: `import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react'

const Banneractionimage = () => {
  return (
    <div>
      <div
        className="w-full bg-gray-500 shadow-md "
        style={{
          backgroundImage: 'url("https://source.unsplash.com/random/640x480")',
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leadi text-center text-gray-100">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <Input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <Button
              type="button"
              variant={'destructive'}
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banneractionimage
`,
    },
    {
      name: "Banneractionpara",
      component: <Banneractionpara />,
      installation: `npx shadcn-ui@latest add button
`,
      code: `import { Button } from '@/components/ui/button';
import React from 'react'

const Banneractionpara = () => {
  return (
    <div>
      <section className="py-6 shadow-md">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leadi text-center">
            Something totally different
          </h1>
          <p className="pt-2 pb-8 text-xl font-medium text-center">
            Eum omnis itaque harum at quae sequi unde similique alias asperiores
            totam. Ex cumque maxime harum doloremque, tempore nam fugiat
            aspernatur rerum ipsa unde est modi commodi molestias maiores
            eveniet eius esse asperiores neque dicta ea quisquam? Excepturi
            sapiente officiis explicabo ab?
          </p>
          <Button className="px-8 py-3 text-lg font-semibold rounded">
            Learn more
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Banneractionpara
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
