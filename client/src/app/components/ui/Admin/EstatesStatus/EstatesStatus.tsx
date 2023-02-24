import React from "react";
import { ADMIN_FILTER_KEY } from "../../../../constants/sessionStorageConfig";
import { useFilters } from "../../../../hooks";
import { useStateSelector } from "../../../../store";
import { getBookingList } from "../../../../store/slices/booking";
import { EstateItem } from "../../../../store/slices/estates";
import { EstatesList } from "../../Estates";
import BookingFilterPanel from "../BookingFilterPanel";

type EstatesStatusProps = {
    estates: EstateItem[];
};

const EstatesStatus: React.FC<EstatesStatusProps> = ({ estates, ...rest }) => {
    const bookingList = useStateSelector(getBookingList());
    const { handleFilter, filteredItems } = useFilters(
        estates,
        bookingList,
        ADMIN_FILTER_KEY
    );
    return (
        <div className="admin-status">
            <BookingFilterPanel
                onFilterQuery={handleFilter}
                estates={estates}
            />
            <EstatesList estates={filteredItems || []} {...rest} />
        </div>
    );
};

export default EstatesStatus;
