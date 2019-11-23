import React from "react";
import OutputLayout from "../Layouts/OutputLayout";

const FieldOutput = (props: any) => {
  return (
    <OutputLayout title={props.base.title}>
      <span
        className={`h-12 px-4 w-full rounded-lg border bg-gray-200 shadow-base items-center flex`}
      >
        {props.data}
      </span>
    </OutputLayout>
  );
};

export default FieldOutput;
