import React from "react";
import {
    VKShareButton,
    FacebookShareButton,
    ViberShareButton,
    TelegramShareButton,
    WhatsappShareButton
} from "react-share";
import IconSvg from "../../common/IconSvg";

interface IPropsShareButtons {
    title?: string;
    url: string;
    image?: string;
    postsPage?: boolean;
    estatesPage?: boolean;
}
export const ShareButtons: React.FC<IPropsShareButtons> = ({
    url,
    title,
    image,
    estatesPage,
    postsPage
}) => {
    const getClassName = () => {
        if (estatesPage) return "share__item estates-detail";
        if (postsPage) return "share__item posts-detail";
        return "share__item";
    };

    return (
        <div className="share">
            <h3 className="share__title">Поделиться</h3>
            <div className="social">
                <VKShareButton
                    url={url}
                    title={title}
                    image={image}
                    className={getClassName()}
                >
                    <IconSvg name={"vk"} svgClass={"share__icon"} />
                </VKShareButton>
                <FacebookShareButton
                    url={url}
                    title={title}
                    hashtag="#daily rent..."
                    className={getClassName()}
                >
                    <IconSvg name={"fb"} svgClass={"share__icon"} />
                </FacebookShareButton>
                <ViberShareButton
                    url={url}
                    title={title}
                    className={getClassName()}
                >
                    <IconSvg name={"viber"} svgClass={"share__icon"} />
                </ViberShareButton>
                <TelegramShareButton
                    url={url}
                    title={title}
                    className={getClassName()}
                >
                    <IconSvg name={"telegram"} svgClass={"share__icon"} />
                </TelegramShareButton>
                <WhatsappShareButton
                    url={url}
                    title={title}
                    className={getClassName()}
                >
                    <IconSvg name={"whatsapp"} svgClass={"share__icon"} />
                </WhatsappShareButton>
            </div>
        </div>
    );
};

export default ShareButtons;
