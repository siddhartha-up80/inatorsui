import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InstallCode from "@/components/installcode";
import CodeJSX from "@/components/codejsx";

const Page = () => {
  return (
    <div className="md:mt-24">
      <div className="flex justify-center mx-auto ">
        <Tabs
          defaultValue="Shadcn-ui Installation"
          className="min-w-[90vw] flex flex-col md:justify-center md:items-center   p-10"
        >
          <TabsList className="mx-auto  flex justify-center  w-max bg-black text-white">
            <TabsTrigger value="Shadcn-ui Installation">
              Shadcn-ui Installation
            </TabsTrigger>
            <TabsTrigger value="Inators UI Usage">Inators UI Usage</TabsTrigger>
          </TabsList>
          <TabsContent
            value="Shadcn-ui Installation"
            className="mt-10 min-w-[80vw]"
          >
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                Installation
              </h1>
              <p className="text-lg text-muted-foreground pt-2">
                <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
                  Install and configure shadcn-ui.
                </h1>
              </p>
              <div>
                <div>
                  <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
                    Create Project
                  </h3>
                  <p className=" mt-6 mb-4">
                    Start by creating a new Next.js project using{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      create-next-app
                    </code>
                    :
                  </p>
                  <span className="">
                    <InstallCode
                      installation={`npx create-next-app@latest my-app`}
                    />
                  </span>
                </div>
                <div>
                  <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
                    Run the CLI
                  </h3>
                  <p className="leading-7 mt-6 mb-4">
                    Run the{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      shadcn-ui
                    </code>{" "}
                    init command to setup your project:
                  </p>

                  <span className="">
                    <InstallCode installation={`npx shadcn-ui@latest init`} />
                  </span>
                </div>
                <div>
                  <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
                    Configure components.json
                  </h3>
                  <p className="leading-7 mt-6 mb-4">
                    You will be asked a few questions to configure{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      components.json
                    </code>{" "}
                    :
                  </p>

                  <span className="">
                    <InstallCode
                      installation={`Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › app/globals.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes
`}
                    />
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Inators UI Usage" className="mt-10 min-w-[80vw]">
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                Inators UI Usage
              </h1>
              <p className="text-lg text-muted-foreground pt-2">
                <h1 className="scroll-m-20 text-xl font-bold tracking-tight">
                  Install and configure shadcn-ui components.
                </h1>
              </p>
              <div>
                <div>
                  <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
                    Install Components
                  </h3>
                  <p className=" mt-6 mb-4">
                    Start by installing a new component by using commands
                    written on the components page{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      button dropdown-menu
                    </code>
                    :
                  </p>
                  <span className="">
                    <InstallCode
                      installation={`npx shadcn-ui@latest add button dropdown-menu`}
                    />
                  </span>
                </div>
                <div className="pr-10">
                  <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
                    Copy code from components page
                  </h3>
                  <p className="leading-7 mt-6 mb-4">
                    Create a new file using your code editor{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      ButtonOptions.tsx
                    </code>{" "}
                    in your components folder
                  </p>

                  <span className="">
                    <CodeJSX
                      code={`import React from "react";
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

`}
                    />
                  </span>
                </div>
                <div>
                  <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
                    Import created component to use it
                  </h3>
                  <p className="leading-7 mt-6 mb-4">
                    Add the component to use{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      ButtonOptions.tsx
                    </code>{" "}
                    :
                  </p>

                  <span className="">
                    <CodeJSX
                      code={`import ButtonOptions from "@/components/ButtonOptions";
`}
                    />
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
