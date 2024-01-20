import Tabsbasic from "@/components/inatorscomponents/tabs/tabsbasic";
import Tabsbasiclarge from "@/components/inatorscomponents/tabs/tabsbasiclarge";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Tabsbasic",
      component: <Tabsbasic />,
      installation: `npx shadcn-ui@latest add tabs`,
      code: `import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tabsbasic = () => {
  return (
    <div>
      <div className="md:mt-24">
        <div className="flex justify-center mx-auto ">
          <Tabs
            defaultValue="Shadcn-ui Installation"
            className="min-w-[90vw] flex flex-col md:justify-center md:items-center   p-10"
          >
            <TabsList className="mx-auto  flex justify-center  w-max bg-black text-white">
              <TabsTrigger value="Shadcn-ui Installation">
                Shadcn-ui Installation
              </TabsTrigger>
              <TabsTrigger value="Inators UI Usage">
                Inators UI Usage
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="Shadcn-ui Installation"
              className="mt-10 min-w-[80vw]"
            >
              <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                  Installation
                </h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                facere harum odio assumenda suscipit facilis quasi optio! Ea
                eveniet excepturi consectetur rem, corrupti porro, molestias nam
                aliquid cupiditate est neque.
              </div>
            </TabsContent>
            <TabsContent
              value="Inators UI Usage"
              className="mt-10 min-w-[80vw]"
            >
              <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                  Inators UI Usage
                </h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                exercitationem atque iusto. Cumque pariatur, ducimus vero
                praesentium perspiciatis provident iusto ab labore adipisci
                nobis quod distinctio, explicabo alias? Rem repellendus vitae
                vel numquam odit sunt maiores, quas id beatae eaque recusandae,
                voluptates quasi accusamus laborum quae autem voluptatem?
                Facere, eaque!
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Tabsbasic;
`,
    },
    {
      name: "Tabsbasiclarge",
      component: <Tabsbasiclarge />,
      installation: `npx shadcn-ui@latest add tabs`,
      code: `import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const Tabsbasiclarge = () => {
  return (
    <div>
      <section className="shadow-md body-font">
        <Tabs
          className="container px-5 py-24 mx-auto flex flex-wrap flex-col"
          defaultValue="step1"
        >
          <TabsList className="flex mx-auto flex-wrap mb-20 items-center justify-center bg-white">
            <TabsTrigger
              value="step1"
              className="sm:px-6 pb-1 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center  hover:text-gray-900"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              STEP 1
            </TabsTrigger>
            <TabsTrigger
              value="step2"
              className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none  hover:text-gray-900 tracking-wider"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              STEP 2
            </TabsTrigger>
            <TabsTrigger
              value="step3"
              className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none  hover:text-gray-900 tracking-wider"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <circle cx={12} cy={5} r={3} />
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
              </svg>
              STEP 3
            </TabsTrigger>
            <TabsTrigger
              value="step4"
              className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none  hover:text-gray-900 tracking-wider"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
              STEP 4
            </TabsTrigger>
          </TabsList>
          <TabsContent value="step1">
            <Image
            height={800}
            width={800}
              className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/random/1000x1000/?landscape=1"
            />
            <div className="flex flex-col text-center w-full">
              <h1 className="text-xl font-medium title-font mb-4">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                unde hic, beatae expedita consectetur aperiam! Quae, deserunt
                placeat! Quisquam eum porro praesentium explicabo magnam aliquam
                officia repellat dolores pariatur dolorum nihil fuga numquam,
                error, temporibus, placeat ea quo reiciendis dolor.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="step2">
            <Image
            height={800}
            width={800}
              className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/random/1000x1000/?landscape=2"
            />
            <div className="flex flex-col text-center w-full">
              <h1 className="text-xl font-medium title-font mb-4">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                unde hic, beatae expedita consectetur aperiam! Quae, deserunt
                placeat! Quisquam eum porro praesentium explicabo magnam aliquam
                officia repellat dolores pariatur dolorum nihil fuga numquam,
                error, temporibus, placeat ea quo reiciendis dolor.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="step3">
            <Image
            height={800}
            width={800}
              className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/random/1000x1000/?landscape=3"
            />
            <div className="flex flex-col text-center w-full">
              <h1 className="text-xl font-medium title-font mb-4">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                unde hic, beatae expedita consectetur aperiam! Quae, deserunt
                placeat! Quisquam eum porro praesentium explicabo magnam aliquam
                officia repellat dolores pariatur dolorum nihil fuga numquam,
                error, temporibus, placeat ea quo reiciendis dolor.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="step4">
            <Image
            height={800}
            width={800}
              className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/random/1000x1000/?landscape=4"
            />
            <div className="flex flex-col text-center w-full">
              <h1 className="text-xl font-medium title-font mb-4">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                unde hic, beatae expedita consectetur aperiam! Quae, deserunt
                placeat! Quisquam eum porro praesentium explicabo magnam aliquam
                officia repellat dolores pariatur dolorum nihil fuga numquam,
                error, temporibus, placeat ea quo reiciendis dolor.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Tabsbasiclarge;
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
