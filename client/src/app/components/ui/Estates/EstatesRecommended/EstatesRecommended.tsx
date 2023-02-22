import React from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../../store";
import Breadcrumbs from "../../../common/Breadcrumbs";

const EstatesRecommended: React.FC = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    return (
        <div className="header-estates">
            <div className="_container">
                <Breadcrumbs />
                <h3 className="header-estates__title">Аренда имущества</h3>
            </div>
        </div>
    );
};

export default EstatesRecommended;
