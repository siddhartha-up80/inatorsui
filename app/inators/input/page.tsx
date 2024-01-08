import Inputbasic from "@/components/inatorscomponents/input/inputbasic";
import Inputurl from "@/components/inatorscomponents/input/inputurl";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Inputbasic",
      component: <Inputbasic />,
      installation: `npx shadcn-ui@latest add input label`,
      code: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Inputbasic = () => {
  return (
    <div>
      <form action="" className="w-max mx-auto">
        <Label>Name</Label>
        <Input type="text" placeholder="Enter your name" />
      </form>
    </div>
  );
};

export default Inputbasic;
`,
    },
    {
      name: "Inputurl",
      component: <Inputurl />,
      installation: `npx shadcn-ui@latest add input label`,
      code: `import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'

const Inputurl = () => {
  return (
    <div>
      <fieldset className="space-y-1 w-max mx-auto">
        <Label  className="block text-sm font-medium">
          Website
        </Label>
        <div className="flex">
          <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md bg-black text-white py-2">
            https://
          </span>
          <Input
            type="text"
            name="url"
            id="url"
            placeholder="Enter your url"
            className="flex flex-1 border sm:text-sm rounded-r-md py-2"
          />
        </div>
      </fieldset>
    </div>
  );
}

export default Inputurl`,
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
