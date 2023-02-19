import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
    getIsLoggedIn,
    getUsersLoadingStatus,
    loadUsersList,
    useAppDispatch
} from "../../../../store";
import { loadPostsList } from "../../../../store/slices/posts";
import Loader from "../../../common/Loader";

const AppLoader = ({ children }: any) => {
    const usersStatusLoading = useSelector(getUsersLoadingStatus());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadUsersList());
        dispatch(loadPostsList());
    }, [dispatch, isLoggedIn]);

    if (usersStatusLoading) return <Loader />;

    return children;
};

export default AppLoader;
