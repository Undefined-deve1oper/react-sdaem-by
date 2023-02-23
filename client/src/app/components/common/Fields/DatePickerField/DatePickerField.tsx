import React from "react";
import DatePicker from "react-datepicker";
import IconSvg from "../../IconSvg";

type DatePickerFieldType = {
    name: string;
    value: Date;
    minDate: Date;
    error: string | null;
    className?: string;
    title?: string;
    label?: string;
    onChange: (event: any) => void;
};

const DatePickerField: React.FC<DatePickerFieldType> = ({
    name,
    value,
    minDate,
    error,
    onChange,
    className,
    label,
    title
}) => {
    const handleChange = (data: Date) => {
        const fakeEvent = {
            target: {
                name: name,
                value: data.toString() === "Invalid Date" || !data ? "" : data
            }
        };

        onChange(fakeEvent);
    };

    return (
        <div className="date-picker">
            {title && (
                <h3 className="date-picker__title form-title">{title}</h3>
            )}
            <div className="date-picker__content">
                <DatePicker
                    selected={new Date(value)}
                    onChange={handleChange}
                    showYearDropdown
                    minDate={minDate || Date.now()}
                    dateFormatCalendar="dd-MM-yyyy"
                    yearDropdownItemNumber={68}
                    scrollableYearDropdown
                    wrapperClassName={
                        className || "text-field login-form__item"
                    }
                    placeholderText={label}
                />
                <IconSvg name="date" />
            </div>
            {error && <p className="text-field__error error">{error}</p>}
        </div>
    );
};

export default DatePickerField;
