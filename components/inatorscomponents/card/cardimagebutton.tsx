import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'

const Cardimagebutton = () => {
  return (
    <div>
      <Card className="max-w-xs rounded-md shadow-md">
        <Image
          height={500}
          width={500}
          src="https://source.unsplash.com/random/500x500/?girl"
          alt=""
          className="object-cover object-top w-full rounded-t-md h-72 shadow-md"
        />
        <CardContent className="flex flex-col justify-between px-2 py-6 text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracki">Donec lectus leo</h2>
            <p className="text-gray-800">
              Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md">
            Read more
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Cardimagebutton