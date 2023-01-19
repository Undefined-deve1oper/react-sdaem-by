import React from "react";
import { NavLink } from "react-router-dom";
import IconSvg from "../IconSvg";

interface IBookmark {
    label?: string;
}

const Bookmark: React.FC<IBookmark> = ({ label }) => {
    return (
        <div className={"bookmark"}>
            <NavLink to="/bookmark" className={"bookmark__item"}>
                <h3 className={"bookmark__label"}>{label}</h3>
                <IconSvg id={"#heart"} className={"bookmark__heart"} />
            </NavLink>
        </div>
    );
};

export default Bookmark;
