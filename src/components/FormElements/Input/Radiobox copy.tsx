import React from "react";
import InputLayout from "../Layouts/InputLayout";
import { Field } from "formik";
import { IFormValidation } from "src/helpers/Types/FormValidation";

const Radiobox = (props: IFormValidation) => {
  // console.log("radio", props);
  return (
    <InputLayout
      touched={props.touched}
      errors={props.errors}
      values={props.values}
      title={props.base.title}
      required={props.base.required}
    >
      <div className="h-12 flex w-full">
        {props.options.map((data: any, index: any) => {
          return (
            <label key={index} className="relative" tabIndex={index}>
              <Field
                id="gender"
                type={props.base.type ? props.base.type : "radio"}
                name={props.base.for}
                value={data.value}
                checked={props.values == data.value ? props.values : ""}
                className="med-radio-type"
              />
              <div className="h-12 flex px-4 rounded-lg border border-gray-300 shadow-base med-radio align-middle mr-4 focus:shadow-none  focus:outline-med-500">
                <div className="rounded-full flex my-auto w-4 h-4 bg-gray-300 mr-4 med-radio-span text-white">
                  <span className="rounded-full bg-white w-2 h-2 m-auto shadow" />
                </div>
                <span className="flex items-center text-gray-500">
                  {data.label}
                </span>
              </div>
            </label>
          );
        })}
      </div>
    </InputLayout>
  );
};

export default Radiobox;
