import PreviewComponent from "@/components/previewComponent";
import ButtonBasic from "@/components/inatorscomponents/buttonbasic";
import React from "react";

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
  ];

  return (
    <div>
      {
        buttonTypes.map((buttonType, index) => {
          return (
            <PreviewComponent code={buttonType.code} installation={buttonType.installation} key={index}>
              {buttonType.component}
            </PreviewComponent>
          )
        })
      }
    </div>
  );
};

export default Page;
