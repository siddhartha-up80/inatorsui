import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Inputbasic = () => {
  return (
    <div>
      <form action="" className="w-max mx-auto">
        <Label>Name</Label>
        <Input type="text" placeholder="Enter your name" />
      </form>
    </div>
  );
};

export default Inputbasic;
