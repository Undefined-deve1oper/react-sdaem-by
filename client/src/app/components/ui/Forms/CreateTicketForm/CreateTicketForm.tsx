import React from "react";
import Button from "../../../common/Button";
import { validatorConfig } from "./validatorConfig";
import { toast } from "react-toastify";
import { useForm } from "../../../../hooks";
import { SelectField, TextField } from "../../../common/Fields";
import ticketService from "../../../../services/ticket.service";

const initialData = {
    email: "",
    name: "",
    message: "",
    cause: ""
};

const CreateTicketForm: React.FC = () => {
    const { data, handleChange, errors, validate, handleResetForm } = useForm(
        initialData,
        false,
        validatorConfig
    );

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (validate(data)) {
            await ticketService.create({ ...data, status: "pending" });
            toast.success("Сообщение успешно отправлено!");
            handleResetForm(event);
        }
    };
    return (
        <form className="feedback-form__row" onSubmit={handleSubmit}>
            <TextField
                name="email"
                value={data.email}
                onChange={handleChange}
                title="Email"
                placeholder="example@mail.com"
                error={errors.email}
                className="feedback-form__item"
            />
            <TextField
                name="name"
                value={data.name}
                onChange={handleChange}
                title="Ваше имя"
                placeholder="Марк Покровский)"
                error={errors.name}
                className="feedback-form__item"
            />
            <TextField
                name="message"
                value={data.message}
                title="Сообщение"
                onChange={handleChange}
                error={errors.message}
                className="feedback-form__item"
            />
            <div className="feedbacl-form__item">
                <h3 className="feedback-form__label">Причина обращения</h3>
                <SelectField
                    name="cause"
                    onSelectChange={handleChange}
                    // value={data.cause}
                    options={[
                        { label: "Баги", value: "errors" },
                        { label: "Вопрос", value: "offer" },
                        { label: "Другое", value: "other" }
                    ]}
                    error={errors.cause}
                />
            </div>
            <Button type="submit" className="feedback-form__button">
                Отправить
            </Button>
        </form>
    );
};

export default CreateTicketForm;
