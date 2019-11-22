import React, { FC } from "react";
import {
  bgColorChange,
  borderColorChange,
  errorsChange,
  textColorChange
} from "helpers/Validations/FormValidations";
import { IFormValidation } from "helpers/Types/FormValidation";

const InputLayout: FC<IFormValidation> = props => {
  return (
    <div className="flex mb-4">
      <div className="w-2/6 max-h-full">
        <h5 className="font-bold leading-none text-lg">{`${props.title} :`}</h5>
        {props.required ? (
          <small
            className={`text-xs mt-1 flex leading-tight ${textColorChange(
              props
            )} relative items-center`}
          >
            <span
              className={`rounded-full ${bgColorChange(
                props
              )}  w-3 h-3 m-auto shadow absolute`}
            />
            <span className="text-xs pl-5">{errorsChange(props)}</span>
          </small>
        ) : (
          ""
        )}
      </div>
      <div className="w-4/6 flex">{props.children}</div>
    </div>
  );
};

export default InputLayout;
