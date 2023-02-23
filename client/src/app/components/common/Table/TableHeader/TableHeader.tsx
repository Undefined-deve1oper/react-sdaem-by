import React from "react";

type TableHeaderProps = {
    columns: any[];
};

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
    return (
        <thead className="table-header">
            <tr className="table-header__item">
                {Object.keys(columns).map((column: any) => (
                    <th
                        key={column}
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
