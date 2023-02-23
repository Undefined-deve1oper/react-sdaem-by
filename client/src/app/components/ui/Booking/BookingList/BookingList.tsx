import React from "react";
import { usePaginate } from "../../../../hooks";
import { useStateSelector } from "../../../../store";
import {
    getBookingList,
    getUserBooking
} from "../../../../store/slices/booking";
import Pagination from "../../../common/Pagination";
import BookingCard from "../BookingCard";

type BookingListProps = {
    role?: string;
    currentUserId: string;
};

const BookingList: React.FC<BookingListProps> = ({ role, currentUserId }) => {
    const userBooking = useStateSelector(getUserBooking(currentUserId));
    const bookingList = useStateSelector(getBookingList());
    const { page, itemsListCrop, limit, handlePageChange } = usePaginate(
        role === "ADMIN" ? bookingList : userBooking,
        3,
        1
    );

    return (
        <>
            {itemsListCrop.length > 0 ? (
                <>
                    <ul className="booking__list">
                        {itemsListCrop.map((booking) => (
                            <li key={booking._id} className="booking__item">
                                <BookingCard role={role} item={booking} />
                            </li>
                        ))}
                    </ul>
                    <Pagination
                        currentPage={page}
                        itemsCount={userBooking?.length || bookingList.length}
                        onPageChange={handlePageChange}
                        pageSize={limit}
                    />
                </>
            ) : (
                <p className="booking__error-message">
                    У вас пока нет бронирований
                </p>
            )}
        </>
    );
};

export default BookingList;
