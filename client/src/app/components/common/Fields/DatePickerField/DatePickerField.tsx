import React from "react";
import DatePicker from "react-datepicker";

type DatePickerFieldType = {
    value: number | Date;
};

const DatePickerField: React.FC<DatePickerFieldType> = ({ value }) => {
    return (
        <DatePicker
            selected={value}
            onChange={(date: any) => console.log(date)}
        />
    );
};

export default DatePickerField;
