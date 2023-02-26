import React, { useState } from "react";

const withPassword = (Component: any) => (props: any) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleMouseDownPassword = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
    };

    return (
        <Component
            {...props}
            type={showPassword ? "text" : "password"}
            onClick={toggleShowPassword}
            onMouseDown={handleMouseDownPassword}
        />
    );
};

export default withPassword;
