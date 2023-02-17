import React from "react";
import config from "../../../config/footer-config.json";
import IconSvg from "../IconSvg";

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
                        <IconSvg name="instagram" width="24" height="24" />
                    </a>
                    <a
                        className={"social-footer__link"}
                        href={"https://www.facebook.com/"}
                        target="_blank"
                    >
                        <IconSvg name="facebook" width="24" height="24" />
                    </a>
                    <a
                        className={"social-footer__link"}
                        href={"https://vk.com/"}
                        target="_blank"
                    >
                        <IconSvg name="vk" width="24" height="24" />
                    </a>
                </div>
            </div>

            <div className="footer__payment-methods payment-methods">
                {config.map((item) => (
                    <a key={item.id} href={item.link} target="_blank">
                        <img
                            className={"payment-methods__image"}
                            src={require(`../../../assets/img/payment-methods/${item.src}.png`)}
                            alt={item.title}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FooterContact;
