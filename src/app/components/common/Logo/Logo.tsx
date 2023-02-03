import React from "react";
import { NavLink } from "react-router-dom";
import LogoImage from "../../../assets/img/logo.png";

interface ILogo {
    className?: string;
}

const Logo: React.FC<ILogo> = ({ className, ...rest }) => {
    return (
        <NavLink className={className || "logo"} to="/" {...rest}>
            <img src={LogoImage} alt="logo" />
        </NavLink>
    );
};

export default Logo;
