import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { Cart, Home, Login, Products, Register, Admin } from '../containers'
import PrivateRoute from "./private-routes";
import paths from "../constants/paths";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path={paths.Login} />
                <Route component={Register} path={paths.Cadastro} />
                <PrivateRoute exact component={Home} path={paths.Home} />
                <PrivateRoute component={Products} path={paths.ProductsHome} />
                <PrivateRoute component={Cart} path={paths.Cart} />

                <PrivateRoute component={Admin} path={paths.Order} isAdmin />
                <PrivateRoute component={Admin} path={paths.Products} isAdmin />
            </Switch>
        </Router>
    )
}

export default Routes