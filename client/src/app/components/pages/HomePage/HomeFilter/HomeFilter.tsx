import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import tabsList from "../../../../config/tabs-config.json";
import { USER_FILTER_KEY } from "../../../../constants/sessionStorageConfig";
import { useForm } from "../../../../hooks";
import sessionStorageService from "../../../../services/sessionStorage.service";
import { useStateSelector } from "../../../../store";
import { getBookingLoading } from "../../../../store/slices/booking";
import {
    EstateItem,
    getEstatesList,
    getEstatesLoadingStatus
} from "../../../../store/slices/estates";
import { BookingDateType } from "../../../../types/types";
import { getPresenceBookingDate } from "../../../../utils/dateHelpers";
import { SearchEstateForm } from "../../../ui/Forms";

const initialState = {
    entry: getPresenceBookingDate(1),
    departure: getPresenceBookingDate(2),
    city: "",
    brand: "",
    type: "",
    priceMax: "",
    priceMin: ""
};

type HomeFilterProps = {
    count: number;
    onFilter: (data: BookingDateType, items: EstateItem[]) => void;
};

const HomeFilter: React.FC<HomeFilterProps> = ({ count, onFilter }) => {
    const bookingLoading = useStateSelector(getBookingLoading());
    const estates = useStateSelector(getEstatesList());
    const storageData =
        sessionStorageService.fromSessionStorage(USER_FILTER_KEY);
    const { data, handleChange, setData } = useForm(
        !storageData ? initialState : storageData,
        false,
        {}
    );

    useEffect(() => {
        const isAvaibleToFilter = !bookingLoading;

        if (isAvaibleToFilter) {
            onFilter(data, estates);
        }
    }, [data, bookingLoading]);

    const handleResetFilters = () => {
        setData(initialState);
    };

    return (
        <SearchEstateForm
            data={data}
            count={count}
            onChange={handleChange}
            handleReset={handleResetFilters}
        />
    );
};

export default HomeFilter;
