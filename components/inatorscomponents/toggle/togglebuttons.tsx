import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'

const Togglebuttons = () => {
  return (
    <div>
      <Label
        className="inline-flex items-center p-2 rounded-md cursor-pointer text-white"
      >
        <Input id="Toggle3" type="checkbox" className="hidden peer " />
        <span className="px-4 py-3 rounded-l-md bg-rose-600 peer-checked:bg-black">
          Monthly
        </span>
        <span className="px-4 py-3 rounded-r-md bg-black peer-checked:bg-rose-600">
          Annually
        </span>
      </Label>
    </div>
  );
}

export default Togglebuttons