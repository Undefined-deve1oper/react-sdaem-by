import React from "react";
import Button from "../Button/Button";
import IconSvg from "../IconSvg";

type ButtonFavoriteProps = {
    label?: string;
    status: boolean;
    onToggle: () => void;
};

const ButtonFavorite: React.FC<ButtonFavoriteProps> = ({
    label,
    status,
    onToggle
}) => {
    return (
        <Button
            type="button"
            onClick={onToggle}
            className={"favourite-btn" + (status ? " _active" : "")}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={
                status ? "Удалить из избранного" : "Добавить в избранное"
            }
        >
            {label && <h3 className="favourite-btn__title">{label}</h3>}
            {status ? (
                <IconSvg name="heart-active" />
            ) : (
                <IconSvg name="heart" />
            )}
        </Button>
    );
};

export default ButtonFavorite;
