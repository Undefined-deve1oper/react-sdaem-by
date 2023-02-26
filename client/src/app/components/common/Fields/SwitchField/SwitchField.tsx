import React from "react";

type SwitchFieldType = {
    name: string;
    label: string;
    value: boolean;
    onChange: (event: any) => void;
};

const SwitchField: React.FC<SwitchFieldType> = ({
    name,
    value,
    label,
    onChange,
    ...rest
}) => {
    const handleChange = ({ target }: any) => {
        onChange({ target: { name, value: target.checked } });
    };

    return (
        <div className="switch-wrapper">
            <input
                id={name}
                name={name}
                checked={value}
                type="checkbox"
                className="switch"
                onChange={handleChange}
                {...rest}
            />
            <label htmlFor={name} className={"switch-styled"}></label>
            <span>{label}</span>
        </div>
    );
};

export default React.memo(SwitchField);
