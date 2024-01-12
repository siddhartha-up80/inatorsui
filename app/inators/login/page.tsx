import Loginbasic from "@/components/inatorscomponents/login/loginbasic";
import Loginhero from "@/components/inatorscomponents/login/loginhero";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Loginbasic",
      component: <Loginbasic />,
      installation: `npx shadcn-ui@latest add button input label`,
      code: `import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react'

const Loginbasic = () => {
  return (
    <div>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 shadow-md">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm ">
            Sign in to access your account
          </p>
        </div>
        <form  action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <Label htmlFor="password" className="text-sm">
                  Password
                </Label>
                <Link
                
                  href="/forget"
                  className="text-xs hover:underline "
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 "
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <Button
                type="button"
                className="w-full px-8 py-3 font-semibold"
              >
                Sign in
              </Button>
            </div>
            <p className="px-6 text-sm text-center ">
              Don't have an account yet?
              <Link
                href="/signup"
                className="hover:underline text-rose-600"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginbasic`,
    },
    {
      name: "Loginhero",
      component: <Loginhero />,
      installation: `npx shadcn-ui@latest add button input label`,
      code: `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Loginhero = () => {
  return (
    <div>
      <section className="body-font shadow-md">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl ">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className=" text-lg font-medium title-font mb-5">Sign In</h2>
            <div className="relative mb-4">
              <Label htmlFor="full-name" className="leading-7 text-sm">
                Full Name
              </Label>
              <Input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full"
              />
            </div>
            <div className="relative mb-4">
              <Label htmlFor="email" className="leading-7 text-sm">
                Email
              </Label>
              <Input type="email" id="email" name="email" className="w-full" />
            </div>
            <Button className="py-2 px-8 w-full">Sign In</Button>
            <p className="text-xs  mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loginhero;
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
