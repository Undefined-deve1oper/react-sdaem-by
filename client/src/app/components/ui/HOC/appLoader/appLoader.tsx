import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
    getIsLoggedIn,
    getUsersLoadingStatus,
    loadUsersList,
    useAppDispatch
} from "../../../../store";
import { loadBooking } from "../../../../store/slices/booking";
import { loadEstatesList } from "../../../../store/slices/estates";
import { loadPostsList } from "../../../../store/slices/posts";
import Loader from "../../../common/Loader";

const AppLoader = ({ children }: any) => {
    const usersStatusLoading = useSelector(getUsersLoadingStatus());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadUsersList());
        dispatch(loadPostsList());
        dispatch(loadEstatesList());
        dispatch(loadBooking());
    }, [isLoggedIn]);

    if (usersStatusLoading) return <Loader visible={true} />;

    return children;
};

export default AppLoader;
