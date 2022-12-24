import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const SelectField = ({
    label,
    name,
    value,
    defaultValue = "Выберите",
    onChange,
    options,
    error,
    ...rest
}) => {
    const optionsArray = options.map((option) => ({
        label: option.label,
        value:
            typeof option.value === "object"
                ? JSON.stringify(option.value)
                : option.value
    }));

    return (
        <div {...rest}>
            <label htmlFor={name}>{label}</label>
            <Select
                classNamePrefix="custom-select"
                closeMenuOnSelect={true}
                placeholder={defaultValue}
                options={optionsArray}
            />
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array,
    error: PropTypes.string
};

export default React.memo(SelectField);
