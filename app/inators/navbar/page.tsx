import Navbarbasic from "@/components/inatorscomponents/navbar/navbarbasic";
import Navbarend from "@/components/inatorscomponents/navbar/navbarend";
import Navbarcenter from "@/components/inatorscomponents/navbar/navbarcenter";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Navbarbasic",
      component: <Navbarbasic />,
      installation: `npx shadcn-ui@latest add button`,
      code: `"use client";

import * as React from "react";
import Link from "next/link";
import { Flower2, Menu } from "lucide-react";
import { Button } from "../../ui/button";

export default function Navbarbasic() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/your-path" },
    { title: "Blog", path: "/your-path" },
    { title: "About Us", path: "/your-path" },
    { title: "Contact Us", path: "/your-path" },
  ];

  return (
    <header className="p-2 shadow text-gray-800 w-full h-max">
      <div className="flex justify-between">
        <div className="flex">
          {!state ? (
            <Link
              href="/"
              aria-label="Back to homepage"
              className=" flex md:justify-center justify-start items-center"
            >
              <Flower2 />
            </Link>
          ) : null}

          <div
            className={\`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 \${
              state ? "block" : "hidden"
            }\`}
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 mt-2 ml-5">
              {menus.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-600 hover:text-rose-600 text-base"
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Button className="px-8 py-2 font-semibold rounded hover:bg-rose-600 text-gray-50">
            Log in
          </Button>
        </div>
        <button
          className="p-2 lg:hidden flex md:justify-center justify-start"
          title="menu"
          onClick={() => setState(!state)}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}
`,
    },
    {
      name: "Navbarend",
      component: <Navbarend />,
      installation: `npx shadcn-ui@latest add button`,
      code: `"use client";

import * as React from "react";
import Link from "next/link";
import { Flower2, Menu } from "lucide-react";
import { Button } from "../../ui/button";

export default function Navbarend() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/your-path" },
    { title: "Blog", path: "/your-path" },
    { title: "About Us", path: "/your-path" },
    { title: "Contact Us", path: "/your-path" },
  ];

  return (
    <header className="p-2 shadow text-gray-800 w-full h-max">
      <div className="flex justify-between">
        {!state ? (
          <Link
            href="/"
            aria-label="Back to homepage"
            className=" flex md:justify-between justify-between items-center"
          >
            <Flower2 />
          </Link>
        ) : null}
        <div className="flex">
          <div
            className={\`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 \${
              state ? "block" : "hidden"
            }\`}
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 mt-2 ml-5">
              {menus.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-600 hover:text-rose-600 text-base"
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex ml-6">
            <Button className="px-8 py-2 font-semibold rounded hover:bg-rose-600 text-gray-50">
              Log in
            </Button>
          </div>
        </div>

        <button
          className="p-2 lg:hidden flex md:justify-center justify-start"
          title="menu"
          onClick={() => setState(!state)}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}
`,
    },
    {
      name: "Navbarcenter",
      component: <Navbarcenter />,
      installation: `npx shadcn-ui@latest add button`,
      code: `"use client";

import * as React from "react";
import Link from "next/link";
import { Flower2, Menu } from "lucide-react";
import { Button } from "../../ui/button";

export default function Navbarcenter() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/your-path" },
    { title: "Blog", path: "/your-path" },
    { title: "About Us", path: "/your-path" },
    { title: "Contact Us", path: "/your-path" },
  ];

  return (
    <header className="p-2 shadow text-gray-800 w-full h-max">
      <div className="flex justify-between">
        {!state ? (
          <Link
            href="/"
            aria-label="Back to homepage"
            className=" flex md:justify-between justify-between items-center"
          >
            <Flower2 />
          </Link>
        ) : null}
        <div className="flex">
          <div
            className={\`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 \${
              state ? "block" : "hidden"
            }\`}
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 mt-2 ml-5">
              {menus.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-600 hover:text-rose-600 text-base"
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex ml-6">
          <Button className="px-8 py-2 font-semibold rounded hover:bg-rose-600 text-gray-50">
            Log in
          </Button>
        </div>
        <button
          className="p-2 lg:hidden flex md:justify-center justify-start"
          title="menu"
          onClick={() => setState(!state)}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}
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
