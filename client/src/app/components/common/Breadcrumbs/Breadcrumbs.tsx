import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import routes from "../../../router";
import IconSvg from "../IconSvg";

const Breadcrumbs: React.FC = () => {
    const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });

    return (
        <div className="breadcrumbs">
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <div className="breadcrumbs__item" key={match.pathname}>
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
                </div>
            ))}
        </div>
    );
};

export default React.memo(Breadcrumbs);
