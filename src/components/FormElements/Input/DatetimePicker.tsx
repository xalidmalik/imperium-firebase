import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputLayout from "../Layouts/InputLayout";

const DatetimePicker: React.FC = (props: any) => {
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
    endDate
  } = props;
  const handleChange = (value: any) => {
    props.onChange && props.onChange(props.base.for, value);
    props.selectedDate && props.selectedDate(value);
  };

  return (
    <InputLayout
      touched={props.touched}
      errors={props.errors}
      values={props.values}
      title={props.base.title}
      required={props.base.required}
    >
      <DatePicker
        selected={props.values}
        dateFormat={"MM.DD.YYYY"}
        onChange={value => handleChange(value)}
        showTimeSelect={showTimeSelect}
        showMonthDropdown={Month}
        showYearDropdown={Year}
        timeFormat="HH:mm"
        timeCaption="Saat"
        value={props.values}
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
