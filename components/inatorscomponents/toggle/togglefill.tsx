import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'

const Togglefill = () => {
  return (
    <div>
      <Label
        className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
      >
        <span>This</span>
        <span className="relative">
          <Input id="Toggle2" type="checkbox" className="hidden peer" title='Toggle'/>
          <div className="w-10 h-4 rounded-full shadow bg-gray-400 peer-checked:bg-rose-600"></div>
          <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-rose-600"></div>
        </span>
        <span>That</span>
      </Label>
    </div>
  );
}

export default Togglefill