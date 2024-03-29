import React from "react";
import InputLayout from "../Layouts/InputLayout";
import Select from "react-select";
import { borderColorChange } from "../../../helpers/Validations/FormValidations";

const Dropdown: React.FC<any> = (props: any) => {
  const colourStyles = {
    control: (styles: any) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: data.value == "addNew" ? "orange" : "white",
        color: data.value == "addNew" ? "white" : "black"
      };
    }
  };

  const handleChange = (value: any, action: any) => {
    if (action.action == "remove-value") {
      props.onChange(
        props.base.for,
        props.values.filter(a => a != action.removedValue.label)
      );
    }

    if (value && props.isMulti) {
      props.onChange(
        props.base.for,
        value.map(c => c.label)
      );
    } else {
      if (value) {
        props.onChange(props.base.for, value.label);
        props.selectedValue && props.selectedValue(value);
      }
    }
  };

  const findValue = (options: any) => {
    return options.value == props.values || options.label == props.values;
  };

  const setDefaultValue = () => {
    const { options, values } = props;
    if (!options || !values) return;

    props.onCustomerChange && props.onCustomerChange(options.find(findValue));

    if (Array.isArray(props.values)) {
      return props.values.map(a => ({ values: a, label: a }));
    }

    return options.find(findValue);
  };

  // const handleBlur = () => {
  //   props.onBlur(props.base.for, true);
  // };

  return (
    <InputLayout
      touched={props.touched}
      errors={props.errors}
      values={props.values}
      title={props.base.title}
      required={props.base.required}
    >
      <Select
        backspaceRemovesValue={true}
        onFocus={() => props.runFuction && props.runFuction()}
        isClearable={props.isClearable}
        noOptionsMessage={() => "Aradığınız sonuç bulunamadı"}
        options={props.options}
        onChange={handleChange}
        isLoading={props.isLoading}
        loadingMessage={() => props.loadingMessage}
        // menuIsOpen={true}
        // onBlur={handleBlur}
        isMulti={props.isMulti}
        value={setDefaultValue()}
        className={`w-full h-12 shadow-base rounded-lg border ${borderColorChange(
          props
        )}`}
        placeholder={props.base.placeholder}
        classNamePrefix="med"
        styles={colourStyles}
      />
    </InputLayout>
  );
};

export default Dropdown;
