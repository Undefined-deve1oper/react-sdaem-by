import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
    getIsLoggedIn,
    getUsersLoadingStatus,
    loadUsersList,
    useAppDispatch
} from "../../../../store";
import { loadBooking } from "../../../../store/slices/booking";
import { loadCommentsList } from "../../../../store/slices/comments";
import { loadEstatesList } from "../../../../store/slices/estates";
import { loadFavouritesList } from "../../../../store/slices/favourites";
import { loadPostsList } from "../../../../store/slices/posts";
import Loader from "../../../common/Loader";

const AppLoader = ({ children }: any) => {
    const usersStatusLoading = useSelector(getUsersLoadingStatus());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadFavouritesList());
        dispatch(loadCommentsList());
        dispatch(loadEstatesList());
        dispatch(loadPostsList());
        dispatch(loadUsersList());
        dispatch(loadBooking());
    }, [isLoggedIn]);

    if (usersStatusLoading) return <Loader visible={true} />;

    return children;
};

export default AppLoader;
