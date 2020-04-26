import React from "react";

const OutputLayout = (props: any) => {
  return (
    <div className="flex mb-4">
      <div className="w-2/6 max-h-full items-center flex">
        <h5 className=" text-sm font-bold leading-none">{`${props.title} :`}</h5>
        {/* <small
          className={`text-xs mt-1 flex leading-tight ${textColorChange(
            props.touched,
            props.errors,
            props.values
          )} relative items-center`}
        >
          <span
            className={`rounded-full ${bgColorChange(
              props.touched,
              props.errors,
              props.values
            )}  w-3 h-3 m-auto shadow absolute`}
          />
          <span className="text-xs pl-5">
            {errorsChange(props.touched, props.errors, props.values)}
          </span>
        </small> */}
      </div>
      <div className="w-4/6 flex">{props.children}</div>
    </div>
  );
};

export default OutputLayout;
