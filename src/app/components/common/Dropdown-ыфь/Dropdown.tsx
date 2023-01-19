import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesLinksType } from "../../../router/mainRoutes";

// type DropdownProps = {
//     defaultOption: RoutesLinksType;
//     options: RoutesLinksType[];
// };

const Dropdown: React.FC = () => {
    return (
        <div className="dropdown">
            <div className="dropdown__header">
                {/* <NavLink to={path}>{title}</NavLink>
                <button className="dropdown__icon" onClick={handleClick}>
                </button> */}
            </div>
        </div>
    );
};

export default Dropdown;
