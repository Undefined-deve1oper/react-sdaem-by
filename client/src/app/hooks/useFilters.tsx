import { useState } from "react";
import sessionStorageService from "../services/sessionStorage.service";
import { BookingDateType } from "../types/types";

export default function useFilters<T>(
    initialState: Array<T>,
    bookingList: BookingDateType[],
    localKey = "filtersData"
) {
    const [filteredItems, setFilteredItems] = useState<T[]>();

    const isIncludeElement = (data: Array<T>, key: any) => {
        return data.includes(key);
    };

    const handleFilter = (data: BookingDateType, items: Array<T>) => {
        let filteredEstates = !items ? [...initialState] : [...items];

        if (data.entry && data.departure) {
            const entry = new Date(data.entry).getTime();
            const departure = new Date(data.departure).getTime();

            const bookingsByDate = bookingList.filter((booking) => {
                const entryBooking = new Date(booking.entry).getTime();
                const departureBooking = new Date(booking.departure).getTime();

                const isNotAvaible =
                    (entry >= entryBooking && entry <= departureBooking) ||
                    (departure >= entryBooking &&
                        departure <= departureBooking) ||
                    (entry < entryBooking && departure > departureBooking);

                if (isNotAvaible) return true;
                return false;
            });

            const bookingEstatesByIds = bookingsByDate.map(
                (book: BookingDateType) => book.estateId
            );
            const estatesByNotBooked = initialState.filter((estate: any) => {
                if (bookingEstatesByIds.includes(estate._id)) return false;
                return true;
            });
            filteredEstates = estatesByNotBooked;

            sessionStorageService.toSessionStorage(localKey, data);
        }

        setFilteredItems(filteredEstates);
    };

    return { handleFilter, filteredItems };
}
