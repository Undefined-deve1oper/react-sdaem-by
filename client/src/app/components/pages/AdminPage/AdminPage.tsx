import React from "react";
import { useStateSelector } from "../../../store";
import { getBookingLoading } from "../../../store/slices/booking";
import {
    getEstatesList,
    getestatesLoadingStatus
} from "../../../store/slices/estates";
import Tabs from "../../common/Tabs";
import { BookingList } from "../../ui/Booking";
import EstatePage from "../EstatePage";

const AdminPage: React.FC = () => {
    const estates = useStateSelector(getEstatesList());
    const estatesLoading = useStateSelector(getestatesLoadingStatus());
    const bookingLoading = useStateSelector(getBookingLoading());

    const tabsColumns = [
        {
            _id: 0,
            name: "Пользователи",
            component: <EstatePage />
        },
        {
            _id: 1,
            name: "Бронирования",
            component: <BookingList role="ADMIN" />
        },
        {
            _id: 2,
            name: "Номера",
            component: <EstatePage />
        },
        {
            _id: 3,
            name: "Тикеты",
            component: <EstatePage />
        }
    ];

    if (!estatesLoading && !bookingLoading) {
        return (
            <div className="admin__body">
                <Tabs options={tabsColumns} />
            </div>
        );
    }
    return null;
};

export default AdminPage;
