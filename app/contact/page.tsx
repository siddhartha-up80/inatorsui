"use client"


import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from "react";

const Page = () => {
  return (
    <>
      <div className="h-screen w-screen items-center flex justify-center flex-col md:max-w-[40vw] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-loose tracking-tight sm:text-4xl">
            Contact us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            If you have requests, suggestions or any other feedback, please
            leave a message below and we'll get back to you as soon as possible.
          </p>
        </div>

        <section className="w-full mt-10">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <Label
                htmlFor="name"
                className="block text-sm font-medium leading-5"
              >
                Name (optional)
                <div className="mt-1 rounded-md shadow-sm">
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full px-4 py-3 rounded-md shadow-sm  "
                  />
                </div>
              </Label>
            </div>
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium leading-5"
              >
                Email (optional)
                <Input
                  id="email"
                  type="email"
                  name="email"
                  className="block w-full px-4 py-3 mt-1 rounded-md shadow-sm  "
                />
              </Label>
            </div>
            <div>
              <Label
                htmlFor="twitter"
                className="block text-sm font-medium leading-5"
              >
                Twitter handle (optional)
                <Input
                  id="twitter"
                  type="text"
                  name="twitter"
                  className="block w-full px-4 py-3 mt-1 rounded-md shadow-sm  "
                />
              </Label>
            </div>
            <div className="sm:col-span-2">
              <Label
                htmlFor="category"
                className="block text-sm font-medium leading-5"
              >
                Category
                <select
                  id="category"
                  name="category"
                  aria-Label="Category"
                  className="block w-full px-4 py-3 mt-1 rounded-md shadow-sm border  "
                >
                  <option>New component idea</option>
                  <option>Feature request</option>
                  <option>Feedback</option>
                  <option>Bug report</option>
                  <option>Other</option>
                </select>
              </Label>
            </div>
            <div className="sm:col-span-2">
              <Label
                htmlFor="message"
                className="block text-sm font-medium leading-5"
              >
                Message
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-3 mt-1 shadow-sm"
                  defaultValue={""}
                />
              </Label>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="w-full font-semibold">
                Send message
              </Button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Page;
