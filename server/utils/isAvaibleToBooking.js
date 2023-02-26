const Booking = require("../models/Booking");

const isAvaibleToBooking = async (currentBooking) => {
    const bookingListByEstate = await Booking.find({
        estateId: currentBooking.estateId
    });
    const currentBookingEntry = new Date(currentBooking.entry).getTime();
    const currentBookingDeparture = new Date(
        currentBooking.departure
    ).getTime();
    const isBookingOnThisDate = bookingListByEstate.some((booking) => {
        const bookingEntry = new Date(booking.entry).getTime();
        const bookingDeparture = new Date(booking.departure).getTime();

        const isValid =
            (currentBookingEntry >= bookingEntry &&
                currentBookingEntry <= bookingDeparture) ||
            (currentBookingDeparture >= bookingEntry &&
                currentBookingDeparture <= bookingDeparture);

        return isValid;
    });
    if (!isBookingOnThisDate) {
        return true;
    }
    return false;
};

module.exports = isAvaibleToBooking;
