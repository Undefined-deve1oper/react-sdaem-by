import { FC } from "react";
import IconsSVG from "../../../assets/svg/sprite.svg";

interface IPropsSvg {
    name: string;
    width?: string;
    height?: string;
    svgClass?: string;
    fillColor?: string;
    strokeColor?: string;
}

const IconSvg: FC<IPropsSvg> = ({
    name,
    width,
    height,
    svgClass = "",
    fillColor,
    strokeColor
}) => {
    const classes = [`svg-icon`, `svg-icon-${name}`];

    if (svgClass) {
        classes.push(svgClass);
    }

    return (
        <svg
            className={classes.join(" ")}
            fill={fillColor}
            stroke={strokeColor}
            width={width}
            height={height}
        >
            <use xlinkHref={`${IconsSVG}#${name}`} />
        </svg>
    );
};

export default IconSvg;
