import React from "react";
import Button from "../Button";
import { TextField } from "../Fields";
import IconSvg from "../IconSvg";

interface ISearchbar {
    label: string;
    value: string;
    error?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbar: React.FC<ISearchbar> = ({ label, value, onChange, error }) => {
    return (
        <div className="searchbar">
            <TextField
                className="searchbar__input"
                name={"search"}
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
