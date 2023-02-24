import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    getCurrentUserData,
    getIsLoggedIn,
    getUserById,
    useAppDispatch,
    useStateSelector
} from "../../../../store";
import { removeComment } from "../../../../store/slices/comments";
import { displayDate } from "../../../../utils/dateHelpers";
import Button from "../../../common/Button";
import IconSvg from "../../../common/IconSvg";
import Rating from "../../../common/Rating";

type EstateCommentProps = {
    comment: any;
    onAnswer: (userId: string) => void;
};

const EstateComment: React.FC<EstateCommentProps> = ({ comment, onAnswer }) => {
    const [fullContent, setFullContent] = useState<boolean>(false);

    const isLoggedIn = useStateSelector(getIsLoggedIn());
    const currentUser = useStateSelector(getCurrentUserData());
    const authorComment = useStateSelector(getUserById(comment.userId));
    const answeredUser = useStateSelector(getUserById(comment.answerOn));
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const commentRemove = (commentId: string) => {
        dispatch(removeComment(commentId));
    };

    const handleFullContent = () => {
        setFullContent((prevState) => !prevState);
    };

    const getCommentText = (text: string) => {
        return text.length >= 80
            ? fullContent
                ? text
                : text.slice(0, 80)
            : text;
    };

    const getContentControlText = () => {
        return fullContent ? "Скрыть" : "Показать полностью";
    };

    if (authorComment) {
        return (
            <>
                <div className="estate-comments__user">
                    <div className="estate-comments__header comment-header">
                        <div className="comment-header__info">
                            <div className="comment-header__avatar avatar">
                                <img
                                    src={authorComment.avatarImage}
                                    alt="Avatar"
                                />
                            </div>
                            <span
                                className="comment-header__name"
                                onClick={() =>
                                    navigate(`/users/${authorComment._id}`)
                                }
                            >
                                {authorComment.name}
                            </span>
                            {isLoggedIn &&
                                currentUser?._id !== authorComment._id && (
                                    <span
                                        className="comment-header__answer-text"
                                        onClick={() =>
                                            onAnswer(authorComment._id || "")
                                        }
                                    >
                                        ответить
                                    </span>
                                )}
                        </div>
                        <div className="comment-header__description">
                            {answeredUser && (
                                <p className="comment-header__answer-user">
                                    Ответ пользователю: {answeredUser.name}
                                </p>
                            )}
                            <Rating
                                name="rating"
                                labelText="Оценка:"
                                readOnly
                                defaultState={comment.rating}
                            />
                        </div>
                    </div>
                    <div className="estate-comments__main comment-main">
                        <span className="comment-main__created">
                            {displayDate(comment.createdAt)}
                        </span>

                        {currentUser &&
                            currentUser._id === authorComment._id && (
                                <Button
                                    onClick={() =>
                                        commentRemove(comment._id || "")
                                    }
                                    className="comment-main__remove"
                                >
                                    <IconSvg name="delete" />
                                </Button>
                            )}
                    </div>
                </div>
                <div className="estate-comments__content comments-content">
                    <p className="comments-content__description">
                        {getCommentText(comment.content)}{" "}
                        {comment.content.length > 80 && (
                            <span
                                className="comments-content__text"
                                onClick={handleFullContent}
                            >
                                {getContentControlText()}
                            </span>
                        )}
                    </p>
                </div>
            </>
        );
    }
    return null;
};

export default EstateComment;
