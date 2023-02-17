import { BrowserRouter } from "react-router-dom";

const withRouter =
    (Component: any) =>
    ({ ...props }) => {
        return (
            <BrowserRouter>
                <Component {...props} />
            </BrowserRouter>
        );
    };

export default withRouter;
