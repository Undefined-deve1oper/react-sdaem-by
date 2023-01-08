import React from "react";

type SearchButtonType = {
    styleType?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SearchButton: React.FC<SearchButtonType> = ({
    styleType = "default",
    type = "submit",
    children
}) => {
    const getClassName = (style: string) => {
        switch (style) {
            case "submit":
                return "search-panel__submit";
            default:
                return "search-panel__button";
        }
    };

    return (
        <div className="search-panel__item">
            <button type={type} className={getClassName(styleType)}>
                {children}
            </button>
        </div>
    );
};

export default SearchButton;
