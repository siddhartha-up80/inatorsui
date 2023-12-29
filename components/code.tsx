//@ts-nocheck
"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = () => {
  const codeString = `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <div>lorem30fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
      </body>
      
    </html>
  )
}
`;

  const [copy, setCopy] = useState(false);

  return (
    <div className="bg-gray-500 rounded-md">
      <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-y-scroll overflow-x-hidden max-h-[70vh]">
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

export default Code;