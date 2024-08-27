import React from 'react'
import { Container, ContainerItems } from './styles'
import { SideMenuAdmin } from '../../components'
import paths from "../../constants/paths";

import PropTypes from 'prop-types'

import NewProduct from './NewProduct'
import ListProducts from './ListProducts'
import Orders from './Orders'

export function Admin({ match: { path } }) {

    return (
        <Container>
            <SideMenuAdmin path={path} />
            <ContainerItems>
                {path === paths.Order && <Orders />}
                {path === paths.Products && <ListProducts />}
                {path === paths.NewProduct && <NewProduct />}
            </ContainerItems>
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string
    })
}