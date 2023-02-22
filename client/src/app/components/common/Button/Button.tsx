import React, { RefObject } from "react";

type ButtonType = {
    children: React.ReactChild | React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<ButtonType> = ({
    children,
    type,
    className = "",
    ...rest
}) => {
    return (
        <button
            type={type || "button"}
            className={className + " btn"}
            {...rest}
        >
            {children}
        </button>
    );
};
export default Button;
