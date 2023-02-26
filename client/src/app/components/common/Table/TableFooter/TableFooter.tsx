import React from "react";
import { pageSizesList } from "../../../../constants/appFilter";
import Pagination from "../../Pagination";

type TableFooterProps = {
    handleLimitChange: (event: any) => void;
    page: number;
    limit: number;
    handlePageChange: (event: any) => void;
    data: any[];
};

const TableFooter: React.FC<TableFooterProps> = ({
    handleLimitChange,
    page,
    limit,
    handlePageChange,
    data
}) => {
    return (
        <tbody className="table-footer">
            <tr className="table-footer__item">
                <td>
                    Отображать по:{" "}
                    <select
                        name="page-size"
                        onChange={handleLimitChange}
                        className={"table-footer__select"}
                    >
                        {pageSizesList.map(
                            (item: { value: number; label: string }) => (
                                <option
                                    key={item.value}
                                    value={item.value}
                                    defaultValue="3"
                                >
                                    {item.label}
                                </option>
                            )
                        )}
                    </select>
                </td>
            </tr>
            <tr className="table-footer__item">
                <td>
                    <Pagination
                        currentPage={page}
                        itemsCount={data.length}
                        onPageChange={handlePageChange}
                        pageSize={limit}
                    />
                </td>
            </tr>
        </tbody>
    );
};

export default TableFooter;
