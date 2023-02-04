import React from "react";
import useForm from "../../../../hooks/useForm";
import ButtonGroup from "../../Groups/ButtonGroup";
import PriceRangeGroup from "../../Groups/PriceRangeGroup";
import SelectGroup from "../../Groups/SelectGroup";
import { validatorConfig } from "./validatorConfig";

type EstateFormTypes = {
    onSubmit: () => void;
};

const initialState = {
    city: "",
    room: "",
    area: "",
    metro: "",
    type: "",
    priceMin: "",
    priceMax: "",
    capacity: ""
};

const EstateForm: React.FC<EstateFormTypes> = ({ onSubmit }) => {
    const { data, errors, handleChange } = useForm(
        initialState,
        false,
        validatorConfig
    );
    console.log(data);

    return (
        <div className="search-estate">
            <div className="search-estate__body">
                <form
                    className="search-estate__search search-panel"
                    onSubmit={onSubmit}
                >
                    <SelectGroup data={data} onChange={handleChange} />
                    <PriceRangeGroup data={data} onChange={handleChange} />
                    <ButtonGroup />
                    {/* <RangeSliderField
                        label="Цена за сутки (RUB)"
                        name="price"
                        onChange={handleChange}
                        value={data.price}
                        min={0}
                        max={15000}
                    />
                    <SearchButton type="button">
                        Больше опций
                        <Tune />
                    </SearchButton>
                    <SearchButton type="button">
                        <NavLink
                            className="search-panel__link"
                            to="/ads-on-the-map"
                        >
                            На карте <LocationOn />
                        </NavLink>
                    </SearchButton>
                    <SearchButton styleType="submit">
                        Показать
                        <ArrowForwardIos />
                    </SearchButton> */}
                </form>
            </div>
        </div>
    );
};

export default EstateForm;
