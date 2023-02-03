import React from "react";
import { useRequest } from "../../../hooks/useRequest";
import { api } from "../../../types/enums";
import { IListDropdown } from "../../common/Dropdown/DropdownList/DropdownList";
import { IHeaderNavData } from "../../common/Header/Header";
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
