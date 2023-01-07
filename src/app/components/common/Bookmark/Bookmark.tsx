import React from "react";
import { Badge, styled, Typography } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
        color: "#fff",
        top: "3px",
        right: "-1px",
        background: theme.palette.primary.main
    }
}));

interface IBookmark {
    label?: string;
}

const Bookmark: React.FC<IBookmark> = ({ label }) => {
    return (
        <div className={"bookmark"}>
            <NavLink to="/bookmark" className={"bookmark__item"}>
                <Typography className={"bookmark__label"}>{label}</Typography>
                <StyledBadge badgeContent={5} color="secondary">
                    <FavoriteBorder />
                </StyledBadge>
            </NavLink>
        </div>
    );
};

export default Bookmark;
