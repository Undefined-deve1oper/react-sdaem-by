import React from "react";

const Error: React.FC<{ message: string }> = ({ message }) => {
    return (
        <div className="error-container">
            <h3 className="error-message">{message}</h3>
        </div>
    );
};

export default Error;
