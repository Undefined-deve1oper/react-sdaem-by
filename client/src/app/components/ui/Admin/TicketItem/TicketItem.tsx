import React from "react";
import { useDialog } from "../../../../hooks";
import { useAppDispatch } from "../../../../store";
import { confirmTicket, removeTicket } from "../../../../store/slices/tickets";
import { getFormatDate } from "../../../../utils/dateHelpers";
import Button from "../../../common/Button";
import { TicketModal } from "../../Modals";

export interface ITicket {
    _id?: string;
    email: string;
    name: string;
    message: string;
    status: string;
    cause: string;
    created_at: string;
    updated_at: string;
}

type TicketItemProps = {
    ticket: ITicket;
};

const TicketItem: React.FC<TicketItemProps> = ({ ticket }) => {
    const dispatch = useAppDispatch();
    const { open, handleClickOpen, handleClose } = useDialog();

    const handleTicketConfirm = () => {
        dispatch(confirmTicket({ ...ticket, status: "confirmed" }));
        handleClickOpen();
    };
    const handleRemoveTicket = (ticketId: string) => {
        dispatch(removeTicket(ticketId));
    };

    return (
        <div>
            <div className="admin__ticket-block">
                <span className="admin__ticket-created">
                    {getFormatDate(ticket.created_at)}
                </span>
                <p className="admin__ticket-text">{ticket.name}</p>
                <p className="admin__ticket-text">{ticket.email}</p>
                <Button
                    className="admin__ticket-button"
                    onClick={
                        ticket.status === "pending"
                            ? () => handleTicketConfirm()
                            : () => handleClickOpen()
                    }
                >
                    {ticket.status === "pending"
                        ? "Принять тикет"
                        : "На рассмотрении"}
                </Button>
            </div>
            <TicketModal
                open={open}
                onClose={handleClose}
                ticket={ticket}
                onRemoveTicket={handleRemoveTicket}
            />
        </div>
    );
};

export default TicketItem;
