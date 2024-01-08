import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'

const Inputurl = () => {
  return (
    <div>
      <fieldset className="space-y-1 w-max mx-auto">
        <Label  className="block text-sm font-medium">
          Website
        </Label>
        <div className="flex">
          <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md bg-black text-white py-2">
            https://
          </span>
          <Input
            type="text"
            name="url"
            id="url"
            placeholder="Enter your url"
            className="flex flex-1 border sm:text-sm rounded-r-md py-2"
          />
        </div>
      </fieldset>
    </div>
  );
}

export default Inputurl