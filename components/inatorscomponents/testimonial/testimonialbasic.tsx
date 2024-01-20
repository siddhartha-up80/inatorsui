import Image from "next/image";
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
