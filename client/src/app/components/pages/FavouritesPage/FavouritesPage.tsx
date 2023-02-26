import React from "react";
import { usePaginate } from "../../../hooks";
import { getCurrentUserId, useStateSelector } from "../../../store";
import { getEstatesByFavouritesList } from "../../../store/slices/estates";
import {
    getFavouritesList,
    getFavouritesLoadingStatus,
    getFavouritesByUserId
} from "../../../store/slices/favourites";
import Pagination from "../../common/Pagination";
import { EstatesList } from "../../ui/Estates";

const FavouritesPage: React.FC = () => {
    const currentUserId = useStateSelector(getCurrentUserId());
    const favoritesLoading = useStateSelector(getFavouritesLoadingStatus());
    const favourites = useStateSelector(getFavouritesByUserId(currentUserId!));
    const estates: any[] = useStateSelector(
        getEstatesByFavouritesList(favourites)
    );
    const {
        itemsListCrop: estatesListCrop,
        page,
        limit,
        handlePageChange
    } = usePaginate(estates || [], 3, 1);

    if (!favoritesLoading && estates.length === 0) {
        return (
            <p className="booking__error-message">
                Список избранных товаров пуст
            </p>
        );
    }

    return (
        <div>
            <div className={"estates-products__row list"}>
                <EstatesList estates={estatesListCrop} />
            </div>
            {estates.length > limit && (
                <div className="estates-products__pagination">
                    <Pagination
                        itemsCount={estates.length}
                        pageSize={limit}
                        currentPage={page}
                        onPageChange={handlePageChange}
                    />
                    <p className="estates-products__pagination-info">
                        {`${(page - 1) * limit || 1} -  ${
                            limit * page > estates.length
                                ? estates.length
                                : limit * page
                        } из ${estates.length} вариантов аренды`}
                    </p>
                </div>
            )}
        </div>
    );
};

export default FavouritesPage;
