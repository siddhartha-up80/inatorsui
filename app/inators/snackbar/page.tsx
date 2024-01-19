import Snackbarbasic from "@/components/inatorscomponents/snackbar/snackbarbasic";
import Snackbarcard from "@/components/inatorscomponents/snackbar/snackbarcard";
import PreviewComponent from "@/components/previewComponent";
import React from "react";

const Page = () => {
  const Types = [
    {
      name: "Snackbarbasic",
      component: <Snackbarbasic />,
      installation: `npx shadcn-ui@latest add sonner`,
      code: `"use client"

// add Toaster component to rootlayout
// import { Toaster } from "@/components/ui/sonner";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <main>{children}</main>
//         <Toaster />
//       </body>
//     </html>
//   );
// }

import React from 'react'
import { toast } from "sonner"
 
import { Button } from "@/components/ui/button"

const Snackbarbasic = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}

export default Snackbarbasic`,
    },
    {
      name: "Snackbarcard",
      component: <Snackbarcard />,
      installation: `npx shadcn-ui@latest add button`,
      code: `"use client";

      // add Toaster component to rootlayout
// import { Toaster } from "@/components/ui/sonner";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <main>{children}</main>
//         <Toaster />
//       </body>
//     </html>
//   );
// }

import { Button } from "@/components/ui/button";
import React, { lazy } from "react";
import { toast } from "sonner";

const Snackbarcard = () => {
  return (
    <div>
      <Button
        variant={"outline"}
        onClick={() =>
          toast(
            <div className="flex gap-6 rounded-lg overflow-hidden divide-x max-w-2xl divide-gray-300">
              <div className="flex flex-1 flex-col p-4">
                <span className="text-2xl">Success</span>
                <span className="text-xs">
                  Vitae nulla eligendi dignissimos culpa doloribus.
                </span>
              </div>
            </div>
          )
        }
      >
        Toast Basic Card
      </Button>
    </div>
  );
};

export default Snackbarcard;
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
