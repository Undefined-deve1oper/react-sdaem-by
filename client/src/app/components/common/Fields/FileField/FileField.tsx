import React from "react";
import IconSvg from "../../IconSvg";

export type FileFieldTypes = {
    label?: string;
    name: string;
    error?: string | null;
    autoFocus?: boolean;
    onChange?: (target: any) => void;
    className?: string;
};

const FileField: React.FC<FileFieldTypes> = ({
    label,
    name,
    onChange,
    error = null,
    className = "",
    autoFocus
}) => {
    return (
        <div className="file-field">
            <div className="file-field__content">
                <input
                    id={name}
                    name={name}
                    type="file"
                    accept="image/*"
                    onChange={onChange}
                    autoFocus={autoFocus}
                    className={className + " file-field__item"}
                />
                <label htmlFor={name} className="file-field__button">
                    <span className="file-field__icon">
                        <IconSvg name="photo" />
                    </span>
                    <span className="file-field__text">{label}</span>
                </label>
            </div>
            {error && <p className="text-field__error error">{error}</p>}
        </div>
    );
};

export default FileField;
