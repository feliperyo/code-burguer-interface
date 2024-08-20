import React from "react";
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'
import { Header } from "../components";

function PrivateRoute({ component, isAdmin, ...props }) {
    const user = localStorage.getItem('codeburguer:userData')

    if (!user) {
        return <Redirect to="/login" />
    }

    if (isAdmin && !JSON.parse(user).admin) {
        return <Redirect to="/" />
    }

    return (
        <>
            {!isAdmin && <Header />}
            <Route {...props} component={component} />
        </>
    )
}

export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool
}