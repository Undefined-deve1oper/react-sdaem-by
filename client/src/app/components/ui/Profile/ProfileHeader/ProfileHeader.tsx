import React from "react";
import { NavLink } from "react-router-dom";
import accountConfig from "../../../../config/account-config.json";
import { getCurrentUserId, useStateSelector } from "../../../../store";
import IconSvg from "../../../common/IconSvg";

const ProfileHeader: React.FC = () => {
    const currentUserId = useStateSelector(getCurrentUserId());

    return (
        <nav className="profile-header">
            <div className="profile-header__container _container">
                <ul className="profile-header__list profile-list">
                    {accountConfig.map((item: any) => (
                        <li className="profile-list__item" key={item.id}>
                            <NavLink
                                to={`/users/${currentUserId}${item.path}`}
                                className={({ isActive }) =>
                                    `profile-list__link ${
                                        isActive ? " _active" : ""
                                    }`
                                }
                                end
                            >
                                {item.icon && <IconSvg name={item.icon} />}
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default ProfileHeader;
