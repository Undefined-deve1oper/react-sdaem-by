import React from "react";
import Button from "../../../common/Button";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../../../store/slices/users";
import { deleteUserBooking } from "../../../../store/slices/booking";
import { BookingType } from "../../../../types/types";
import { useAppDispatch, useStateSelector } from "../../../../store";
import { getEstateById } from "../../../../store/slices/estates";
import { useDialog } from "../../../../hooks";
import { getFormatDate } from "../../../../utils/dateHelpers";
import { CheckModal } from "../../Modals";

type BookingCardProps = {
    item: BookingType;
    role: string | undefined;
};

const BookingCard: React.FC<BookingCardProps> = ({ item, role = "USER" }) => {
    const dispatch = useAppDispatch();
    const bookingAuthor = useStateSelector(getUserById(item.userId));
    const estate = useStateSelector(getEstateById(item.estateId));
    const { open, handleClickOpen, handleClose } = useDialog();
    const navigate = useNavigate();

    const deleteBooking = (booking: any) => {
        dispatch(deleteUserBooking(booking._id));
    };

    const isOwnerOrAdmin =
        role === "ADMIN" || bookingAuthor?._id === item.userId;

    if (estate && bookingAuthor) {
        return (
            <div className="booking__card">
                <div className="booking-header">
                    <ul className="booking-header__list">
                        <li className="booking-header__item">
                            <h3 className="booking-header__title">
                                Номер товара:
                            </h3>
                            <p className="booking-header__text">{item._id}</p>
                        </li>
                        <li className="booking-header__item">
                            <h3 className="booking-header__title">Товар:</h3>
                            <p className="booking-header__text">
                                {estate.title}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="booking__date date-booking">
                    <p className="date-booking__text">
                        <span className="date-booking__title">Заезд:</span>{" "}
                        <span className="date-booking__description">
                            {getFormatDate(item.entry)} в 13:00
                        </span>
                    </p>
                    <p className="date-booking__text">
                        <span className="date-booking__title">Выезд:</span>{" "}
                        <span className="date-booking__description">
                            {getFormatDate(item.departure)} в 13:00
                        </span>
                    </p>
                </div>
                <div className="booking-buttons">
                    <Button
                        onClick={() => navigate(`/estates/${estate._id}`)}
                        className={"booking-buttons__item"}
                    >
                        Страница товара
                    </Button>
                    <Button
                        onClick={handleClickOpen}
                        className={"booking-buttons__item outlined"}
                    >
                        Показать чек
                    </Button>
                    {isOwnerOrAdmin && (
                        <Button
                            onClick={() => deleteBooking(item)}
                            className={"booking-buttons__item cancel"}
                        >
                            Снять бронь
                        </Button>
                    )}
                </div>
                <CheckModal booking={item} open={open} onClose={handleClose} />
            </div>
        );
    }
    return null;
};

export default BookingCard;
