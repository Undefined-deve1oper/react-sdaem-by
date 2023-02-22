import queryString from "query-string";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useStateSelector } from "../../../store";
import {
    getEstatesList,
    getestatesLoadingStatus,
    loadEstatesList
} from "../../../store/slices/estates";
import { SkeletonEstatesList } from "../../common/Skeletons/Estates";
import { EstatesList, EstatesRecommended } from "../../ui/Estates";

const EstatesPage: React.FC = () => {
    const { search } = useLocation();
    const { typeId } = queryString.parse(search);
    const dispatch = useAppDispatch();
    const estates = useStateSelector(getEstatesList());
    const estatesLoading = useStateSelector(getestatesLoadingStatus());

    useEffect(() => {
        dispatch(loadEstatesList({ typeId }));
    }, [search]);

    return (
        <>
            <EstatesRecommended />
            <div className="estates__container _container">
                {!estatesLoading ? (
                    <EstatesList estates={estates} />
                ) : (
                    <SkeletonEstatesList />
                )}
            </div>
        </>
    );
};

export default EstatesPage;
