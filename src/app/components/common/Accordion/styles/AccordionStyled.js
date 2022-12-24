import React from "react";
import {
    Accordion as MuiAccordion,
    AccordionDetails as MuiAccordionDetails,
    AccordionSummary as MuiAccordionSummary,
    styled
} from "@mui/material";
import { ArrowForwardIosSharp } from "@mui/icons-material";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `none`,
    "&:before": {
        display: "none"
    }
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharp sx={{ fontSize: "1.5rem" }} />}
        sx={{ padding: 0 }}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(0, 0, 0, .03)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
        color: theme.palette.secondary.main
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
        color: theme.palette.secondary.main
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(0)
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    background: "rgba(0, 0, 0, .03)",
    borderTop: "none"
}));

export { Accordion as AccordionBody, AccordionSummary, AccordionDetails };