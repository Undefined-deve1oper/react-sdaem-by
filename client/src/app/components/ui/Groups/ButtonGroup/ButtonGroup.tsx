import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { api } from "../../../../types/enums";
import Button from "../../../common/Button";
import IconSvg from "../../../common/IconSvg";

type ButtonGroupTypes = {
    handleReset: (e: any) => void;
    onToggleOptions: () => void;
    count?: number;
};

const ButtonGroup: React.FC<ButtonGroupTypes> = ({
    onToggleOptions,
    handleReset,
    count
}) => {
    const location = useLocation();
    const isHome = location.pathname === api.home;

    return (
        <div className="search-panel__buttons">
            <Button
                className={"search-panel__button"}
                onClick={onToggleOptions}
            >
                Больше опций
                <IconSvg name={"options"} width="18" height="18" />
            </Button>
            <Button className="search-panel__clear" onClick={handleReset}>
                Очистить
            </Button>
            {isHome && (
                <NavLink to={"/estates/"} className="search-panel__submit">
                    Показать {count && <span>{count}</span>}
                    <IconSvg name="arrow" width="13" height="15" />
                </NavLink>
            )}
        </div>
    );
};

export default ButtonGroup;
