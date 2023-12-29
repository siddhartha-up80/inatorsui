"use client"

import { Button } from '@/components/ui/button';
import React from 'react'

const InatorsNav = () => {
  return (
    <div className='max-w-7xl mx-auto container'>
      <section className="py-6 text-gray-900">
        <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h1 className="text-5xl font-bold leadi">Components</h1>
            <p className="text-lg">157 components in 41 categories</p>
          </div>
          <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="filter components"
                className="px-2 rounded-l-lg"
              />
              <Button
                type="button"
                className="font-semibold"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <Button>dsfs</Button>
        </div>
      </section>
    </div>
  );
}

export default InatorsNav