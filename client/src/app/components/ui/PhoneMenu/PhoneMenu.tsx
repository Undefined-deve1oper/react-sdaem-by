import React from "react";
import { IHeaderNavData } from "../../../types/interfaces";
import { IListDropdown } from "../../common/Dropdown/DropdownList/DropdownList";
import NavList from "../../common/NavList";

interface IPhoneMenu {
    open: boolean;
    data: IHeaderNavData[] & IListDropdown[];
}

const PhoneMenu: React.FC<IPhoneMenu> = ({ open, data }) => {
    return (
        <div className={"header__menu mobile-menu" + (open ? " _active" : "")}>
            <NavList
                routes={data}
                className={"mobile-menu__list"}
                direction="column"
            />
        </div>
    );
};

export default PhoneMenu;
