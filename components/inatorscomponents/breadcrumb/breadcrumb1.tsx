import Link from "next/link";
import React from "react";

const Breadcrumb1 = () => {
  return (
    <div>
      <nav
        aria-label="breadcrumb"
        className="w-full p-4 shadow-md"
      >
        <ol className="flex h-8 space-x-2">
          <li className="flex items-center">
            <Link href="#" title="Back to homepage" className="hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 pr-1 text-gray-600"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <Link
              href="#"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Parent
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <Link
              href="#"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Parent
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current text-gray-400"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <Link
              href="#"
              className="flex items-center px-1 capitalize hover:no-underline cursor-default"
            >
              Current
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb1;
