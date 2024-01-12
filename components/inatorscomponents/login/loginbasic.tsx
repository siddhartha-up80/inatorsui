import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react'

const Loginbasic = () => {
  return (
    <div>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 shadow-md">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm ">Sign in to access your account</p>
        </div>
        <form action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <Label htmlFor="password" className="text-sm">
                  Password
                </Label>
                <Link href="/forget" className="text-xs hover:underline ">
                  Forgot password?
                </Link>
              </div>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 "
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <Button type="button" className="w-full px-8 py-3 font-semibold">
                Sign in
              </Button>
            </div>
            <p className="px-6 text-sm text-center ">
              Don&apos;t have an account yet?
              <Link href="/signup" className="hover:underline text-rose-600">
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginbasic