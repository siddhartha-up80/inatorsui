//@ts-nocheck
"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeJSX = ({ code }) => {
  let codeString = code;

  const [copy, setCopy] = useState(false);

  return (
    <div className="bg-gray-500 rounded-md space-y-2 gap-2">
      <div className="min-w-[23rem] bg-[#3a404d] overflow-y-scroll overflow-x-hidden max-h-[70vh]">
        <div className="flex justify-between px-4 text-white text-xs items-center">
          <p className="text-sm">Example Code</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <span className="text-base my-1">
                <ClipboardCheck size={18} />
              </span>
              Copied
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
              Copy Code
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={atomOneDark}
          customStyle={{
            padding: "2rem",
          }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeJSX;
