import React, {useState} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {RoutesNavType} from "../../../router/routes";
import {Menu, MenuItem} from "@mui/material";
import {KeyboardArrowDown} from "@mui/icons-material";

type DropdownProps = {
    defaultOption: RoutesNavType;
    options: RoutesNavType[];
}

const Dropdown: React.FC<DropdownProps> = ({options, defaultOption}) => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const {path, name} = defaultOption;
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickSettingsItem = (path: string) => {
        history.push(path);
        handleClose();
    };

    return (
        <div className="dropdown">
            <div className="dropdown__header">
                <NavLink to={path}>{name}</NavLink>
                <button className="dropdown__icon" onClick={handleClick}>
                    <KeyboardArrowDown/>
                </button>
            </div>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                className='dropdown-menu'
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.path}
                        className="dropdown-menu__item"
                        onClick={() => handleClickSettingsItem(option.path)}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default Dropdown;
