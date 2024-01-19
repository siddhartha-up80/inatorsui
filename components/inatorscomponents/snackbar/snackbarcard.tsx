"use client";

import { Button } from "@/components/ui/button";
import React, { lazy } from "react";
import { toast } from "sonner";

const Snackbarcard = () => {
  return (
    <div>
      <Button
        variant={"outline"}
        onClick={() =>
          toast(
            <div className="flex gap-6 rounded-lg overflow-hidden divide-x max-w-2xl divide-gray-300">
              <div className="flex flex-1 flex-col p-4">
                <span className="text-2xl">Success</span>
                <span className="text-xs">
                  Vitae nulla eligendi dignissimos culpa doloribus.
                </span>
              </div>
            </div>
          )
        }
      >
        Toast Basic Card
      </Button>
    </div>
  );
};

export default Snackbarcard;
