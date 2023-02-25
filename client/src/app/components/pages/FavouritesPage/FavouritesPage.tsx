import React from "react";
import { getCurrentUserId, useStateSelector } from "../../../store";
import { getEstatesByFavouritesList } from "../../../store/slices/estates";
import {
    getFavouritesList,
    getFavouritesLoadingStatus,
    getFavouritesByUserId
} from "../../../store/slices/favourites";
import { EstatesList } from "../../ui/Estates";

const FavouritesPage: React.FC = () => {
    const currentUserId = useStateSelector(getCurrentUserId());
    const favoritesLoading = useStateSelector(getFavouritesLoadingStatus());
    const favourites = useStateSelector(getFavouritesByUserId(currentUserId!));
    const estates = useStateSelector(getEstatesByFavouritesList(favourites));

    if (!favoritesLoading && estates.length === 0) {
        return (
            <p className="booking__error-message">
                Список избранных товаров пуст
            </p>
        );
    }

    return (
        <div className="favourites-page__row">
            <EstatesList estates={estates} />
        </div>
    );
};

export default FavouritesPage;
