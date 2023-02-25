import { toast } from "react-toastify";
import {
    getCurrentUserId,
    getIsLoggedIn,
    useAppDispatch,
    useStateSelector
} from "../store";
import {
    createFavourite,
    getIsFavorite,
    removeFavourite
} from "../store/slices/favourites";

export default function useFavourite(estateId: string) {
    const isLoggedIn = useStateSelector(getIsLoggedIn());
    const currentUserId = useStateSelector(getCurrentUserId());
    const isFavourite = useStateSelector(
        getIsFavorite(estateId, currentUserId!)
    );
    const dispatch = useAppDispatch();

    const handleSelectFavorite = () => {
        if (isLoggedIn) {
            if (!isFavourite) {
                dispatch(
                    createFavourite({
                        userId: currentUserId!,
                        estateId
                    })
                );
            } else {
                dispatch(
                    removeFavourite({
                        userId: currentUserId!,
                        estateId
                    })
                );
            }
        } else {
            toast.info("Для этого действия войдите в аккаунт");
        }
    };

    return { isFavourite, handleSelectFavorite };
}
