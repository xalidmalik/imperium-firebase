import { IFormValidation } from "../Types/FormValidation";

export const textColorChange = (props: IFormValidation) => {
  if (
    (props.touched && !props.errors && props.values) ||
    (!props.touched && !props.errors && props.values)
  ) {
    return "text-green-500";
  } else if (
    (props.touched && props.errors && !props.values) ||
    (props.touched && props.errors && props.values)
  ) {
    return "text-red-500";
  } else {
    return "text-gray-500";
  }
};

export const bgColorChange = (props: IFormValidation) => {
  if (
    (props.touched && !props.errors && props.values) ||
    (!props.touched && !props.errors && props.values)
  ) {
    return "bg-green-500";
  } else if (
    (props.touched && props.errors && !props.values) ||
    (props.touched && props.errors && props.values)
  ) {
    return "bg-red-500";
  } else {
    return "bg-gray-500";
  }
};
export const errorsChange = (props: IFormValidation) => {
  if (
    (props.touched && !props.errors && props.values) ||
    (!props.touched && !props.errors && props.values)
  ) {
    return "Başarılı";
  }
  // else if (touched && !errors && !values) {
  //   return errors ? errors : "Bu alan zorunludur.";
  // }
  else {
    return props.errors || "Bu alan zorunludur.";
  }
};

export const borderColorChange = (props: IFormValidation) => {
  if (
    (props.touched && !props.errors && props.values) ||
    (!props.touched && !props.errors && props.values)
  ) {
    return "border-green-500";
  } else if (
    (props.touched && props.errors && !props.values) ||
    (props.touched && props.errors && props.values)
  ) {
    return "border-red-500";
  } else {
    return "border-gray-300";
  }
};
