import React from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../../store";
import Breadcrumbs from "../../../common/Breadcrumbs";

const EstatesRecommended: React.FC = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    return (
        <div className="_container">
            <Breadcrumbs />
        </div>
    );
};

export default EstatesRecommended;
