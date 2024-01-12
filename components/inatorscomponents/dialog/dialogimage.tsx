import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Dialogimage = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>View Image</Button>
        </DialogTrigger>
        <DialogContent>
          <div className="flex flex-col gap-4">
            <DialogHeader className="flex items-center gap-2 text-xl font-semibold leading-relaxed">
              <DialogTitle>Necessitatibus dolores quasi quae?</DialogTitle>
              <Image
                height={300}
                width={300}
                src="https://source.unsplash.com/random/1080x1920/?girl=1"
                className="w-full object-cover object-center aspect-video"
                alt="Image"
              />
            </DialogHeader>
            <DialogDescription className="flex-1">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </DialogDescription>
            <div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
              <DialogTrigger asChild>
                <Button
                  type="submit"
                  className="px-6 py-2 rounded-sm shadow-sm w-full"
                >
                  Confirm
                </Button>
              </DialogTrigger>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dialogimage;
