import React from "react";

const EstatesFeaturesList = ({ data }: { data: any[] }) => {
    const renderValue = (value: any) => {
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                return (
                    <ul>
                        {value.map((item, index) => (
                            <li key={index}>{renderValue(item)}</li>
                        ))}
                    </ul>
                );
            } else {
                return (
                    <table>
                        <tbody>
                            {Object.entries(value).map(([key, val]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{renderValue(val)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );
            }
        } else {
            return value;
        }
    };

    return (
        <div className="estates-features">
            <table className="estates-features__list">
                <tbody>
                    {Object.entries(data).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{renderValue(value)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EstatesFeaturesList;
