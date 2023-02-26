import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../../hooks";
import { useAppDispatch, useStateSelector } from "../../../../store";
import {
    getCurrentUserData,
    saveUserAvatarPhoto,
    updateUserData
} from "../../../../store/slices/users";
import { UserType } from "../../../../types/types";
import Button from "../../../common/Button";
import {
    DatePickerField,
    FileField,
    RadioGroupField,
    SwitchField,
    TextField
} from "../../../common/Fields";
import IconSvg from "../../../common/IconSvg";
import { validatorConfig } from "./validatorConfig";

const genderItems = [
    { id: "male", title: "Мужчина" },
    { id: "female", title: "Женщина" }
];

const EditForm: React.FC = () => {
    const currentUser = useStateSelector(getCurrentUserData());
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const fileRef = useRef(null);

    const initialData: UserType = {
        name: currentUser?.name || "",
        email: "",
        gender: currentUser?.gender || "male",
        birthYear: currentUser?.birthYear || Date.now(),
        subscribe: currentUser?.subscribe || false,
        avatarImage: currentUser?.avatarImage
    };
    const { data, errors, handleChange, handleKeyDown, validate } =
        useForm<UserType>(initialData, false, validatorConfig);

    const handleFilesChange = useCallback((event: any) => {
        event.preventDefault();
        fileRef.current = event.target.files;

        if (!fileRef.current) return null;

        const reader: any = new FileReader();
        reader.onloadend = () => {
            const uint8Array: any = new Uint8Array(reader.result);
            dispatch(saveUserAvatarPhoto(uint8Array));
        };
        reader.readAsArrayBuffer(fileRef.current[0]);
    }, []);

    const goBack = () => {
        navigate(-1);
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validate(data)) {
            dispatch(updateUserData(data, goBack));
        }
    };

    return (
        <form
            className="user-profile__form profile-form"
            onKeyDown={handleKeyDown}
            onSubmit={handleSubmit}
        >
            <div className="profile-form__header">
                <div className="avatar">
                    <div className="profile-form__avatar avatar__photo">
                        <img src={data?.avatarImage} alt="Avatar" />
                    </div>
                    <Button className="profile-form__delete-icon avatar__icon">
                        <IconSvg width="10.75" height="13.82" name="delete" />
                    </Button>
                </div>
                <div className="profile-form__download">
                    <FileField
                        name={"avatarImage"}
                        onChange={handleFilesChange}
                        error={errors.avatarImage}
                        label={"Загрузить новое фото"}
                    />
                    <p className="profile-form__description">
                        Фото в формате Jpeg или Png
                    </p>
                </div>
            </div>
            <div className="profile-form__main">
                <h3 className="profile-form__titile">Основное</h3>
                <div className="profile-form__row">
                    <TextField
                        autoFocus
                        title="Ваше имя"
                        name="name"
                        label="Имя..."
                        icon="user"
                        value={data.name}
                        error={errors.name}
                        onChange={handleChange}
                        className="profile-form__item"
                    />
                    <TextField
                        title="Ваш email"
                        name="email"
                        label="Email..."
                        icon="email"
                        value={data.email}
                        error={errors.email}
                        onChange={handleChange}
                        className="profile-form__item"
                    />
                    <DatePickerField
                        title="Дата рождения"
                        name={"birthYear"}
                        value={data.birthYear}
                        onChange={handleChange}
                        error={errors.birthYear}
                        minDate={new Date("1955-01-01")}
                        className="profile-form__item"
                    />
                    <RadioGroupField
                        name="gender"
                        items={genderItems}
                        value={data.gender}
                        onChange={handleChange}
                        label="Выберите ваш пол"
                    />
                    <SwitchField
                        value={data.subscribe}
                        name="subscribe"
                        label="Получать спецпредложения"
                        onChange={handleChange}
                    />
                    <div className="profile-form__buttons">
                        <Button onClick={goBack}>Назад</Button>
                        <Button
                            type="submit"
                            disabled={Object.keys(errors).length !== 0}
                        >
                            Обновить
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EditForm;
