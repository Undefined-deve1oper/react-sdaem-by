import React from 'react';
import FooterBody from "./FooterBody";
import FooterContact from "./FooterContact";
import FooterCopyrights from "./FooterCopyrights";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container _container">
                <FooterBody/>
                <FooterContact/>
                <FooterCopyrights/>
            </div>
        </footer>
    );
};

export default Footer;