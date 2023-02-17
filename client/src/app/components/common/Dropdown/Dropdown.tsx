import React from "react";
import { DropdownList } from "./DropdownList/DropdownList";
import { IListDropdown } from "./DropdownList/DropdownList";

interface IPropsDropdown {
    data: IListDropdown[];
}
const Dropdown: React.FC<IPropsDropdown> = ({ data }) => {
    return (
        <div className="menu__list">
            {data.map((menu) => {
                return <DropdownList key={menu.title} menu={menu} />;
            })}
        </div>
    );
};

export default Dropdown;
