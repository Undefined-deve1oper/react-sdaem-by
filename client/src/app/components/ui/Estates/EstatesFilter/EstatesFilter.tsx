import { debounce } from "lodash";
import React, { useEffect } from "react";
import { USER_FILTER_KEY } from "../../../../constants/sessionStorageConfig";
import { useForm } from "../../../../hooks";
import sessionStorageService from "../../../../services/sessionStorage.service";
import { useStateSelector } from "../../../../store";
import { getBookingLoading } from "../../../../store/slices/booking";
import {
    EstateItem,
    getEstatesLoadingStatus
} from "../../../../store/slices/estates";
import { BookingDateType } from "../../../../types/types";
import { getPresenceBookingDate } from "../../../../utils/dateHelpers";
import { SearchEstateForm } from "../../Forms";

const initialState = {
    entry: getPresenceBookingDate(1),
    departure: getPresenceBookingDate(2),
    cityId: "",
    brand: "",
    typeId: "",
    priceMax: "",
    priceMin: ""
};

type EstatesFilterProps = {
    onReset: () => void;
    onFilter: (data: BookingDateType, items: EstateItem[]) => void;
};

const EstatesFilter: React.FC<EstatesFilterProps> = ({ onReset, onFilter }) => {
    const estatesLoading = useStateSelector(getEstatesLoadingStatus());
    const bookingLoading = useStateSelector(getBookingLoading());
    const storageData =
        sessionStorageService.fromSessionStorage(USER_FILTER_KEY);
    const { data, handleChange, setData } = useForm(
        !storageData ? initialState : storageData,
        false,
        {}
    );

    useEffect(() => {
        const isAvaibleToFilter = !estatesLoading && !bookingLoading;

        if (isAvaibleToFilter) {
            onFilter(data, []);
        }
    }, [data, estatesLoading, bookingLoading]);

    const handleResetFilters = () => {
        onReset();
        setData(initialState);
    };
    const handleDateChange = debounce(handleChange, 180);

    return (
        <div className="estates-filters">
            <div className="estates-filters__container _container">
                <SearchEstateForm
                    data={initialState}
                    onChange={handleDateChange}
                    handleReset={handleResetFilters}
                />
            </div>
        </div>
    );
};

export default EstatesFilter;
