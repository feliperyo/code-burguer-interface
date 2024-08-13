import React from "react";

import { useCart } from "../../hooks/CartContext";

import { Container, Header, Body } from "./styles";
import formatCurrency from "../../utils/formatCurrency";

export function CartItems() {
    const { cartProducts } = useCart()
    console.log(cartProducts)

    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.map(product => (
                <Body key={product.id}>
                    <img src={product.url} alt="foto do produto" />
                    <p>{product.name}</p>
                    <p>{product.formatedPrice}</p>
                    <p>{product.quantity}</p>
                    <p>{formatCurrency(product.quantity * product.price)} </p>
                </Body>
            ))}
        </Container>
    )
}