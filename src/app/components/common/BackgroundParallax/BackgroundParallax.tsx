import React from "react";
import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse";

interface IBackgroundParallax {
    globalFactorX?: number;
    globalFactorY?: number;
    factorX?: number;
    factorY?: number;
    resetOnLeave?: boolean;
    className?: string;
    itemsClassName?: string;
}

const BackgroundParallax: React.FC<IBackgroundParallax> = ({
    className,
    itemsClassName,
    globalFactorX,
    globalFactorY,
    factorX,
    factorY,
    resetOnLeave = true
}) => {
    return (
        <MouseParallaxContainer
            className={className + " background-parallax"}
            globalFactorX={globalFactorX || 0.3}
            globalFactorY={globalFactorY || 0.3}
            resetOnLeave={resetOnLeave}
        >
            <MouseParallaxChild
                factorX={factorX || 0.2}
                factorY={factorY || 0.2}
                className={itemsClassName + " background-parallax__item"}
            />
        </MouseParallaxContainer>
    );
};

export default BackgroundParallax;
