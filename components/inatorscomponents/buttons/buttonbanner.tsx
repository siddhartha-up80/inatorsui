import React from 'react'
import { Button } from '../../ui/button';

const ButtonBanner = () => {
  return (
    <div>
      <Button
        type="button"
        className="relative pr-8 overflow-hidden font-semibold"
      >
        With banner
        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracki text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-rose-600">
          New
        </span>
      </Button>
    </div>
  );
}

export default ButtonBanner