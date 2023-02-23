import React, { useState } from "react";
import Button from "../../../common/Button";
import {
    getBookingError,
    reserveEstate
} from "../../../../store/slices/booking";
import { validatorConfig } from "./validatorConfig";
import { useAppDispatch, useStateSelector } from "../../../../store";
import { useForm } from "../../../../hooks";
import {
    getPresenceBookingDate,
    getDaysCountFromTimeStamp
} from "../../../../utils/dateHelpers";
import { DatePickerField } from "../../../common/Fields";

type BookingFormProps = {
    id: string;
    price: number;
    onOpenDialog: () => void;
};

const BookingForm: React.FC<BookingFormProps> = ({
    id,
    price: dayPrice,
    onOpenDialog
}) => {
    const dispatch = useAppDispatch();
    const bookingServerError = useStateSelector(getBookingError());
    const [bookingError, setBookingError] = useState<string>("");
    const { data, errors, handleChange, validate } = useForm(
        {
            entry: getPresenceBookingDate(1),
            departure: getPresenceBookingDate(2)
        },
        false,
        validatorConfig
    );

    const getEstatePrice = (data: any) => {
        if (data.entry && data.departure) {
            const daysCount = getDaysCountFromTimeStamp(
                data.departure.getTime() - data.entry.getTime()
            );
            return daysCount * dayPrice;
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (validate(data)) {
            const currentBookingEntry = new Date(data.entry).getTime();
            const currentBookingDeparture = new Date(data.departure).getTime();
            const isCorrectFormat =
                currentBookingEntry < currentBookingDeparture ||
                currentBookingEntry === currentBookingDeparture;

            if (new Date(data.entry).getTime() < Date.now()) {
                setBookingError("Нельзя забронировать номер в прошлом");
                return;
            }
            if (!isCorrectFormat) {
                setBookingError("Отъезд не может быть позже или равен выезду");
                return;
            }

            const bookingEstate = {
                estateId: id,
                totalPrice: getEstatePrice(data) || 0,
                ...data
            };

            dispatch(reserveEstate(bookingEstate));
            onOpenDialog();
        }
    };
    const isValid = Object.keys(errors).length === 0;

    return (
        <form className="booking-estate__form" onSubmit={handleSubmit}>
            <div className="booking-estate__item">
                <DatePickerField
                    label="С"
                    name="entry"
                    value={data.entry}
                    error={errors.entry}
                    onChange={handleChange}
                    minDate={new Date("1955-01-01")}
                />
                <DatePickerField
                    label="До"
                    name="departure"
                    value={data.departure}
                    error={errors.departure}
                    onChange={handleChange}
                    minDate={new Date("1955-01-01")}
                />
            </div>
            <div className="booking-estate__item booking-estate__submit-block">
                {isValid && (
                    <h3 className="booking-estate__price">
                        Итого: {getEstatePrice(data)}₽
                    </h3>
                )}
                <Button className="booking-estate__button" type="submit">
                    Забронировать
                </Button>
                {bookingError ||
                    (bookingServerError && (
                        <span className="booking-estate__error">
                            {bookingError || bookingServerError}
                        </span>
                    ))}
            </div>
        </form>
    );
};

export default BookingForm;
