import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../routes";

const AppRouter = () => {
    return (
        <Switch>
            {routes.map((route) =>
                route.path ? (
                    <Route
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                ) : null
            )}
        </Switch>
    );
};

export default AppRouter;
