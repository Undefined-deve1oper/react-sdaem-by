import React, { useEffect } from "react";
import { useForm } from "../../../../hooks";
import useDebounce from "../../../../hooks/useDebounce";
import { EstateItem } from "../../../../store/slices/estates";
import { BookingDateType } from "../../../../types/types";
import {
    getFormatDate,
    getPresenceBookingDate
} from "../../../../utils/dateHelpers";
import { DatePickerField } from "../../../common/Fields";
import { validatorConfig } from "./validatorConfig";

type BookingFilterPanelProps = {
    estates: EstateItem[];
    onFilterQuery: (data: BookingDateType, estates: EstateItem[]) => void;
};

const BookingFilterPanel: React.FC<BookingFilterPanelProps> = ({
    estates,
    onFilterQuery
}) => {
    const { data, handleChange, errors } = useForm(
        {
            entry: getPresenceBookingDate(1),
            departure: getPresenceBookingDate(2)
        },
        false,
        validatorConfig
    );

    useEffect(() => {
        onFilterQuery(data, estates);
    }, [data, estates]);

    return (
        <div className="admin__dates">
            <div className="admin__date-fields">
                <DatePickerField
                    name="entry"
                    label="Заезд"
                    value={data.entry}
                    onChange={handleChange}
                    minDate={new Date("1955-01-01")}
                    error={errors.entry}
                />
                <DatePickerField
                    name="departure"
                    label="Выезд"
                    value={data.departure}
                    onChange={handleChange}
                    minDate={new Date("1955-01-01")}
                    error={errors.departure}
                />
            </div>
            {data.entry && data.departure && (
                <h3 className="admin__booking-date">
                    Товар доступный для бронирования на{" "}
                    {getFormatDate(data.entry)} -{" "}
                    {getFormatDate(data.departure)}
                </h3>
            )}
        </div>
    );
};

export default BookingFilterPanel;
