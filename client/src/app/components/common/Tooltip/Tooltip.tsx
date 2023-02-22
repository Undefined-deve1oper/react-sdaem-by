import React, { useEffect } from "react";
import { tooltipPolifill } from "../../../utils/tooltipPolifill";
import Button from "../Button";

type TooltipProps = {
    title: string;
    children: React.ReactChild | React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
    useEffect(() => {
        tooltipPolifill();
    }, []);

    return (
        <>
            <div className="anim">
                <span className="tooltip" data-tooltip={title} />
                <div className="tooltip__item">{children}</div>
            </div>
        </>
    );
};

export default Tooltip;
