import React, { useCallback, useEffect, useState } from "react";
import { InputField, SelectField } from "../../common/Fields";
import { ArrowForwardIos, LocationOn, Tune } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import API from "../../../api";

interface citiesListType {
    label: string;
    value: string;
}

const initialState = {
    cities: [],
    rooms: "",
    from: "",
    to: ""
};

const SearchEstateForm: React.FC = () => {
    const [data, setData] = useState(initialState);
    const [cities, setCities] = useState<citiesListType[]>([]);

    useEffect(() => {
        API.cities.fetchAll().then((data) => {
            const citiesList = Object.keys(data).map((cityName) => ({
                label: data[cityName].name,
                value: data[cityName]._id
            }));
            setCities(citiesList);
        });
    }, []);

    const handleChange = useCallback((target: any) => {
        console.log(target);

        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="search-estate">
            <div className="search-estate__body">
                <form className="search-estate__search search-panel">
                    <SelectField
                        value={data.cities}
                        onChange={handleChange}
                        name="city"
                        label="Город"
                        defaultValue="Выберите"
                        options={cities}
                        className="search-panel__item"
                    />
                    <SelectField
                        name="rooms"
                        label="Комнаты"
                        defaultValue="Выберите"
                        options={[
                            { label: "1", value: "one" },
                            { label: "2", value: "two" },
                            { label: "3", value: "three" },
                            { label: "4", value: "four" }
                        ]}
                        className="search-panel__item"
                    />
                    <div className="search-panel__item">
                        <label htmlFor="from">Цена за сутки (BYN)</label>
                        <div className="search-panel__range">
                            <InputField
                                name="from"
                                label="От"
                                sx={{ flex: "0 1 50%" }}
                            />
                            <InputField
                                name="to"
                                label="До"
                                sx={{ flex: "0 1 50%" }}
                            />
                        </div>
                    </div>
                    <div className="search-panel__item">
                        <button type="button" className="search-panel__button">
                            Больше опций
                            <Tune />
                        </button>
                    </div>
                    <div className="search-panel__item">
                        <NavLink
                            className="search-panel__link"
                            to="/ads-on-the-map"
                        >
                            На карте <LocationOn />
                        </NavLink>
                    </div>
                    <div className="search-panel__item">
                        <button className="search-panel__submit">
                            Показать
                            <ArrowForwardIos />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchEstateForm;
