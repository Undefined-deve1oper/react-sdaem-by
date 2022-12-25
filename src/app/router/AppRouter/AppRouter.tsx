import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {publicRoutes} from "../routes";

const AppRouter = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
                {publicRoutes.map((route) =>
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
        </Suspense>
    );
};

export default AppRouter;
