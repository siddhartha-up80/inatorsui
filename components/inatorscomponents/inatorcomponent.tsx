//@ts-nocheck
"use client";

import React from "react";
import JsxParser from "react-jsx-parser";

const InatorComponent = ({ componentcode }: any) => {
  return (
    <div>
      <JsxParser jsx={componentcode} />
    </div>
  );
};

export default InatorComponent;
