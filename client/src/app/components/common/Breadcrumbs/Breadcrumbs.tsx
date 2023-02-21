import queryString from "query-string";
import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import routes from "../../../router";
import { getUserById, useStateSelector } from "../../../store";
import IconSvg from "../IconSvg";

type RouteParams = {
    userId: string;
    roomId: string;
    route: string;
};

const estates: any = {
    "63ecd3d709b8f04ccc7e27e6": "Квартиры",
    "63ecd3d709b8f04ccc7e27e9": "Авто напрокат",
    "63ecd3d709b8f04ccc7e27e8": "Бани и сауны",
    "63ecd3d709b8f04ccc7e27e7": "Коттеджы и усадьбы"
};

export const EstatesBreadcrumb: React.FC<any> = () => {
    const { search } = useLocation();
    const { typeId }: any = queryString.parse(search);

    if (typeId) {
        return <span>{estates[typeId]}</span>;
    }
    return <span>Недвижимость</span>;
};

export const UserBreadcrumb: React.FC<any> = ({ match }) => {
    const user = useStateSelector(getUserById(match.params.userId));

    if (user) {
        return <span>{`${user?.name}`}</span>;
    }
    return <span>Пользователь не найден</span>;
};

const Breadcrumbs: React.FC = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <div className="breadcrumbs">
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <span className="breadcrumbs__item" key={match.pathname}>
                    {match.pathname === "/" ? (
                        <NavLink
                            className={"breadcrumbs__link"}
                            to={match.pathname}
                        >
                            <IconSvg
                                name="home-run"
                                width="15"
                                height="14"
                                svgClass="breadcrumbs__home-run"
                            />
                        </NavLink>
                    ) : (
                        <>
                            <IconSvg name="dot" svgClass="breadcrumbs__dot" />
                            <NavLink
                                className={"breadcrumbs__link"}
                                to={match.pathname}
                            >
                                {breadcrumb}
                            </NavLink>
                        </>
                    )}
                </span>
            ))}
        </div>
    );
};

export default React.memo(Breadcrumbs);
