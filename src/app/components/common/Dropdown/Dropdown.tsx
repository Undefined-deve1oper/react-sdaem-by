import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesLinksType } from "../../../router/mainRoutes";

type DropdownProps = {
    defaultOption: RoutesLinksType;
    options: RoutesLinksType[];
};

const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const { path, title } = defaultOption;
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickSettingsItem = (path: string) => {
        navigate(path);
        handleClose();
    };

    return (
        <div className="dropdown">
            <div className="dropdown__header">
                <NavLink to={path}>{title}</NavLink>
                <button className="dropdown__icon" onClick={handleClick}>
                    {/* <ExpandMore /> */}
                </button>
            </div>
            {/* <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: "center", vertical: "top" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                className="dropdown-menu"
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.path}
                        className="dropdown-menu__item"
                        onClick={() => handleClickSettingsItem(option.path)}
                    >
                        {option.title}
                    </MenuItem>
                ))}
            </Menu> */}
        </div>
    );
};

export default Dropdown;
