import React from "react";
import { useTranslation } from "../../../../../i18n";

type EstatesFeaturesListProps = {
    data: any[];
};

const EstatesFeaturesList: React.FC<EstatesFeaturesListProps> = ({ data }) => {
    const { t } = useTranslation();

    const renderValue = (value: string | object) => {
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
                    <table className="estates-features__list">
                        <tbody>
                            {Object.entries(value).map(([key, val]) => (
                                <tr key={key}>
                                    <td>{t(key)}</td>
                                    <td>{renderValue(val)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );
            }
        } else {
            return t(value);
        }
    };

    return (
        <div className="estates-features">
            <table className="estates-features__list">
                <tbody>
                    {Object.entries(data).map(([key, value]) => (
                        <tr key={key}>
                            <td>{t(key)}</td>
                            <td>{renderValue(value)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EstatesFeaturesList;
