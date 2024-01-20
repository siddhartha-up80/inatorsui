import Togglebasic from "@/components/inatorscomponents/toggle/togglebasic";
import Togglebuttons from "@/components/inatorscomponents/toggle/togglebuttons";
import Togglefill from "@/components/inatorscomponents/toggle/togglefill";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Togglebasic",
      component: <Togglebasic />,
      installation: `npx shadcn-ui@latest add switch label`,
      code: `import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
`,
    },
    {
      name: "Togglefill",
      component: <Togglefill />,
      installation: `npx shadcn-ui@latest add label input`,
      code: ``,
    },
    {
      name: "Togglebuttons",
      component: <Togglebuttons />,
      installation: `npx shadcn-ui@latest add label input`,
      code: `import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'

const Togglebuttons = () => {
  return (
    <div>
      <Label
        className="inline-flex items-center p-2 rounded-md cursor-pointer text-white"
      >
        <Input id="Toggle3" type="checkbox" className="hidden peer " />
        <span className="px-4 py-3 rounded-l-md bg-rose-600 peer-checked:bg-black">
          Monthly
        </span>
        <span className="px-4 py-3 rounded-r-md bg-black peer-checked:bg-rose-600">
          Annually
        </span>
      </Label>
    </div>
  );
}

export default Togglebuttons`,
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
