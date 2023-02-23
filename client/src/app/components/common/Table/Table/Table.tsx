import React, { useEffect } from "react";
import { usePaginate } from "../../../../hooks";
import { Order } from "../../../../hooks/useSort";
import { UserType } from "../../../../types/types";
import TableBody from "../TableBody";
import TableFooter from "../TableFooter";
import TableHeader from "../TableHeader";

export interface IColumn {
    [key: string]: {
        name?: string;
        path?: string;
        component?: (user: UserType) => Element;
    };
}

type TableProps = {
    data: UserType[];
    columns: IColumn[];
    selectedSort: { path: keyof UserType; order: Order };
    onSort: (item: any) => void;
    children?: React.ReactChild | React.ReactNode;
};

export const Table: React.FC<TableProps> = ({ children, data, columns }) => {
    const {
        itemsListCrop: dataCrop,
        handlePageChange,
        page,
        limit,
        handleLimitChange
    } = usePaginate(data, 3, 1);

    useEffect(() => {
        if (dataCrop.length === 0) {
            handlePageChange(0);
        }
    }, [dataCrop]);

    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader columns={columns} />
                    <TableBody data={dataCrop} columns={columns} />
                    <TableFooter
                        {...{
                            data,
                            handleLimitChange,
                            page,
                            limit,
                            handlePageChange
                        }}
                    />
                </>
            )}
        </table>
    );
};

export default Table;
