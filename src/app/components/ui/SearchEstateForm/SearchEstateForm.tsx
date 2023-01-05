import React from "react";
import { IconButton } from "@mui/material";
import { InputField, SelectField } from "../../common/Fields";
import { DisplaySettings } from "@mui/icons-material";

const SearchEstateForm: React.FC = () => {
    return (
        <div className="search-estate">
            <div className="search-estate__body">
                <form className="search-estate__search search-panel">
                    <SelectField
                        name="city"
                        label="Город"
                        defaultValue="Выберите"
                        options={[
                            { label: "Москва", value: "moscow" },
                            { label: "Питер", value: "piter" },
                            { label: "Омск", value: "omsk" }
                        ]}
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
                        <button className="search-panel__button">
                            Больше опций
                            <DisplaySettings />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchEstateForm;
