import { useState } from "react";
import sessionStorageService from "../services/sessionStorage.service";
import { BookingDateType } from "../types/types";

export type FilterData = {
    entry?: Date;
    departure?: Date;
    priceMin?: string;
    priceMax?: string;
    city?: {
        name: string;
        _id: string;
    };
    type?: {
        name: string;
        _id: string;
    };
    brand?: {
        name: string;
        _id: string;
    };
};

type FilteredItems<T> = T[];

export default function useFilters<T>(
    initialState: T[],
    bookingList: BookingDateType[],
    localKey = "filtersData"
) {
    const [filteredItems, setFilteredItems] =
        useState<FilteredItems<T>>(initialState);

    const handleFilter = (data: FilterData, items?: T[]) => {
        let filteredEstates: FilteredItems<T> =
            items?.length !== 0 ? [...items!] : [...initialState];

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

                return isNotAvaible;
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

        if (data.priceMin && data.priceMax) {
            filteredEstates = filteredEstates.filter((item: any) => {
                const price = item.price;

                return price >= +data.priceMin! && price <= +data.priceMax!;
            });
        }

        if (data.city) {
            filteredEstates = filteredEstates.filter(
                (item: any) => item.cityId === data.city?._id
            );
        }
        if (data.type) {
            filteredEstates = filteredEstates.filter(
                (item: any) => item.typeId === data.type?._id
            );
        }
        if (data.brand) {
            filteredEstates = filteredEstates.filter(
                (item: any) => item.brandId === data.brand?._id
            );
        }

        setFilteredItems(filteredEstates);
    };

    return { handleFilter, filteredItems };
}
