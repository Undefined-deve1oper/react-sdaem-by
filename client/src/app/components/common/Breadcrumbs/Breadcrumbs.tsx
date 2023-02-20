import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import routes from "../../../router";
import { getUserById, useStateSelector } from "../../../store";
import IconSvg from "../IconSvg";

type RouteParams = {
    userId: string;
    roomId: string;
    route: string;
};

export const UserBreadcrumb: React.FC<any> = (props) => {
    const user = useStateSelector(getUserById(props.match.params.userId));

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
