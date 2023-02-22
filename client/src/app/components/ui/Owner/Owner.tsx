import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useOutside } from "../../../hooks";
import { getUserById, useStateSelector } from "../../../store";
import { getFormatDate } from "../../../utils/dateHelpers";
import IconSvg from "../../common/IconSvg";
import OwnerCard from "../OwnerCard";

export interface IOwner {
    ownerId: string;
}

const Owner: React.FC<IOwner> = ({ ownerId }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const { isOpen, handleOpen } = useOutside(ref);

    return (
        <div className="owner-wrapper">
            <button
                type="button"
                ref={ref}
                className={"show-owner"}
                onClick={handleOpen}
            >
                <IconSvg name="phone" />
                Контакты
            </button>
            <div className={"owner" + (isOpen ? " _active" : "")}>
                <OwnerCard ownerId={ownerId} />
            </div>
        </div>
    );
};

export default React.memo(Owner);
