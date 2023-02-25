import React from "react";
import { getCurrentUserId, useStateSelector } from "../../../../store";
import { getEstatesByUserId } from "../../../../store/slices/estates";
import { EstatesList } from "../../Estates";

const ProfileUserAds: React.FC = () => {
    const currentUserId = useStateSelector(getCurrentUserId());
    const estates = useStateSelector(getEstatesByUserId(currentUserId));

    return (
        <div className="user-products">
            <h3 className="user-products__title">Мои объявления</h3>
            <div className="user-products__rows">
                {estates.length !== 0 ? (
                    <EstatesList estates={estates} />
                ) : (
                    <p className="user-products__subtitle">
                        У вас пока нет объявлений
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProfileUserAds;
