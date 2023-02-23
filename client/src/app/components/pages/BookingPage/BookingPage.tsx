import React from "react";
import { getCurrentUserId, useStateSelector } from "../../../store";
import { getBookingLoading } from "../../../store/slices/booking";
import Loader from "../../common/Loader";
import { BookingList } from "../../ui/Booking";

const BookingPage: React.FC = () => {
    const currentUserId = useStateSelector(getCurrentUserId());
    const bookingLoading = useStateSelector(getBookingLoading());

    if (!bookingLoading && currentUserId) {
        return (
            <div className="booking">
                <BookingList currentUserId={currentUserId} />
                <div className="booking__push"></div>
            </div>
        );
    }

    return <Loader visible={true} />;
};

export default BookingPage;
