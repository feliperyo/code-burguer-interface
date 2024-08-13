import React from "react";

import CartLogo from '../../assets/cart-logo.png'

import { Container, CartImg, Wrapper } from "./styles";
import { CartItems, CartResume } from '../../components'

export function Cart() {

    return (
        <Container>
            <CartImg src={CartLogo} alt="logo carrinho" />
            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
        </Container>
    )
}