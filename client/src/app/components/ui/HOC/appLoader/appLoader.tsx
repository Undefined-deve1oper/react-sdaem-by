import { useEffect } from "react";
import { useAppDispatch } from "../../../../store";
import {
    loadFilteredPostsList,
    loadPostsList
} from "../../../../store/slices/posts";

interface IAppLoader {
    children: React.ReactChild | React.ReactNode;
}

const AppLoader: React.FC<IAppLoader> = ({ children }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadPostsList());
    }, [dispatch]);

    return <>{children}</>;
};

export default AppLoader;
