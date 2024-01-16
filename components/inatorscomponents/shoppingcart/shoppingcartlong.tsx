import { Button } from '@/components/ui/button';
import React from 'react'

const Shoppingcartlong = () => {
  return (
    <div>
      <div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 divide-gray-300 shadow-md">
        <h2 className="text-2xl font-semibold">Order items</h2>
        <ul className="flex flex-col pt-4 space-y-2">
          <li className="flex items-start justify-between">
            <h3>
              Hard taco, chicken
              <span className="text-sm text-rose-600">x3</span>
            </h3>
            <div className="text-right">
              <span className="block">$7.50</span>
              <span className="text-sm ">à $2.50</span>
            </div>
          </li>
          <li className="flex items-start justify-between">
            <h3>
              Hard taco, beef
              <span className="text-sm text-rose-600">x3</span>
            </h3>
            <div className="text-right">
              <span className="block">$8.25</span>
              <span className="text-sm ">à $2.75</span>
            </div>
          </li>
          <li className="flex items-start justify-between">
            <h3>
              Curly fries
              <span className="text-sm text-rose-600">x1</span>
            </h3>
            <div className="text-right">
              <span className="block">$1.75</span>
              <span className="text-sm ">à $1.75</span>
            </div>
          </li>
          <li className="flex items-start justify-between">
            <h3>
              Large soda
              <span className="text-sm text-rose-600">x2</span>
            </h3>
            <div className="text-right">
              <span className="block">$4.00</span>
              <span className="text-sm ">à $2.00</span>
            </div>
          </li>
        </ul>
        <div className="pt-4 space-y-2">
          <div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$21.50</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-3 h-3 mt-1 fill-current text-rose-600"
              >
                <path d="M485.887,263.261,248,25.373A31.791,31.791,0,0,0,225.373,16H64A48.055,48.055,0,0,0,16,64V225.078A32.115,32.115,0,0,0,26.091,248.4L279.152,486.125a23.815,23.815,0,0,0,16.41,6.51q.447,0,.9-.017a23.828,23.828,0,0,0,16.79-7.734L486.581,296.479A23.941,23.941,0,0,0,485.887,263.261ZM295.171,457.269,48,225.078V64A16.019,16.019,0,0,1,64,48H225.373L457.834,280.462Z"></path>
                <path d="M148,96a52,52,0,1,0,52,52A52.059,52.059,0,0,0,148,96Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,148,168Z"></path>
              </svg>
              <span className="">Spend $20.00, get 20% off</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>-$4.30</span>
          </div>
        </div>
        <div className="pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Service fee</span>
            <span>$0.50</span>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <span>Delivery fee</span>
              <span>$4.00</span>
            </div>
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline text-rose-600"
            >
              How do our fees work?
            </a>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-semibold">$22.70</span>
            </div>
            <Button
              type="button"
              className="w-full py-2 font-semibold border rounded bg-rose-600 text-gray-50 "
            >
              Go to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoppingcartlong