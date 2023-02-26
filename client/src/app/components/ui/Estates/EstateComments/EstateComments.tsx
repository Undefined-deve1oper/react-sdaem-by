import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getIsLoggedIn, useStateSelector } from "../../../../store";
import { getCommentsByEstateId } from "../../../../store/slices/comments";
import { CreateCommentForm } from "../../Forms";
import EstateCommentsList from "../EstateCommentsList";
import EstateStatisticsBar from "../EstateStatisticsBar";

const EstateComments: React.FC = () => {
    const { estateId } = useParams<{ estateId: string }>();
    const comments = useStateSelector(getCommentsByEstateId(estateId));
    const isLoggedIn = useStateSelector(getIsLoggedIn());
    const [answerOn, setAnswerOn] = useState<string>("");

    const handleAnswerOn = (userId: string) => {
        setAnswerOn(userId);
    };

    if (comments) {
        return (
            <section className="comments">
                <h2 className="comments__title">Отзывы наших клиентов</h2>
                <div className="estate-comments">
                    <div className="estate-comments__main">
                        {isLoggedIn ? (
                            <div className="estate-comments__form">
                                <CreateCommentForm answerOn={answerOn} />
                            </div>
                        ) : (
                            <p className="estate-comments__error">
                                Для того чтобы оставлять отзывы необходимо{" "}
                                <NavLink
                                    to="/login/signin"
                                    className="estate-comments__error _link"
                                >
                                    войти в аккаунт
                                </NavLink>
                            </p>
                        )}
                        <div className="estate-comments__items">
                            <EstateCommentsList
                                onAnswer={handleAnswerOn}
                                comments={comments}
                            />
                        </div>
                    </div>
                    <div className="estate-comments__statistics comments-statistics">
                        <h2 className="comments-statistics__title">
                            Статистика по отзывам
                        </h2>
                        <div className="comments-statistics__bar">
                            <EstateStatisticsBar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    return null;
};

export default EstateComments;
