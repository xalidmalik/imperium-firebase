import React from "react";
import OutputLayout from "../Layouts/OutputLayout";

const CheckboxOutput = props => {
  return (
    <OutputLayout title={props.base.title}>
      <label className="h-12 flex w-full">
        <input
          type={props.base.type ? props.base.type : "checkbox"}
          name={props.base.for}
          value={props.data}
          checked={props.data}
          className="med-checkbox-type"
          disabled
        />
        <div className="h-12 flex px-4 w-full rounded-lg border border-color-gray-300 align-middle med-checkbox">
          <div className="rounded flex my-auto w-4 h-4 bg-gray-300 mr-4 med-checkbox-span text-white">
            <svg
              className="m-auto fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </svg>
          </div>
          <span className="flex items-center text-gray-500">
            {props.base.placeholder}
          </span>
        </div>
      </label>
    </OutputLayout>
  );
};

export default CheckboxOutput;
