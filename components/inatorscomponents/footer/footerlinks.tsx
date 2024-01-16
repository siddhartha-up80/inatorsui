import Link from 'next/link';
import React from 'react'

const Footerlinks = () => {
  return (
    <div className="min-w-[80vw]">
      <footer className="p-6 shadow-md">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Getting started</h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <Link target="_blank" href="#">
                Installation
              </Link>
              <Link target="_blank" href="#">
                Release Notes
              </Link>
              <Link target="_blank" href="#">
                Upgrade Guide
              </Link>
              <Link target="_blank" href="#">
                Using with Preprocessors
              </Link>
              <Link target="_blank" href="#">
                Optimizing for Production
              </Link>
              <Link target="_blank" href="#">
                Browser Support
              </Link>
              <Link target="_blank" href="#">
                IntelliSense
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Core Concepts</h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <Link target="_blank" href="#">
                Utility-First
              </Link>
              <Link target="_blank" href="#">
                Responsive Design
              </Link>
              <Link target="_blank" href="#">
                Hover, Focus, &amp; Other States
              </Link>
              <Link target="_blank" href="#">
                Dark Mode
              </Link>
              <Link target="_blank" href="#">
                Adding Base Styles
              </Link>
              <Link target="_blank" href="#">
                Extracting Components
              </Link>
              <Link target="_blank" href="#">
                Adding New Utilities
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Customization</h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <Link target="_blank" href="#">
                Configuration
              </Link>
              <Link target="_blank" href="#">
                Theme Configuration
              </Link>
              <Link target="_blank" href="#">
                Breakpoints
              </Link>
              <Link target="_blank" href="#">
                Customizing Colors
              </Link>
              <Link target="_blank" href="#">
                Customizing Spacing
              </Link>
              <Link target="_blank" href="#">
                Configuring Variants
              </Link>
              <Link target="_blank" href="#">
                Plugins
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Community</h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <Link target="_blank" href="#">
                GitHub
              </Link>
              <Link target="_blank" href="#">
                Discord
              </Link>
              <Link target="_blank" href="#">
                Twitter
              </Link>
              <Link target="_blank" href="#">
                YouTube
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="">© Copyright 1986. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default Footerlinks