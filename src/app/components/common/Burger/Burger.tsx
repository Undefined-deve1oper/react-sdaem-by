import React from "react";

interface BurgerProps {
    open: boolean;
    onToggleMenu: () => void;
}

const Burger: React.FC<BurgerProps> = ({open, onToggleMenu}) => {
    return (
        <button onClick={onToggleMenu} type="button" className="icon-menu">
            <span className={open ? "_active" : ""}></span>
        </button>
    );
};

export default Burger;
