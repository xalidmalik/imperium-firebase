import React from "react";
import InputLayout from "../Layouts/InputLayout";
import Select from "react-select";
import { borderColorChange } from "../../../helpers/Validations/FormValidations";

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: data.value == "addNew" ? "orange" : "white",
      color: data.value == "addNew" ? "white" : "black"
    };
  }
};

class DropDown extends React.Component {
  handleChange = value => {
    this.props.onChange(this.props.base.for, value);
    this.props.selectedValue && this.props.selectedValue(value);
  };

  findValue = options => {
    return (
      options.value == this.props.values || options.label == this.props.values
    );
  };

  setDefaultValue = () => {
    const { options, values } = this.props;
    if (!options || !values) return;

    this.props.onCustomerChange &&
      this.props.onCustomerChange(options.find(this.findValue));

    return options.find(this.findValue);
  };

  // const handleBlur = () => {
  //   props.onBlur(props.base.for, true);
  // };
  render() {
    return (
      <InputLayout
        touched={this.props.touched}
        errors={this.props.errors}
        values={this.props.values}
        title={this.props.base.title}
        required={this.props.base.required}
      >
        <Select
          onFocus={() => this.props.runFuction && this.props.runFuction()}
          isClearable={this.props.isClearable}
          noOptionsMessage={() => "Aradığınız sonuç bulunamadı"}
          options={this.props.options}
          onChange={this.handleChange}
          isLoading={this.props.isLoading}
          loadingMessage={() => this.props.loadingMessage}
          // menuIsOpen={true}
          // onBlur={handleBlur}
          isMulti={this.props.isMulti}
          value={this.setDefaultValue()}
          className={`w-full h-12 shadow-base rounded-lg border ${borderColorChange(
            this.props
          )}`}
          placeholder={this.props.base.placeholder}
          classNamePrefix="med"
          styles={colourStyles}
        />
      </InputLayout>
    );
  }
}

export default DropDown;
