import React from "react";
import { useStateSelector } from "../../../store";
import {
    getEstatesList,
    getestatesLoadingStatus
} from "../../../store/slices/estates";
import { SkeletonEstatesList } from "../../common/Skeletons/Estates";
import { EstatesList, EstatesRecommended } from "../../ui/Estates";

const EstatesPage: React.FC = () => {
    const estates = useStateSelector(getEstatesList());
    const estatesLoading = useStateSelector(getestatesLoadingStatus());

    return (
        <section className="estates">
            <EstatesRecommended />
            <div className="estates__container _container">
                {!estatesLoading ? (
                    <EstatesList estates={estates} />
                ) : (
                    <SkeletonEstatesList />
                )}
            </div>
        </section>
    );
};

export default EstatesPage;
