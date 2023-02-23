import React from "react";
import { useDialog } from "../../../../hooks";
import {
    getCurrentUserData,
    getCurrentUserId,
    useStateSelector
} from "../../../../store";
import { getBookingById } from "../../../../store/slices/booking";
import Loader from "../../../common/Loader";
import { BookingForm } from "../../Forms";
import SuccessModal from "../../Modals";

interface IBooking {
    _id: string;
    price: number;
}

const Booking: React.FC<IBooking> = ({ _id, price }) => {
    const currentUserId = useStateSelector(getCurrentUserId());
    const currentBooking = useStateSelector(
        getBookingById({ _id: currentUserId })
    );
    const { open: openDialog, handleClickOpen, handleClose } = useDialog();

    return (
        <>
            <BookingForm
                id={_id}
                price={price}
                onOpenDialog={handleClickOpen}
            />
            {openDialog && currentBooking && (
                <SuccessModal
                    currentBooking={currentBooking}
                    open={openDialog}
                    onClose={handleClose}
                />
            )}
        </>
    );
};

export default Booking;
