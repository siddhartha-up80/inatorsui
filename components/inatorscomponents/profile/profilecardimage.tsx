import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Profilecardimage = () => {
  return (
    <div>
      <Card className="flex flex-col max-w-md shadow-md">
        <CardHeader>
          <Image
            height={800}
            width={800}
            src="https://source.unsplash.com/800x800/?girl=2"
            alt=""
            className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square"
          />
          <h2 className="text-xl font-semibold">Leroy Jenkins</h2>
          <span className="block text-sm">CTO of Company Inc.</span>
        </CardHeader>

        <CardContent>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profilecardimage;
