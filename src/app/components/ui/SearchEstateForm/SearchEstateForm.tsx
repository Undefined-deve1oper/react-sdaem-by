import React from "react";
import { SelectField } from "../../common/Fields";

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
                </form>
            </div>
        </div>
    );
};

export default SearchEstateForm;
