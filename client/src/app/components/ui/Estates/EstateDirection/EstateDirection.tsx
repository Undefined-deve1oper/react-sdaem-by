import React, { useState } from "react";
import Button from "../../../common/Button";
import IconSvg from "../../../common/IconSvg";

type EstateDirectionProps = {
    setDirectionList: () => void;
    setDirectionTiels: () => void;
};

const EstateDirection: React.FC<EstateDirectionProps> = ({
    setDirectionList,
    setDirectionTiels
}) => {
    return (
        <>
            <Button onClick={setDirectionList} className={"estates-view__item"}>
                <IconSvg name="tile" />
                Список
            </Button>
            <Button onClick={setDirectionTiels} className="estates-view__item">
                <IconSvg name="grid" />
                Плитки
            </Button>
        </>
    );
};

export default EstateDirection;
