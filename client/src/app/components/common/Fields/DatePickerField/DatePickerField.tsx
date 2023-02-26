import React from "react";
import DatePicker from "react-datepicker";
import IconSvg from "../../IconSvg";

type DatePickerFieldType = {
    name: string;
    value: Date | undefined;
    minDate: Date;
    error?: string | null;
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
                    selected={value ? new Date(value) : new Date()}
                    onChange={handleChange}
                    showYearDropdown
                    minDate={minDate || Date.now()}
                    dateFormatCalendar="MMMM"
                    yearDropdownItemNumber={68}
                    scrollableYearDropdown
                    wrapperClassName={
                        className || "text-field login-form__item"
                    }
                    placeholderText={label}
                />
                <IconSvg name="date" width="14" height="14" />
            </div>
            {error && <p className="text-field__error error">{error}</p>}
        </div>
    );
};

export default DatePickerField;
