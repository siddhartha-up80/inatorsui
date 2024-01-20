import Testimonialbasic from "@/components/inatorscomponents/testimonial/testimonialbasic";
import Testimonialcard from "@/components/inatorscomponents/testimonial/testimonialcard";
import Testimonialcardlarge from "@/components/inatorscomponents/testimonial/testimonialcardlarge";
import Testimonialpara from "@/components/inatorscomponents/testimonial/testimonialpara";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Testimonialbasic",
      component: <Testimonialbasic />,
      installation: ``,
      code: `import Image from "next/image";
import React from "react";

const Testimonialbasic = () => {
  return (
    <div>
      <section className="shadow-md body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  height={200}
                  width={200}
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://source.unsplash.com/random/900×700/?girl=1"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet quaerat nesciunt voluptatem repellat magnam. Libero
                  atque vero consequatur ipsa quis nam nobis. Itaque veniam sed
                  perferendis possimus nobis tempore totam aliquid iusto ab fuga
                  nisi, impedit incidunt quam dolore magni molestias sit
                  exercitationem! Natus distinctio, quod dolorem mollitia dolor
                  libero?
                </p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p className="">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  height={200}
                  width={200}
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://source.unsplash.com/random/900×700/?girl=2"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet autem dolor suscipit fugiat odio, cumque ab sit
                  deserunt nulla alias? Deserunt necessitatibus, eos harum eius,
                  nulla excepturi minima nobis enim porro impedit unde est ex
                  maiores? Eum quam ipsam saepe? Soluta libero iste ab assumenda
                  porro! Consectetur illum id ea!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p className="">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <Image
                  height={200}
                  width={200}
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://source.unsplash.com/random/900×700/?girl=3"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
                  explicabo numquam commodi perspiciatis facere assumenda,
                  tempora vitae rerum saepe optio quod repellendus ipsa
                  laudantium asperiores voluptas neque iste eligendi aliquam
                  dolore, voluptates enim. Dignissimos autem optio, assumenda
                  libero inventore, repudiandae suscipit ipsum totam, earum hic
                  dolorem tenetur? Consequatur, veritatis corrupti!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p className="">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonialbasic;
`,
    },
    {
      name: "Testimonialpara",
      component: <Testimonialpara />,
      installation: ``,
      code: `import React from 'react'

const Testimonialpara = () => {
  return (
    <div className='w-full'>
      <section className="my-8 shadow-md">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <h1 className="text-4xl font-semibold leadi text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
          <div className="flex flex-col items-center mx-12 lg:mx-0">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute top-0 left-0 w-8 h-8 "
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-8 h-8 "
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg bg-rose-600"></span>
            <p>Leroy Jenkins</p>
          </div>
          <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute top-0 left-0 w-8 h-8 "
              >
                <path
                  fill="currentColor"
                  d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                ></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                Accusantium illum cupiditate harum asperiores iusto quos quasi
                quis quae! Fugit doloribus, voluptatum quidem magnam velit
                excepturi nobis, reprehenderit ducimus incidunt quisquam quae
                veritatis, quos iure harum.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute bottom-0 right-0 w-8 h-8 "
              >
                <path
                  fill="currentColor"
                  d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                ></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg bg-rose-600"></span>
            <p>Leroy Jenkins</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonialpara`,
    },
    {
      name: "Testimonialcard",
      component: <Testimonialcard />,
      installation: `npx shadcn-ui@latest add card`,
      code: `import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'

const Testimonialcard = () => {
  return (
    <div className='w-full'>
      <section className="shadow-md">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">
                Duo assum utroque appetere an
              </h2>
              <p className="">
                Pri ex magna scaevola moderatius. Nullam accommodare no vix, est
                ei diceret alienum, et sit cetero malorum. Et sea iudico
                consequat, est sanctus adipisci ex.
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <Card className="p-6 rounded shadow-md">
                    <p>
                      An audire commodo habemus cum. Ne sed corrumpit
                      repudiandae. Tota aliquip democritum pro in, nec
                      democritum intellegam ne. Propriae volutpat dissentiet ea
                      sit, nec at lorem inani tritani, an ius populo perfecto
                      vituperatoribus. Eu cum case modus salutandi, ut eum
                      vocent sensibus reprehendunt.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                      height={200}
                      width={200}
                        src="https://source.unsplash.com/50x50/?girl?1"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm ">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 rounded shadow-md">
                    <p>
                      Sit wisi sapientem ut, pri civibus temporibus voluptatibus
                      et, ius cu hinc fabulas. Nam meliore minimum et, regione
                      convenire cum id. Ex pro eros mucius consectetuer, pro
                      magna nulla nonumy ne, eam putent iudicabit consulatu cu.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                      height={200}
                      width={200}
                        src="https://source.unsplash.com/50x50/?girl?2"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm ">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="grid content-center gap-4">
                  <Card className="p-6 rounded shadow-md">
                    <p>
                      Putant omnium elaboraret per ut. Id dicta tritani nominavi
                      quo, mea id justo errem elaboraret. Agam mollis scripserit
                      ea his, ut nec postea verear persecuti. Ea noster senserit
                      eam, ferri omittantur ei nec. Id mel solet libris
                      efficiantur, commune explicari et eos. Case movet ad est,
                      sed tota vocent appetere ea.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                      height={200}
                      width={200}
                        src="https://source.unsplash.com/50x50/?girl?3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm ">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 rounded shadow-md">
                    <p>
                      Te omnes virtute volutpat sed. Ei esse eros interesset
                      vel, ei populo denique ocurreret vix, eu cum pertinax
                      mandamus vituperatoribus. Solum nihil luptatum per ex, ei
                      amet viderer eos. Ea illum labitur mnesarchum pro. Eius
                      meis salutandi ei nam, alterum expetenda et nec. Expetenda
                      intellegat at eum, per mazim sanctus honestatis ad. Ei
                      noluisse invenire vix. Te ancillae patrioque qui, probo
                      bonorum vivendum ex vim.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                      height={200}
                      width={200}
                        src="https://source.unsplash.com/50x50/?girl?4"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm ">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonialcard`,
    },
    {
      name: "Testimonialcardlarge",
      component: <Testimonialcardlarge />,
      installation: `npx shadcn-ui@latest add card`,
      code: `import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'

const Testimonialcardlarge = () => {
  return (
    <div>
      <section className="my-8 shadow-md ">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-4xl font-semibold leadi text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <Card className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 shadow-md">
              <p className="relative px-6 py-1 text-lg italic text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-rose-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-rose-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </Card>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-rose-600 text-gray-50">
              <Image
              height={200}
              width={200}
                src="https://source.unsplash.com/50x50/?girl?1"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300"
              />
              <p className="text-xl font-semibold leadi">Distinctio Animi</p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <Card className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 shadow-md">
              <p className="relative px-6 py-1 text-lg italic text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-rose-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-rose-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </Card>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-rose-600 text-gray-50">
              <Image
              height={200}
              width={200}
                src="https://source.unsplash.com/50x50/?girl?2"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300"
              />
              <p className="text-xl font-semibold leadi">Distinctio Animi</p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <Card className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 shadow-md">
              <p className="relative px-6 py-1 text-lg italic text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-rose-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-rose-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </Card>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-rose-600 text-gray-50">
              <Image
              height={200}
              width={200}
                src="https://source.unsplash.com/50x50/?girl?3"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300"
              />
              <p className="text-xl font-semibold leadi">Distinctio Animi</p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <Card className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 shadow-md">
              <p className="relative px-6 py-1 text-lg italic text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-rose-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-rose-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </Card>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-rose-600 text-gray-50">
              <Image
              height={200}
              width={200}
                src="https://source.unsplash.com/50x50/?girl?4"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-300"
              />
              <p className="text-xl font-semibold leadi">Distinctio Animi</p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonialcardlarge`,
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
