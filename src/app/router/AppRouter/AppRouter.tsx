import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {routes} from "../routes";

const AppRouter = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
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
        </Suspense>
    );
};

export default AppRouter;
