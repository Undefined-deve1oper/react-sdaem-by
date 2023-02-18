import { useEffect } from "react";
import { useAppDispatch, useStateSelector } from "../../../../store";
import { loadPostsList } from "../../../../store/slices/posts";

interface IAppLoader {
    children: React.ReactChild | React.ReactNode;
}

const AppLoader: React.FC<IAppLoader> = ({ children }) => {
    const dispatch = useAppDispatch();
    const currentPage = useStateSelector((state) => state.posts.currentPage);
    const perPage = useStateSelector((state) => state.posts.perPage);

    useEffect(() => {
        dispatch(loadPostsList(perPage, currentPage));
    }, [dispatch]);

    return <>{children}</>;
};

export default AppLoader;
