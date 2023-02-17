import React from "react";
import { PostItem } from "../../../../store";
import Button from "../../../common/Button";

interface IPostCard {
    item: PostItem;
}

const PostCard: React.FC<IPostCard> = ({ item, ...rest }) => {
    const slicedText =
        item.previewText.length > 209
            ? item.previewText.slice(0, 219) + "..."
            : item.previewText;

    return (
        <div className="post-card">
            <div className="post-card__image _ibg">
                <img src={item.image} alt="" />
            </div>

            <div className="post-card__body">
                <h3 className="post-card__title">{item.title}</h3>
                <div className="post-card__text">{slicedText}</div>
                <div className="post-card__info">
                    <Button className="post-card__date">14 января 2021</Button>
                    <Button className="post-card__read">Читать</Button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(PostCard);
