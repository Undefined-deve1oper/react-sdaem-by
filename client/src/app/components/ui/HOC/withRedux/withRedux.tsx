import React from "react";
import { Provider } from "react-redux";
import createStore from "../../../../store/createStore";
const store = createStore();

const withRedux =
    (Component: any) =>
    ({ ...props }) => {
        return (
            <Provider store={store}>
                <Component {...props} />
            </Provider>
        );
    };

export default withRedux;
