import PreviewComponent from "@/components/previewComponent";
import ButtonBasic from "@/components/inatorscomponents/buttons/buttonbasic";
import ButtonOutline from "@/components/inatorscomponents/buttons/buttonoutline";
import ButtonOptions from "@/components/inatorscomponents/buttons/buttonoptions";

import React from "react";
import ButtonBanner from "@/components/inatorscomponents/buttons/buttonbanner";

const Page = () => {
  const buttonTypes = [
    {
      name: "Basic",
      component: <ButtonBasic />,
      installation: `npx shadcn-ui@latest add button`,
      code: `import React from 'react'
import { Button } from "@/components/ui/button";

const ButtonBasic = () => {
  return <Button>Basic</Button>;
}

export default ButtonBasic`,
    },
    {
      name: "Outline",
      component: <ButtonOutline />,
      installation: `npx shadcn-ui@latest add button 
      `,
      code: `import React from "react";
import { Button } from "@/components/ui/button";

const ButtonOutline = () => {
  return <Button variant="outline">Outline</Button>;
};

export default ButtonOutline;
`,
    },
    {
      name: "ButtonOptions",
      component: <ButtonOptions />,
      installation: `npx shadcn-ui@latest add button dropdown-menu
`,
      code: `import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ButtonOptions = () => {
  return (
    <div>
      <div className="inline-flex items-center">
        <Button type="button" className="">
          <span>Button Options</span>
          <span className="ml-5 mt-2">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ButtonOptions;

`,
    },
    {
      name: "ButtonBanner",
      component: <ButtonBanner />,
      installation: `npx shadcn-ui@latest add button
`,
      code: `import React from 'react'
import { Button } from '../ui/button';

const ButtonBanner = () => {
  return (
    <div>
      <Button
        type="button"
        className="relative pr-8 overflow-hidden font-semibold"
      >
        With banner
        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracki text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-rose-600">
          New
        </span>
      </Button>
    </div>
  );
}

export default ButtonBanner
`,
    },
  ];

  return (
    <div>
      {buttonTypes.map((buttonType, index) => {
        return (
          <PreviewComponent
            code={buttonType.code}
            installation={buttonType.installation}
            key={index}
          >
            {buttonType.component}
          </PreviewComponent>
        );
      })}
    </div>
  );
};

export default Page;
