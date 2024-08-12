import React from "react";
import PropTypes from 'prop-types'

import { useCart } from "../../hooks/CartContext";

import { Container, Image, ProductName, ProductPrice } from './styles'
import { Button } from '../../components'

export function CardProducts({ product }) {
    const { putProductsInCart } = useCart()

    return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />

            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button onClick={() => putProductsInCart(product)}>Adicionar</Button>
            </div>

        </Container>
    )
}

CardProducts.propTypes = {
    product: PropTypes.object
}