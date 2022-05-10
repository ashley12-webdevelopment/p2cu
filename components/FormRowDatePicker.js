import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const FormRowDateTimePicker = ({
  labelText,
  dateFormat,
  minDate,
  selectedDate,
  handleChange,
  required,
}) => {
  return (
    <div className={`form-row`}>
      <label className={`form-row-label`}>
        {labelText || `Date`}
        {required && <span className={`form-row-required`}>*</span>}
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        className={`form-input`}
        dateFormat={dateFormat || `dd/MM/yyyy h:mm aa`}
        showTimeSelect
        minDate={minDate}
      />
    </div>
  );
};

export default FormRowDateTimePicker;
