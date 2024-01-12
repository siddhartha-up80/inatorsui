"use client";

import React from "react";
import { Button } from "./ui/button";
import CodeJSX from "./codejsx";
import InstallCode from "./installcode";
import { Maximize2 } from "lucide-react";

const PreviewComponent = ({ children, code, installation }: any) => {
  // console.log(code)

  const [showCode, setShowCode] = React.useState(false);
  const [fullscreen, setFullscreen] = React.useState(false);

  return (
    <div className="md:mt-20 mt-10 max-w-[85vw] mx-auto shadow-lg">
      <section className="mx-auto overflow-hidden rounded-lg shadow-sm scrollbar-none">
        <div className="overflow-hidden divide-y rounded  divide-gray-700">
          <div className="flex justify-between px-2 py-4 overflow-x-auto sm:p-4 flex-nowrap">
            <div className="space-x-2">
              <Button
                type="button"
                name="Show preview"
                className={`${!showCode ? "bg-rose-600" : ""}`}
                onClick={() => setShowCode(false)}
              >
                {" "}
                Preview{" "}
              </Button>

              <Button
                type="button"
                name="Show JSX code"
                className={`${showCode ? "bg-rose-600" : ""}`}
                onClick={() => setShowCode(true)}
              >
                {" "}
                JSX{" "}
              </Button>
            </div>
            <button
              title="Maximize"
              type="button"
              className="px-2 text-sm rounded-md focus-visible:bg-opacity-50 hover:bg-rose-600 hover:text-white"
              onClick={() => setFullscreen(!fullscreen)}
            >
              <Maximize2 />
            </button>
          </div>
          <div className="relative md:p-10">
            {/**/}
            <>
              {showCode ? (
                installation ? (
                  <>
                    <div className="flex justify-center">
                      <InstallCode installation={installation} />{" "}
                    </div>

                    <CodeJSX code={code} />
                  </>
                ) : (
                  <CodeJSX code={code} />
                )
              ) : (
                <div className="p-3 px-6 min-h-48 min-w-[80vw] flex justify-center mx-auto">{children}</div>
              )}
            </>

            {/**/}
            {/**/}
            {/**/}
            {/**/}
          </div>
        </div>
      </section>

      {fullscreen && (
        <section className="bg-white min-h-screen w-screen fixed top-0 left-0 p-2 z-50 overflow-y-scroll">
          {children}

          <button
            title="Maximize"
            type="button"
            className="p-2 bg-black text-white text-sm rounded-md focus-visible:bg-opacity-50 hover:bg-rose-600 hover:text-white absolute right-10 top-10"
            onClick={() => setFullscreen(!fullscreen)}
          >
            <Maximize2 />
          </button>
        </section>
      )}
    </div>
  );
};

export default PreviewComponent;
