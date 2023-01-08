import React, { useCallback, useEffect, useState } from "react";
import { InputField, SelectField } from "../../common/Fields";
import { ArrowForwardIos, LocationOn, Tune } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import API from "../../../api";
import {
    HandleChangeDataType,
    SearchEstateFormDataType
} from "../../../types/types";
import { IOption } from "../../../types/select";
import RangeSliderField from "../../common/Fields/RangeSliderField";
import SearchButton from "../SearchButton";

const initialState: SearchEstateFormDataType = {
    city: "",
    rooms: "",
    price: [0, 15000]
};

const SearchEstateForm: React.FC = () => {
    const [data, setData] = useState(initialState);
    const [cities, setCities] = useState<IOption[]>([]);
    const [rooms, setRooms] = useState<IOption[]>([]);

    useEffect(() => {
        API.cities.fetchAll().then((data) => {
            const citiesList = Object.keys(data).map((cityName) => ({
                label: data[cityName].name,
                value: data[cityName]._id
            }));
            setCities(citiesList);
        });
        API.rooms.fetchAll().then((data) => {
            const roomsList = Object.keys(data).map((roomName) => ({
                label: data[roomName].name,
                value: data[roomName]._id
            }));
            setRooms(roomsList);
        });
    }, []);

    const handleChange = useCallback((target: any) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }, []);

    return (
        <div className="search-estate">
            <div className="search-estate__body">
                <form className="search-estate__search search-panel">
                    <SelectField
                        options={cities}
                        value={data.city}
                        onSelectChange={handleChange}
                        name="city"
                        label="Город"
                        className="search-panel__item"
                    />
                    <SelectField
                        name="rooms"
                        label="Комнаты"
                        value={data.rooms}
                        onSelectChange={handleChange}
                        options={rooms}
                        className="search-panel__item"
                    />
                    <RangeSliderField
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
                    <NavLink
                        className="search-panel__link"
                        to="/ads-on-the-map"
                    >
                        На карте <LocationOn />
                    </NavLink>
                    <SearchButton styleType="submit">
                        Показать
                        <ArrowForwardIos />
                    </SearchButton>
                </form>
            </div>
        </div>
    );
};

export default SearchEstateForm;
