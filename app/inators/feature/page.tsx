import Featurebanner from "@/components/inatorscomponents/feature/featurebanner";
import Featurebannerimage from "@/components/inatorscomponents/feature/featurebannerimage";
import Featurebasic from "@/components/inatorscomponents/feature/featurebasic";
import Featurecard from "@/components/inatorscomponents/feature/featurecard";
import Featurelongimage from "@/components/inatorscomponents/feature/featurelongimage";
import Featurepara from "@/components/inatorscomponents/feature/featurepara";
import Featureparalong from "@/components/inatorscomponents/feature/featureparalong";
import Featuresteps from "@/components/inatorscomponents/feature/featuresteps";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Featurebasic",
      component: <Featurebasic />,
      installation: ``,
      code: `import Image from 'next/image';
import React from 'react'

const Featurebasic = () => {
  return (
    <div>
      <section className="shadow-md">
        <div className=" flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5  ">
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-relaxed">
                  Lorem ipsum dolor sit amet
                </p>
                <p className="leading-relaxed">
                  Praesentium ea et neque distinctio quas eius repudiandae
                  quaerat obcaecati voluptatem similique!
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-relaxed">
                  Lorem ipsum dolor sit amet
                </p>
                <p className="leading-relaxed">
                  Praesentium ea et neque distinctio quas eius repudiandae
                  quaerat obcaecati voluptatem similique!
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-relaxed">
                  Lorem ipsum dolor sit amet
                </p>
                <p className="leading-relaxed">
                  Praesentium ea et neque distinctio quas eius repudiandae
                  quaerat obcaecati voluptatem similique!
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 bg-gray-100 dark:bg-black text-white">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12 h-full">
              <Image
                height={500}
                width={800}
                src="https://source.unsplash.com/640x480?girl"
                alt=""
                className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featurebasic
`,
    },
    {
      name: "Featurebanner",
      component: <Featurebanner />,
      installation: `npx shadcn-ui@latest add button`,
      code: `import { Button } from '@/components/ui/button';
import React from 'react'

const Featurebanner = () => {
  return (
    <div>
      <section className="shadow-md">
        <div className="flex flex-col mx-auto lg:flex-row">
          <div
            className="w-full lg:w-1/3"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/640x480?girl")',
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 mb-8"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-3xl font-semibold leadi">
              Modern solutions to all kinds of problems
            </h2>
            <p className="mt-4 mb-8 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              voluptatum rem amet!
            </p>
            <Button className="self-start px-10 py-3 text-lg font-medium shadow-md">
              Get started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featurebanner
`,
    },
    {
      name: "Featurelongimage",
      component: <Featurelongimage />,
      installation: ``,
      code: `import Image from 'next/image';
import React from 'react'

const Featurelongimage = () => {
  return (
    <div>
      <section className="shadow-md">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracki text-center sm:text-5xl ">
              Aliquip definiebas ad est
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
              Quando cetero his ne, eum admodum sapientem ut.
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                Ad vix debet docendi
              </h3>
              <p className="mt-3 text-lg ">
                Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
                etiam regione ut, persius eripuit quo id. Sit te euismod
                tacimates.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-rose-600 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">
                      Per ei quaeque sensibus
                    </h4>
                    <p className="mt-2 ">
                      Ex usu illum iudico molestie. Pro ne agam facete
                      mediocritatem, ridens labore facete mea ei. Pro id
                      apeirian dignissim.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-rose-600 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">
                      Cu imperdiet posidonium sed
                    </h4>
                    <p className="mt-2 ">
                      Amet utinam aliquando ut mea, malis admodum ocurreret nec
                      et, elit tibique cu nec. Nec ex maluisset inciderint, ex
                      quis.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-rose-600 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi ">
                      Nulla omittam sadipscing mel ne
                    </h4>
                    <p className="mt-2 ">
                      At sed possim oporteat probatus, justo graece ne nec,
                      minim commodo legimus ut vix. Ut eos iudico quando soleat,
                      nam modus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <Image
                height={500}
                width={800}
                src="https://source.unsplash.com/random/360x480?girl"
                alt=""
                className="mx-auto rounded-lg shadow-lg bg-gray-500 object-top object-cover"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracki sm:text-3xl ">
                  Eam nibh gloriatur ex
                </h3>
                <p className="mt-3 text-lg ">
                  Per odio fabellas consulatu cu. Utroque detracto mel ea, quo
                  te latine theophrastus. Ea his tale nibh dissentias, mei
                  exerci tamquam euripidis cu.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-rose-600 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Cibo augue offendit has ad
                      </h4>
                      <p className="mt-2 ">
                        An per velit appellantur, ut utinam minimum nominavi
                        sit, odio nostro habemus ne nec. Ne sonet regione
                        contentiones est.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-rose-600 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        At eum ferri luptatum lobortis
                      </h4>
                      <p className="mt-2 ">
                        Te per quidam maiorum ocurreret, etiam delicatissimi usu
                        ad. Ne has quod periculis. Te sit primis iisque
                        efficiantur.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-rose-600 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Dicunt verterem evertitur eu sea
                      </h4>
                      <p className="mt-2 ">
                        Audire principes rationibus eam an, autem nominavi
                        luptatum per te. Sumo fabulas vim eu, sonet saperet
                        eleifend ut vix.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <Image
                  height={500}
                  width={800}
                  src="https://source.unsplash.com/random/361x481?girl=2"
                  alt=""
                  className="mx-auto rounded-lg shadow-lg bg-gray-500 object-top object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featurelongimage
`,
    },
    {
      name: "Featurecard",
      component: <Featurecard />,
      installation: ``,
      code: `import React from 'react'

const Featurecard = () => {
  return (
    <div>
      <section className="m-4 md:m-8 shadow-md px-4 py-2">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">Built to empower every team</h2>
          <p className="text-gray-600">Libero minima optio qui</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-rose-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leadi">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
            <div className="flex flex-col items-center p-4 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-rose-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leadi">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
            <div className="flex flex-col items-center p-4 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-rose-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leadi">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
            <div className="flex flex-col items-center p-4 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-rose-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leadi">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
            <div className="flex flex-col items-center p-4 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-rose-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leadi">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
            <div className="flex flex-col items-center p-4 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-rose-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leadi">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featurecard
`,
    },
    {
      name: "Featurepara",
      component: <Featurepara />,
      installation: ``,
      code: `import Link from "next/link";
import React from "react";

const Featurepara = () => {
  return (
    <div>
      <section className="m-4 md:m-8 shadow-md">
        <div className="container p-4 mx-auto my-6 space-y-1 text-center">
          <span className="text-xs font-semibold tracki uppercase text-rose-600">
            shortcut to your dream ui
          </span>
          <h2 className="pb-3 text-3xl font-bold md:text-4xl">
            Create Link stylish website in minutes
          </h2>
          <p>
            Get Link jumpstart to creating your new webpage! With our fully
            responsive and carefully styled components you can get the structure
            of your website done with just Link couple of clicks.
          </p>
        </div>
        <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col px-8 py-6">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font ">
              Components
            </h2>
            <p className="flex-1 mb-4 text-base leadi ">
              Individual components that can be re-used multiple times in your
              designs.
            </p>
            <Link
              className="inline-flex items-center space-x-2 text-sm text-rose-600"
              href="/inators/feature"
            >
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font ">
              Sections
            </h2>
            <p className="flex-1 mb-4 text-base leadi ">
              Pre-made building blocks that you can stack on top of each other
              like Legos to build Link website of your own in minutes.
            </p>
            <Link
              className="inline-flex items-center space-x-2 text-sm text-rose-600"
              href="/sections"
            >
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="flex flex-col px-8 py-6">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font ">
              Templates
            </h2>
            <p className="flex-1 mb-4 text-base leadi ">
              Full pages that showcase pieces of what you can achieve with the
              building blocks that are in this UI kit.
            </p>
            <Link
              className="inline-flex items-center space-x-2 text-sm text-rose-600"
              href="/templates"
            >
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="flex flex-col px-8 py-6">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font ">
              Customization
            </h2>
            <p className="flex-1 mb-4 text-base leadi ">
              Choose your primary color from any of the Tailwind CSS 2.0 colors.
              You can also view all of the components in our light and dark
              themes.
            </p>
            <Link
              className="inline-flex items-center space-x-2 text-sm text-rose-600"
              href="/docs"
            >
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featurepara;
`,
    },
    {
      name: "Featurebannerimage",
      component: <Featurebannerimage />,
      installation: `npx shadcn-ui@latest add button
`,
      code: `import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

const Featurebannerimage = () => {
  return (
    <div>
      <section className="p-4 lg:p-8 shadow-md">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row ">
            <Image
              height={800}
              width={800}
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="h-full aspect-video  object-top object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 shadow-md">
              <span className="text-xs uppercase">Join, it's free</span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <Button  className="self-start">
                Action
              </Button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <Image
              height={800}
              width={800}
              src="https://source.unsplash.com/640x480/?2"
              alt=""
              className="h-full aspect-video   object-top object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 shadow-md">
              <span className="text-xs uppercase">Join, it's free</span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <Button  className="self-start">
                Action
              </Button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <Image
              height={800}
              width={800}
              src="https://source.unsplash.com/640x480/?3"
              alt=""
              className="h-full aspect-video  object-top object-cover "
            />
            <div className="flex flex-col justify-center flex-1 p-6 shadow-md">
              <span className="text-xs uppercase">Join, it's free</span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <Button  className="self-start">
                Action
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featurebannerimage
`,
    },
    {
      name: "Featuresteps",
      component: <Featuresteps />,
      installation: ``,
      code: `import React from 'react'

const Featuresteps = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-md">
        <h2 className="mb-8 text-4xl font-bold leadi text-center">
          What do we have to offer?
        </h2>
        <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current text-rose-600"
            >
              <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
              <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
            </svg>
            <span>Ea et neque distinctio</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current text-rose-600"
            >
              <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
              <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
            </svg>
            <span>Quaerat obcaecati voluptatem </span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current text-rose-600"
            >
              <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
              <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
            </svg>
            <span>Quas eius repudianda</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current text-rose-600"
            >
              <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
              <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
            </svg>
            <span>Free and MIT licensed</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current text-rose-600"
            >
              <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
              <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
            </svg>
            <span>Praesentium ea et neque distinctio</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current text-rose-600"
            >
              <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
              <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
            </svg>
            <span>Architecto beatae esse ab amet </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Featuresteps
`,
    },
    {
      name: "Featureparalong",
      component: <Featureparalong />,
      installation: ``,
      code: `import React from 'react'

const Featureparalong = () => {
  return (
    <div>
      <div className="shadow-md">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              All the features you want
            </h2>
            <p className="mt-4 text-lg ">
              Pellentesque viverra, leo id euismod laoreet, nunc risus molestie
              orci, vel faucibus quam justo id mauris.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            <div className="flex shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-rose-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Quisque at urna</dt>
                <dd className="mt-2 ">
                  Vivamus ultricies bibendum tortor, molestie imperdiet justo
                  cursus eu. Donec quis arcu magna. Integer tempor egestas
                  dolor.
                </dd>
              </div>
            </div>
            <div className="flex shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-rose-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Quisque eu dui lacinia</dt>
                <dd className="mt-2 ">
                  Quisque ultricies volutpat sapien nec varius. Sed sit amet
                  justo vestibulum, efficitur risus quis, gravida libero.
                </dd>
              </div>
            </div>
            <div className="flex shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-rose-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Mauris dignissim</dt>
                <dd className="mt-2 ">
                  Phasellus nec molestie arcu. Proin dictum, lorem mollis rutrum
                  efficitur, lectus velit pharetra elit, et dictum purus nibh
                  auctor velit.
                </dd>
              </div>
            </div>
            <div className="flex shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-rose-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Proin nulla eros</dt>
                <dd className="mt-2 ">
                  Sed ornare ultricies gravida. Morbi egestas dolor turpis,
                  ornare laoreet est vehicula non.
                </dd>
              </div>
            </div>
            <div className="flex shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-rose-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Proin dictum</dt>
                <dd className="mt-2 ">
                  Lorem mollis rutrum efficitur, lectus velit pharetra elit, et
                  dictum purus nibh auctor velit.
                </dd>
              </div>
            </div>
            <div className="flex shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-rose-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Quisque eu dui lacinia</dt>
                <dd className="mt-2 ">
                  Cras a mauris tincidunt, scelerisque justo sit amet, hendrerit
                  est. Fusce venenatis diam fringilla metus convallis, at
                  dapibus enim congue.
                </dd>
              </div>
            </div>
            <div className="flex shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-rose-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">
                  Cras vel bibendum tellus
                </dt>
                <dd className="mt-2 ">
                  Curabitur molestie neque ac massa pulvinar, nec sollicitudin
                  nunc consequat. Donec mattis orci eros, vitae porttitor risus
                  pretium eget.
                </dd>
              </div>
            </div>
            <div className="flex shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-rose-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Dignissim magna</dt>
                <dd className="mt-2 ">
                  Cras ac lectus erat. Curabitur condimentum luctus nisi, non
                  lacinia ipsum.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Featureparalong
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
