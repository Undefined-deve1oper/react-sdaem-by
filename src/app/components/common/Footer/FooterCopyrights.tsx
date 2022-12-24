import React from 'react';
import {NavLink} from "react-router-dom";

const FooterCopyrights: React.FC = () => {
    return (
        <div className="footer__copyrights copyrights-footer">
            <p className={"copyrights-footer__text"}>
                &copy;{new Date().getFullYear()} SDAEM.BY | All rights reserved
                                                 | This website was created by{" "}
                <NavLink to={"/author"}>Kononov Kirill</NavLink>
            </p>
        </div>
    );
};

export default FooterCopyrights;