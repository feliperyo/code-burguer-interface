import React from "react";

import CartLogo from '../../assets/cart-logo.png'

import { Container, CartImg } from "./styles";
import { CartItems } from '../../components'

export function Cart() {

    return (
        <Container>
            <CartImg src={CartLogo} alt="logo carrinho" />
            <CartItems />
        </Container>
    )
}