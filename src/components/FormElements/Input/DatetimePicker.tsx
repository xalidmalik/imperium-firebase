import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputLayout from "../Layouts/InputLayout";

const DatetimePicker: React.FC<any> = (props: any) => {
  const handleChange = (value: any) => {
    props.onChange && props.onChange(props.base.for, value);
    props.selectedDate && props.selectedDate(value);
  };
  const {
    Label,
    LabelFor,
    showTimeSelect = false,
    dateFormat,
    Month,
    Year,
    Rez,
    CurrentValue,
    minDate,
    maxDate,
    disabled = false,
    selectsStart = false,
    selectsEnd = false,
    startDate,
    endDate,
    base,
    touched,
    errors,
    values
  } = props;

  return (
    <InputLayout
      touched={touched}
      errors={errors}
      values={values}
      title={base.title}
      required={base.required}
    >
      <DatePicker
        selected={values}
        dateFormat={"MM.DD.YYYY"}
        onChange={value => handleChange(value)}
        showTimeSelect={showTimeSelect}
        showMonthDropdown={Month}
        showYearDropdown={Year}
        timeFormat="HH:mm"
        timeCaption="Saat"
        value={values}
        required
        inline
        minDate={minDate}
        maxDate={maxDate}
        startDate={startDate}
        endDate={endDate}
        disabled={disabled}
      />
    </InputLayout>
  );
};

export default DatetimePicker;
