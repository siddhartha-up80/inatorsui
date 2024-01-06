import Faqaccordian from "@/components/inatorscomponents/faq/faqaccordian";
import Faqaccordianbig from "@/components/inatorscomponents/faq/faqaccordianbig";
import Faqpara from "@/components/inatorscomponents/faq/faqpara";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Faqaccordian",
      component: <Faqaccordian />,
      installation: ``,
      code: `import React from 'react'

const Faqaccordian = () => {
  return (
    <div>
      <section className="shadow-md">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracki text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Optio maiores eligendi molestiae totam dolores similique?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  neque in fugiat magni, quas animi enim veritatis deleniti ex.
                  Impedit.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Modi dolorem veritatis culpa quos consequuntur beatae itaque
                excepturi perspiciatis?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  aspernatur quae, eos explicabo odit minima libero veniam
                  similique quibusdam doloribus facilis ipsa accusantium vel
                  maiores corrupti! Libero voluptate a doloribus?
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Magni reprehenderit possimus debitis?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptates aspernatur dolores in consequatur doloremque
                  inventore reprehenderit, consequuntur perspiciatis architecto.
                </p>
                <p>
                  Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                  veritatis velit quasi cupiditate unde eaque! Iure,
                  voluptatibus autem eaque unde possimus quae.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faqaccordian`,
    },
    {
      name: "Faqaccordianbig",
      component: <Faqaccordianbig />,
      installation: ``,
      code: `import React from 'react'

const Faqaccordianbig = () => {
  return (
    <div>
      <section className="shadow-md">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8">
            Sagittis tempor donec id vestibulum viverra. Neque condimentum
            primis orci at lacus amet bibendum.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Ex orci laoreet egestas sapien magna egestas scelerisque?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                nullam taciti at adipiscing est.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Lorem at arcu rutrum viverra metus sapien venenatis lobortis
                odio?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
                porttitor egestas tincidunt neque vehicula potenti.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Eleifend feugiat sollicitudin laoreet adipiscing bibendum
                suscipit erat?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4">
                Justo libero tellus integer tincidunt justo semper consequat
                venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
                pretium sodales vel magna et massa euismod vulputate sed.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faqaccordianbig`,
    },
    {
      name: "Faqpara",
      component: <Faqpara />,
      installation: `npx shadcn-ui@latest add button card`,
      code: `import React from 'react'

const Faqpara = () => {
  return (
    <div>
      <section className="shadow-md">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracki text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div className="shadow-sm p-2">
              <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
              <p className="mt-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                labore omnis minima, quisquam delectus culpa!
              </p>
            </div>
            <div className="shadow-sm p-2">
              <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
              <p className="mt-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                labore omnis minima, quisquam delectus culpa!
              </p>
            </div>
            <div className="shadow-sm p-2">
              <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
              <p className="mt-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                labore omnis minima, quisquam delectus culpa!
              </p>
            </div>
            <div className="shadow-sm p-2">
              <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
              <p className="mt-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                labore omnis minima, quisquam delectus culpa!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faqpara`,
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
