import React from "react";
import { useLocation } from "react-router-dom";
import { path } from "../../../../types/enums";
import Button from "../../../common/Button";
import IconSvg from "../../../common/IconSvg";

const ButtonGroup: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === path.home;

    return (
        <div className="search-panel__buttons">
            <Button type="button" className={"search-panel__button"}>
                Больше опций
                <IconSvg name={"options"} width="18" height="18" />
            </Button>
            {isHome ? (
                <>
                    <Button type="button" className="search-panel__button">
                        На карте
                        <IconSvg width="13" height="16" name={"mark"} />
                    </Button>
                    <Button className="search-panel__submit">
                        Показать
                        <IconSvg name="arrow" width="13" height="15" />
                    </Button>
                </>
            ) : (
                <>
                    <Button>Очистить</Button>
                    <Button className="search-panel__submit">
                        Показать объекты
                        <IconSvg name="arrow" width="13" height="15" />
                    </Button>
                </>
            )}
        </div>
    );
};

export default ButtonGroup;
