import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

const Cardimage = () => {
  return (
    <Card>
      <CardContent className="max-w-xs p-6 rounded-md shadow-md">
        <Image
          height={500}
          width={500}
          src="https://source.unsplash.com/random/300x300/?girl"
          alt=""
          className="object-cover object-top w-full rounded-md h-72 shadow-sm"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-tighter uppercase text-rose-600">
            Quisque
          </span>
          <h2 className="text-xl font-semibold tracki">Nam maximus purus</h2>
        </div>
        <p className="">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </CardContent>
    </Card>
  );
};

export default Cardimage;
