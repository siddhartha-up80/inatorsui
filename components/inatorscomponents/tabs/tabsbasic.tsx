import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tabsbasic = () => {
  return (
    <div className="w-full">
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
              <TabsTrigger value="Inators UI Usage">
                Inators UI Usage
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="Shadcn-ui Installation"
              className="mt-10 min-w-[80vw]"
            >
              <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                  Installation
                </h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                facere harum odio assumenda suscipit facilis quasi optio! Ea
                eveniet excepturi consectetur rem, corrupti porro, molestias nam
                aliquid cupiditate est neque.
              </div>
            </TabsContent>
            <TabsContent
              value="Inators UI Usage"
              className="mt-10 min-w-[80vw]"
            >
              <div className="space-y-2">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                  Inators UI Usage
                </h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                exercitationem atque iusto. Cumque pariatur, ducimus vero
                praesentium perspiciatis provident iusto ab labore adipisci
                nobis quod distinctio, explicabo alias? Rem repellendus vitae
                vel numquam odit sunt maiores, quas id beatae eaque recusandae,
                voluptates quasi accusamus laborum quae autem voluptatem?
                Facere, eaque!
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Tabsbasic;
