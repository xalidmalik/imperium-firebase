import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputLayout from "../Layouts/InputLayout";

class DateTimePicker extends Component {
  //   handleChange(value) {
  //     this.props.onChange && this.props.onChange(this.props.base.for, value);
  //     this.props.selectedDate && this.props.selectedDate(value);
  //   }

  render() {
    // const {
    //   Label,
    //   LabelFor,
    //   showTimeSelect = false,
    //   dateFormat,
    //   Month,
    //   Year,
    //   Rez,
    //   CurrentValue,
    //   minDate,
    //   maxDate,
    //   disabled = false,
    //   selectsStart = false,
    //   selectsEnd = false,
    //   startDate,
    //   endDate
    // } = this.props;

    return (
      <> </>
      //   <InputLayout
      //     touched={this.props.touched}
      //     errors={this.props.errors}
      //     values={this.props.values}
      //     title={this.props.base.title}
      //     required={this.props.base.required}
      //   >
      //     <DatePicker
      //       showTimeSelect={true}
      //       selected={this.props.values}
      //       dateFormat={"MM.DD.YYYY"}
      //       onChange={value => this.handleChange(value)}
      //       showTimeSelect={showTimeSelect}
      //       showMonthDropdown={Month}
      //       showYearDropdown={Year}
      //       timeFormat="HH:mm"
      //       timeCaption="Saat"
      //       value={this.props.values}
      //       required
      //       inline
      //       minDate={minDate}
      //       maxDate={maxDate}
      //       startDate={startDate}
      //       endDate={endDate}
      //       disabled={disabled}
      //     />
      //   </InputLayout>
    );
  }
}
export default DateTimePicker;
