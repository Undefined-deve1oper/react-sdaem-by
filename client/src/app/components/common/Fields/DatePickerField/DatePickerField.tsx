import React from "react";
import DatePicker from "react-datepicker";
import IconSvg from "../../IconSvg";

type DatePickerFieldType = {
    name: string;
    value: Date;
    minDate: Date;
    error: string | null;
    onChange: (event: any) => void;
};

const DatePickerField: React.FC<DatePickerFieldType> = ({
    name,
    value,
    minDate,
    error,
    onChange
}) => {
    const handleChange = (data: Date) => {
        const fakeEvent = {
            target: {
                name: name,
                value: data.toString() === "Invalid Date" || !data ? "" : data
            }
        };

        onChange(fakeEvent);
        // onChange({ target: { name, value: data } });
    };

    return (
        <div className="date-picker">
            <div className="date-picker__content">
                <DatePicker
                    selected={value}
                    onChange={handleChange}
                    showYearDropdown
                    minDate={minDate || Date.now()}
                    dateFormatCalendar="MMMM"
                    yearDropdownItemNumber={68}
                    scrollableYearDropdown
                    wrapperClassName={"text-field login-form__item"}
                />
                <IconSvg name="date" />
            </div>
            {error && <p className="text-field__error error">{error}</p>}
        </div>
    );
};

export default DatePickerField;
