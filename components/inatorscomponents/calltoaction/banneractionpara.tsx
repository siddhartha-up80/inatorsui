import { Button } from '@/components/ui/button';
import React from 'react'

const Banneractionpara = () => {
  return (
    <div className='w-full'>
      <section className="py-6 shadow-md">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leadi text-center">
            Something totally different
          </h1>
          <p className="pt-2 pb-8 text-xl font-medium text-center">
            Eum omnis itaque harum at quae sequi unde similique alias asperiores
            totam. Ex cumque maxime harum doloremque, tempore nam fugiat
            aspernatur rerum ipsa unde est modi commodi molestias maiores
            eveniet eius esse asperiores neque dicta ea quisquam? Excepturi
            sapiente officiis explicabo ab?
          </p>
          <Button className="px-8 py-3 text-lg font-semibold rounded">
            Learn more
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Banneractionpara