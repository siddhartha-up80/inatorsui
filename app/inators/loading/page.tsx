import Loadingdots from "@/components/inatorscomponents/loading/loadingdots";
import Loadingspinner from "@/components/inatorscomponents/loading/loadingspinner";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Loadingspinner",
      component: <Loadingspinner />,
      installation: ``,
      code: `import React from 'react'

const Loadingspinner = () => {
  return (
    <div>
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-rose-600 mx-auto"></div>
    </div>
  );
}

export default Loadingspinner`,
    },
    {
      name: "Loadingdots",
      component: <Loadingdots />,
      installation: ``,
      code: `import React from 'react'

const Loadingdots = () => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-2 mx-auto">
        <div className="w-4 h-4 rounded-full animate-pulse bg-rose-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-rose-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-rose-600"></div>
      </div>
    </div>
  );
}

export default Loadingdots`,
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
