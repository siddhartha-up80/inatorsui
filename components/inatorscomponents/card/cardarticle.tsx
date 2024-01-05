import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react'

const Cardarticle = () => {
  return (
    <div>
      <Card className="max-w-lg pb-4 shadow-md">
        <CardHeader>
          <div className="flex justify-between border-bottom">
            <div className="flex items-center">
              <Link href="#" className="mb-0 capitalize ">
                Photography
              </Link>
            </div>
            <Link href="#">See All</Link>
          </div>
        </CardHeader>

        <div className="space-y-4">
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <img
                src="https://source.unsplash.com/random/480x360/?girl,portrait"
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 "
              />
              <div className="flex items-center text-xs">
                <span>6 min ago</span>
              </div>
            </div>
            <Link href="#" className="block">
              <h3 className="text-xl font-semibold text-rose-600">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </Link>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default Cardarticle