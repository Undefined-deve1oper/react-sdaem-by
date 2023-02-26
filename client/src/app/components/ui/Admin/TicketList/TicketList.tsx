import React, { useEffect } from "react";
import { useAppDispatch, useStateSelector } from "../../../../store";
import {
    getTickets,
    getTicketsLoading,
    loadTicketsList
} from "../../../../store/slices/tickets";
import Loader from "../../../common/Loader";
import TicketItem from "../TicketItem";
import { ITicket } from "../TicketItem/TicketItem";

const TicketList: React.FC = () => {
    const dispatch = useAppDispatch();
    const tickets = useStateSelector<ITicket[]>(getTickets());
    const ticketsLoading = useStateSelector(getTicketsLoading());

    useEffect(() => {
        dispatch(loadTicketsList());
    }, []);

    return (
        <ul className="admin__ticket-list">
            {!ticketsLoading ? (
                tickets.length > 0 ? (
                    tickets.map((ticket) => (
                        <li key={ticket._id} className="admin__ticket-item">
                            <TicketItem ticket={ticket} />
                        </li>
                    ))
                ) : (
                    <p className="booking__error-message">
                        Список тикетов пуст
                    </p>
                )
            ) : (
                <div className="admin__ticket-loader">
                    <Loader />
                </div>
            )}
        </ul>
    );
};

export default TicketList;
