import React from "react";
import {
    AccordionBody,
    AccordionDetails,
    AccordionSummary
} from "./styles/AccordionStyled";

interface IAccordion {
    label: string;
    className?: string;
    children: React.ReactChild | React.ReactNode;
}

const Accordion: React.FC<IAccordion> = ({
    children,
    className,
    label,
    ...rest
}) => {
    return (
        <AccordionBody TransitionProps={{ unmountOnExit: true }} {...rest}>
            <AccordionSummary>
                <h3 className={className || "mobile-menu__title"}>{label}</h3>
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </AccordionBody>
    );
};

export default Accordion;
