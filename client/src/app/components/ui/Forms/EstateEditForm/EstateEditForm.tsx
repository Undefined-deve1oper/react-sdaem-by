import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../../hooks";
import {
    getCurrentUserId,
    useAppDispatch,
    useStateSelector
} from "../../../../store";
import { getBrandsList } from "../../../../store/slices/brands";
import {
    EstateItem,
    getEstateById,
    updateEstatesData
} from "../../../../store/slices/estates";
import { getTypesList } from "../../../../store/slices/types";
import { BrandType } from "../../../../types/types";
import Button from "../../../common/Button";
import {
    FileField,
    SelectField,
    TextAreaField,
    TextField
} from "../../../common/Fields";
import IconSvg from "../../../common/IconSvg";
import ImageSlider from "../../../common/SliderImages/SliderImages";
import { validatorConfig } from "./validatorConfig";

const EstateEditForm = ({ estateId }: { estateId: string }) => {
    const estate = useStateSelector<EstateItem>(getEstateById(estateId));
    const currentUserId = useStateSelector(getCurrentUserId());
    const brands = useStateSelector(getBrandsList());
    const types = useStateSelector(getTypesList());
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const fileRef = useRef(null);

    const initialData: EstateItem = {
        _id: estate._id,
        rating: estate.rating,
        price: estate.price,
        images: estate.images,
        city: estate.city,
        title: estate.title,
        brandId: "",
        typeId: "",
        info: estate.info
    };
    const { data, errors, handleChange, handleKeyDown, validate } =
        useForm<EstateItem>(initialData, false, validatorConfig);

    function tarnsformData(data: BrandType[]) {
        return data.map((item) => ({ value: item._id, label: item.name }));
    }

    const goBack = () => {
        navigate(-1);
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validate(data)) {
            dispatch(updateEstatesData(data, goBack));
        }
    };

    useEffect(() => {
        if (currentUserId !== estate.info.ownerId) {
            navigate(`/estates/${estate._id}`, { replace: true });
        }
    }, [navigate, currentUserId, estate]);

    return (
        <form
            className="estate-edit__form estate-edit"
            onKeyDown={handleKeyDown}
            onSubmit={handleSubmit}
        >
            <div className="estate-edit__header">
                <div className="estate-edit__images">
                    <div className="estate-edit__image">
                        <ImageSlider
                            items={data.images}
                            grabCursor
                            pagination={{ clickable: true }}
                        />
                    </div>
                    <Button className="estate-edit__delete-icon avatar__icon">
                        <IconSvg width="10.75" height="13.82" name="delete" />
                    </Button>
                </div>
                <div className="estate-edit__download">
                    <FileField
                        name={"avatarImage"}
                        // onChange={handleFilesChange}
                        error={errors.avatarImage}
                        label={"Загрузить новые фото"}
                    />
                    <p className="estate-edit__description">
                        Фото в формате Jpeg или Png
                    </p>
                </div>
            </div>
            <div className="estate-edit__main">
                <h3 className="estate-edit__titile">Основное</h3>
                <div className="estate-edit__row">
                    <TextField
                        autoFocus
                        title="Название"
                        name="title"
                        label="Название..."
                        icon="user"
                        value={data.title}
                        error={errors.title}
                        onChange={handleChange}
                        className="estate-edit__item"
                    />
                    <TextField
                        title="Новая цена"
                        name="price"
                        label="Цена..."
                        icon="price"
                        value={data.price}
                        error={errors.price}
                        onChange={handleChange}
                        className="estate-edit__item"
                    />
                    <TextField
                        autoFocus
                        title="Город"
                        name="city"
                        label="Город..."
                        icon="location"
                        value={data.city}
                        error={errors.city}
                        onChange={handleChange}
                        className="estate-edit__item"
                    />
                    <SelectField
                        name="brandId"
                        title="Выберите бренд"
                        options={tarnsformData(brands)}
                        className={"estate-edit__item second"}
                        error={errors.brandId}
                        onSelectChange={handleChange}
                        placeholder={"Бренд..."}
                    />
                    <SelectField
                        name="typeId"
                        title="Выберите тип объявления"
                        options={tarnsformData(types)}
                        className={"estate-edit__item second"}
                        error={errors.typeId}
                        onSelectChange={handleChange}
                        placeholder={"Тип..."}
                    />
                    <TextAreaField
                        title="Описание"
                        name="info.description"
                        label="Описание..."
                        icon="description"
                        value={data.info.description}
                        error={errors.description}
                        onChange={handleChange}
                        className="estate-edit__item textarea"
                    />
                    <div className="estate-edit__buttons">
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

export default EstateEditForm;
