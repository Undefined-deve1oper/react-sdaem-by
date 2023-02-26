import React, { useEffect } from "react";
import { USER_FILTER_KEY } from "../../../constants/sessionStorageConfig";
import { useFilters } from "../../../hooks";
import { useAppDispatch, useStateSelector } from "../../../store";
import { getBookingList } from "../../../store/slices/booking";
import {
    getEstatesLoadingStatus,
    getFilteredEstates,
    loadFilteredEstatesList
} from "../../../store/slices/estates";
import HomeFilter from "./HomeFilter";

const HomePage: React.FC = () => {
    const estates = useStateSelector(getFilteredEstates());
    const bookingList = useStateSelector(getBookingList());
    const { handleFilter, filteredItems } = useFilters(
        estates || [],
        bookingList || [],
        USER_FILTER_KEY
    );
    const dispatch = useAppDispatch();
    console.log(filteredItems.length);

    useEffect(() => {
        dispatch(loadFilteredEstatesList());
    }, []);

    return (
        <section className="page__main-search main-search">
            <div className="main-search__container _container">
                <div className="main-search__body">
                    <div className="main-search__title">
                        Sdaem.by - у нас живут <span>ваши объявления</span>
                    </div>
                    <HomeFilter
                        count={filteredItems.length}
                        onFilter={handleFilter}
                    />
                </div>
            </div>
        </section>
    );
};

export default HomePage;
