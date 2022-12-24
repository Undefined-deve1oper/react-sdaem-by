import React from "react";
import { NavLink } from "react-router-dom";
import LogoImage from "../../../assets/img/logo.png";

const Logo = ({ ...rest }) => {
    return (
        <NavLink className="logo" to="/" {...rest}>
            <img src={LogoImage} alt="logo" />
        </NavLink>
    );
};

export default Logo;
