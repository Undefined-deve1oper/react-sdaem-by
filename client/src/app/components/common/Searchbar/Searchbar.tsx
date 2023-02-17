import React from "react";
import IconSvg from "../IconSvg";

interface ISearchbar {
    value: string;
    onChange: (event: any) => void;
}

const Searchbar: React.FC<ISearchbar> = ({ value, onChange }) => {
    return (
        <div className="searchbar">
            <input
                type="text"
                className="searchbar__input"
                placeholder="Search..."
                value={value}
                onChange={onChange}
            />
            <button className="searchbar__btn">
                <IconSvg name="search" svgClass="searchbar__icon" />
            </button>
        </div>
    );
};

export default Searchbar;
