import React from "react";
import InputLayout from "../Layouts/InputLayout";
import { Field } from "formik";
import { borderColorChange } from "../../../helpers/Validations/FormValidations";
import MaskedInput from "react-text-mask";
import { IFormValidation } from "src/helpers/Types/FormValidation";

const Fields = (props: IFormValidation) => {
  return (
    <InputLayout
      touched={props.touched}
      errors={props.errors}
      values={props.values}
      title={props.base.title}
      required={props.base.required}
    >
      {props.base.mask ? (
        <Field
          name={props.base.for}
          render={({ field }: any) => (
            <MaskedInput
              {...field}
              mask={props.base.masked}
              placeholder={props.base.placeholder}
              type={props.base.type ? props.base.type : "text"}
              className={`h-12 px-4 w-full rounded-lg border ${borderColorChange(
                props
              )} shadow-base focus:shadow-none focus:outline-none`}
            />
          )}
        />
      ) : (
        <Field
          type={props.base.type ? props.base.type : "text"}
          name={props.base.for}
          className={`h-12 px-4 w-full rounded-lg border ${borderColorChange(
            props
          )} shadow-base focus:shadow-none focus:outline-none`}
          placeholder={props.base.placeholder}
        />
      )}
    </InputLayout>
  );
};

export default Fields;
