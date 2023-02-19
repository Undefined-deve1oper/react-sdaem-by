import React from "react";

type RadioGroupType = {
    name: string;
    label?: string;
    items: Array<{ id: string; title: string }>;
    value: string;
    onChange: (target: any) => void;
};

const RadioGroupField: React.FC<RadioGroupType> = ({
    name,
    label,
    value,
    onChange,
    items,
    ...rest
}) => {
    return (
        <div className="radio-group">
            <label className="radio-group__label">{label}</label>
            <div className="radio-group__content">
                {items.map((item) => (
                    <div
                        key={item.id + "_" + item.title}
                        className="radio-group__item"
                    >
                        <input
                            className=""
                            type="radio"
                            name={name}
                            id={item.id + "_" + item.title}
                            checked={item.id === value}
                            value={item.id}
                            onChange={onChange}
                            {...rest}
                        />
                        <label
                            className="radio-group__link"
                            htmlFor={item.id + "_" + item.title}
                        >
                            {item.title}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioGroupField;
