import React from "react";
import { useLocation } from "react-router-dom";
import { api } from "../../../../types/enums";
import Button from "../../../common/Button";
import IconSvg from "../../../common/IconSvg";

type ButtonGroupTypes = {
    handleReset: (e: any) => void;
    onToggleOptions: () => void;
};

const ButtonGroup: React.FC<ButtonGroupTypes> = ({
    onToggleOptions,
    handleReset
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
            {isHome ? (
                <>
                    <Button className="search-panel__button">
                        На карте
                        <IconSvg width="13" height="16" name={"mark"} />
                    </Button>
                    <Button className="search-panel__submit">
                        Показать
                        <IconSvg name="arrow" width="13" height="15" />
                    </Button>
                </>
            ) : (
                <Button className="search-panel__submit" onClick={handleReset}>
                    Очистить
                </Button>
            )}
        </div>
    );
};

export default ButtonGroup;
