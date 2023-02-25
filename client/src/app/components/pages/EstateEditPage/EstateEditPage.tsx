import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../common/Breadcrumbs";
import { EstateEditForm } from "../../ui/Forms";

const EstateEditPage = () => {
    const { estateId } = useParams<{ estateId: string }>();

    if (estateId) {
        return (
            <div className="product-edit">
                <div className="product-edit__container _container">
                    <Breadcrumbs />
                    <h3 className="product-edit__title">
                        Редактировать объявление
                    </h3>
                    <EstateEditForm estateId={estateId} />
                </div>
            </div>
        );
    }
    return null;
};

export default EstateEditPage;
