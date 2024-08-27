import React from "react";
import PropTypes from 'prop-types'

import { useCart } from "../../hooks/CartContext";

import { Container, Image, ProductName, ProductPrice, ButtonStyle } from './styles'

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export function CardProducts({ product }) {
    const { putProductsInCart } = useCart()
    const { push } = useHistory()

    return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />

            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <ButtonStyle
                    onClick={() => {
                        putProductsInCart(product)
                        push('/carrinho')
                    }}>Adicionar</ButtonStyle>
            </div>

        </Container>
    )
}

CardProducts.propTypes = {
    product: PropTypes.object
}