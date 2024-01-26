// @ts-nocheck
"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const InstallCode = ({ installation }) => {
  const codeString = installation;

  const [copy, setCopy] = useState(false);

  return (
    <div className=" rounded-md mx-auto my-2">
      <div className="min-w-[22rem] w-full overflow-y-hidden overflow-x-scroll md:overflow-x-hidden max-h-[70vh] md:max-w-[70vw]">
        <span className="flex items-center justify-between p-1 w-full md:w-max bg-[#3a404d] rounded-md text-white">
          {/* <span className="relative left-2 pr-2">$</span> */}
          <SyntaxHighlighter
            language="bash"
            style={atomOneDark}
            customStyle={{
              background: "",
              color: "white"
            }}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
          <div className="pr-2 ">
            {copy ? (
              <button
                className="py-1 inline-flex items-center gap-1"
                title="clipboard"
              >
                <span className="text-base my-1 ">
                  <ClipboardCheck size={18} />
                </span>
              </button>
            ) : (
              <button
                className="py-1 inline-flex items-center gap-1"
                title="clipboard"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 3000);
                }}
              >
                <span className="text-base my-1">
                  <Clipboard size={18} />
                </span>
              </button>
            )}
          </div>
        </span>
      </div>
    </div>
  );
};

export default InstallCode;
