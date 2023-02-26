import React from "react";
import { useStateSelector } from "../../../../store";
import { getEstateById } from "../../../../store/slices/estates";
import { BookingType } from "../../../../types/types";
import QRCode from "react-qr-code";
import { getFormatDate } from "../../../../utils/dateHelpers";
import Button from "../../../common/Button";

type CheckModalProps = {
    booking: BookingType;
    open: boolean;
    onClose: () => void;
};

const CheckModal: React.FC<CheckModalProps> = ({ booking, open, onClose }) => {
    const bookedEstate = useStateSelector(getEstateById(booking.estateId));

    return (
        <div className={"modal" + (open ? " _open" : "")} onClick={onClose}>
            <div className="estate-booking__modal">
                <div onClick={(e) => e.stopPropagation()}>
                    <div className="estate-booking__modal-success_block">
                        <QRCode
                            value={"Номер бронирования " + booking._id}
                            size={180}
                        />
                    </div>
                    <ul className="estate-booking__modal-list">
                        <li className="estate-booking__modal-item">
                            <span className="estate-booking__modal-info">
                                Товар: {bookedEstate.title}
                            </span>
                        </li>
                        <li className="estate-booking__modal-item">
                            <span className="estate-booking__modal-info">
                                Использование с: {getFormatDate(booking.entry)}{" "}
                                (13:00)
                            </span>
                        </li>
                        <li className="estate-booking__modal-item">
                            <span className="estate-booking__modal-info">
                                До: {getFormatDate(booking.departure)}
                                (13:00)
                            </span>
                        </li>
                        <li className="estate-booking__modal-item">
                            <span className="estate-booking__modal-info">
                                Номер брони: {booking._id}
                            </span>
                        </li>
                    </ul>
                    <div className="divider" />
                    <h3 className="estate-booking__modal-price">
                        Итого: {booking.totalPrice} рублей
                    </h3>
                </div>

                <Button className="estate-booking__button" onClick={onClose}>
                    Закрыть
                </Button>
            </div>
        </div>
    );
};

export default CheckModal;
