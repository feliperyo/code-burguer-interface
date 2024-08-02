import React from "react";
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute({ component, ...props }) {
    const user = localStorage.getItem('codeburguer:userData')

    if (!user) {
        return <Redirect to="/login" />
    }

    return <Route {...props} component={component} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}