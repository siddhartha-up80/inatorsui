//@ts-nocheck
"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const InstallCode = ({ installation }) => {
  const codeString = installation;

  const [copy, setCopy] = useState(false);

  return (
    <div className=" rounded-md">
      <div className="min-w-[25rem]  overflow-y-hidden overflow-x-hidden max-h-[70vh] justify-between flex">
        <span className="flex items-center p-1">
          <span className="relative left-2 pr-2">$</span>
          <SyntaxHighlighter
            language="bash"
            //   style={atomOneDark}
              customStyle={{
                background: ""
              }}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </span>
        <div className="flex justify-between px-4 text-xs items-center">
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <span className="text-base my-1">
                <ClipboardCheck size={18} />
              </span>
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
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
      </div>
    </div>
  );
};

export default InstallCode;
