import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../../../hooks";
import {
    getUserById,
    useAppDispatch,
    useStateSelector
} from "../../../../store";
import { createComment } from "../../../../store/slices/comments";
import Button from "../../../common/Button";
import { TextAreaField } from "../../../common/Fields";
import Rating from "../../../common/Rating";
import { validatorConfig } from "./validatorConfig";

interface CreateCommentFormProps {
    answerOn: string;
}

const initialData = { comment: "", rating: "" };

const CreateCommentForm: React.FC<CreateCommentFormProps> = ({ answerOn }) => {
    const { data, handleChange, errors, validate, handleResetForm } = useForm(
        initialData,
        false,
        validatorConfig
    );
    const answeredUser = useStateSelector(getUserById(answerOn));
    const { estateId } = useParams<{ estateId: string }>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (answerOn) {
            const fakeEvent = {
                target: {
                    name: "comment",
                    value: `${answeredUser?.name}, `
                }
            };
            handleChange(fakeEvent);
        }
    }, [answerOn]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (validate(data)) {
            dispatch(
                createComment({
                    ...data,
                    estateId: estateId || "",
                    content: data.comment,
                    answerOn: answeredUser,
                    rating: data.rating
                })
            );
            handleResetForm(event);
        }
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <TextAreaField
                value={data.comment}
                name="comment"
                title="Отзыв"
                label="Ваши мысли..."
                onChange={handleChange}
                error={errors.comment}
            />
            <br />
            <div className="estate-comments__publish">
                <Rating
                    name="rating"
                    error={errors.rating}
                    labelText="Поставьте оценку:"
                    defaultState={data.rating}
                    onChange={handleChange}
                />
                <Button className="estate-comments__button" type="submit">
                    Опубликовать
                </Button>
            </div>
        </form>
    );
};

export default CreateCommentForm;
