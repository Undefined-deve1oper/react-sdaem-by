import React from "react";
import { PostItem } from "../../../../store";
import { getFormatDate } from "../../../../utils/dateHelpers";
import { textCropper } from "../../../../utils/helpers";
import Button from "../../../common/Button";

interface IPostCard {
    item: PostItem;
}

const PostCard: React.FC<IPostCard> = ({ item, ...rest }) => {
    const slicedText = textCropper(item.previewText, 219);
    const formatDate = getFormatDate(item.createdAt);

    return (
        <div className="post-card">
            <div className="post-card__image _ibg">
                <img src={item.image} alt="" />
            </div>

            <div className="post-card__body">
                <h3 className="post-card__title">{item.title}</h3>
                <div className="post-card__text">{slicedText}</div>
                <div className="post-card__info">
                    <Button className="post-card__date">{formatDate}</Button>
                    <Button className="post-card__read">Читать</Button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(PostCard);
