import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import React from 'react'

const Formpersonal = () => {
  return (
    <div>
      <section className="p-6 shadow-md">
        <form
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <Card className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="firstname" className="text-sm">
                  First name
                </Label>
                <Input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="lastname" className="text-sm">
                  Last name
                </Label>
                <Input
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 "
                />
              </div>
              <div className="col-span-full">
                <Label htmlFor="address" className="text-sm">
                  Address
                </Label>
                <Input
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 "
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <Label htmlFor="city" className="text-sm">
                  City
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 "
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <Label htmlFor="state" className="text-sm">
                  State / Province
                </Label>
                <Input
                  id="state"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 "
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <Label htmlFor="zip" className="text-sm">
                  ZIP / Postal
                </Label>
                <Input
                  id="zip"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 "
                />
              </div>
            </div>
          </Card>
          <Card className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Profile</p>
              <p className="text-xs">Adipisci fuga autem eum!</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="username" className="text-sm">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <Label htmlFor="website" className="text-sm">
                  Website
                </Label>
                <Input
                  id="website"
                  type="text"
                  placeholder="https://"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 "
                />
              </div>
              <div className="col-span-full">
                <Label htmlFor="bio" className="text-sm">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 "
                  defaultValue={""}
                />
              </div>
              <div className="col-span-full">
                <Label htmlFor="bio" className="text-sm">
                  Photo
                </Label>
                <div className="flex items-center space-x-2">
                  <Image
                    height={500}
                    width={500}
                    src="https://source.unsplash.com/30x30/?girl"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover object-top"
                  />
                  <Button
                    type="button"
                    className="px-4 py-2"
                  >
                    Change
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </form>
      </section>
    </div>
  );
}

export default Formpersonal