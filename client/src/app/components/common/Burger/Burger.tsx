import React from "react";

interface IBurger {
    open: boolean;
    onToggleMenu: () => void;
}

const Burger: React.FC<IBurger> = ({ open, onToggleMenu }) => {
    return (
        <button onClick={onToggleMenu} type="button" className="icon-menu">
            <span className={open ? "_active" : ""}></span>
        </button>
    );
};

export default Burger;
