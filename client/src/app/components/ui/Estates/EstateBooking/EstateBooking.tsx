import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { getIsLoggedIn, useStateSelector } from "../../../../store";
import { getEstateById } from "../../../../store/slices/estates";
import Booking from "../../Booking";

const EstateBooking: React.FC = () => {
    const isLoggedIn = useStateSelector(getIsLoggedIn());
    const { estateId } = useParams<{ estateId: string }>();
    const estate = useStateSelector(getEstateById(estateId));

    if (estate) {
        return (
            <section className="estates-booking">
                <h2 className="estates-booking__title">Бронирование</h2>
                <div className="estates-booking__block">
                    {isLoggedIn ? (
                        <Booking {...estate} />
                    ) : (
                        <p className="estate-booking__error">
                            Для того чтобы бронировать товар необходимо{" "}
                            <NavLink
                                to="/login/signin"
                                className="estate-booking__error _link"
                            >
                                войти в аккаунт
                            </NavLink>
                        </p>
                    )}
                </div>
            </section>
        );
    }
    return null;
};

export default EstateBooking;
