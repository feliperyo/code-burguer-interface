import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Cart from '../../assets/cart-header.svg'
import Person from '../../assets/person-header.png'

import { Container, ContainerLeft, PageLink, ContainerRight, Line, ContainerText, PageLinkExit } from "./styles";

export function Header() {
    const {
        push,
        location: { pathname }
    } = useHistory()

    return (
        <Container>

            <ContainerLeft>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>Home</PageLink>
                <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('/produtos')}>Ver Produtos</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={() => push('/carrinho')}>
                    <img src={Cart} alt="carrinho" />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt="pessoa" />
                </PageLink>

                <ContainerText>
                    <p>Olá, Felipe</p>
                    <PageLinkExit>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>

        </Container>
    )
}