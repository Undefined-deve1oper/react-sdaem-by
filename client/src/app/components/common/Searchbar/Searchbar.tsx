import React from "react";
import Button from "../Button";
import { TextField } from "../Fields";
import { TextFieldTypes } from "../Fields/TextField/TextField";
import IconSvg from "../IconSvg";

const Searchbar: React.FC<TextFieldTypes> = ({
    label,
    type,
    name,
    value,
    onChange,
    error
}) => {
    return (
        <div className="searchbar">
            <TextField
                className="searchbar__input"
                name={name}
                type={type}
                onChange={onChange}
                value={value}
                placeholder={label}
                error={error}
            />
            <Button className="searchbar__btn">
                <IconSvg name="search" svgClass="searchbar__icon" />
            </Button>
        </div>
    );
};

export default React.memo(Searchbar);
