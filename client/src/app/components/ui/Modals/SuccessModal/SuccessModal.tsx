import React from "react";
import Button from "../../../common/Button";
import { useNavigate } from "react-router-dom";
import { getCurrentUserId, useStateSelector } from "../../../../store";
import { getEstateById } from "../../../../store/slices/estates";
import { BookingType } from "../../../../types/types";
import { getFormatDate } from "../../../../utils/dateHelpers";

type SuccessModalProps = {
    currentBooking: BookingType;
    open: boolean;
    onClose: () => void;
};

const SuccessModal: React.FC<SuccessModalProps> = ({
    currentBooking,
    open,
    onClose,
    ...rest
}) => {
    const navigate = useNavigate();
    const bookedEstate = useStateSelector(
        getEstateById(currentBooking.estateId)
    );
    const currentUserId = useStateSelector(getCurrentUserId());

    return (
        <div
            className={"modal" + (open ? " _open" : "")}
            {...rest}
            onClick={onClose}
        >
            <div
                className="estate-booking__modal"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="estate-booking__modal-success_block">
                    <h3 className="estate-booking__modal-title">
                        Товар успешно забронирован
                    </h3>
                </div>
                <ul className="estate-booking__modal-list">
                    <li className="estate-booking__modal-item">
                        <span className="estate-booking__modal-info">
                            Товар: {bookedEstate.title}
                        </span>
                    </li>
                    <li className="estate-booking__modal-item">
                        <span className="estate-booking__modal-info">
                            Использование с:{" "}
                            {getFormatDate(currentBooking.entry)} (13:00)
                        </span>
                    </li>
                    <li className="estate-booking__modal-item">
                        <span className="estate-booking__modal-info">
                            До: {getFormatDate(currentBooking.departure)}
                            (13:00)
                        </span>
                    </li>
                    <li className="estate-booking__modal-item">
                        <span className="estate-booking__modal-info">
                            Номер брони: {currentBooking._id}
                        </span>
                    </li>
                </ul>
                <div className="divider" />
                <h3 className="estate-booking__modal-price">
                    Итого: {currentBooking.totalPrice} рублей
                </h3>

                <Button
                    className="estate-booking__button"
                    onClick={() => navigate(`/users/${currentUserId}/booking`)}
                >
                    Мои бронирования
                </Button>
            </div>
        </div>
    );
};

export default SuccessModal;
