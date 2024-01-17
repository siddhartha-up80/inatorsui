import Link from 'next/link';
import React from 'react'

const Sidebarbasic = () => {
  return (
    <div className='min-h-[90vh]'>
      <aside className="w-full p-6 sm:w-60 shadow-md absolute left-0 top-0 h-full">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase text-gray-600">
              Getting Started
            </h2>
            <div className="flex flex-col space-y-1">
              <Link rel="noopener noreferrer" href="#">
                Installation
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Plugins
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Migrations
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Appearance
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Mamba UI
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase text-gray-600">
              Dashboard
            </h2>
            <div className="flex flex-col space-y-1">
              <Link rel="noopener noreferrer" href="#">
                Header
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Drawer
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Page Title
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Menus
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Sidebar
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Footer
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase text-gray-600">
              Pages
            </h2>
            <div className="flex flex-col space-y-1">
              <Link rel="noopener noreferrer" href="#">
                Homepage
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Users
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Tools
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Settings
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase text-gray-600">
              Misc
            </h2>
            <div className="flex flex-col space-y-1">
              <Link rel="noopener noreferrer" href="#">
                Tutorials
              </Link>
              <Link rel="noopener noreferrer" href="#">
                Changelog
              </Link>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebarbasic