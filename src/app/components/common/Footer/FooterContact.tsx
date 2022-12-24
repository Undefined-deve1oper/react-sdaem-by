import React from 'react';
import config from "../../../config/footer-config.json"
import {Facebook, Instagram, YouTube} from "@mui/icons-material";

const FooterContact: React.FC = () => {
    return (
        <div className="footer__contact">
            <div className="footer__social social-footer">
                <p>Мы в соцсетях:</p>
                <div className="social-footer__links">
                    <a
                        className={"social-footer__link"}
                        href={"https://www.instagram.com/"}
                        target="_blank"
                    >
                        <Instagram />
                    </a>
                    <a
                        className={"social-footer__link"}
                        href={"https://www.facebook.com/"}
                        target="_blank"
                    >
                        <Facebook />
                    </a>
                    <a
                        className={"social-footer__link"}
                        href={"https://www.youtube.com/"}
                        target="_blank"
                    >
                        <YouTube />
                    </a>
                </div>
            </div>
            <div className="footer__payment-methods payment-methods">
                {config.map((item) => (
                    <a key={item.id} href={item.link} target="_blank">
                        <img
                            className={"payment-methods__image"}
                            src={require(`../../../../assets/img/payment-methods/${item.src}.png`)}
                            alt={item.title}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FooterContact;