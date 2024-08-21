import React from "react";

import { useCart } from "../../hooks/CartContext";

import TrashImg from '../../assets/trash.png'

import { Container, Header, Body, EmptyCart, ProductImage, TrashImage, BtnTrash } from "./styles";
import formatCurrency from "../../utils/formatCurrency";

export function CartItems() {
    const { cartProducts, increaseProducts, decreaseProducts, deleteProducts } = useCart()

    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{ paddingRight: 30 }}>Quantidade</p>
                <p>Total</p>
                <p></p>
            </Header>

            {cartProducts && cartProducts.length > 0 ?
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <ProductImage src={product.url} alt="foto do produto" />
                        <p style={{ width: 150 }}>{product.name}</p>
                        <p>{product.formatedPrice}</p>
                        <div className="quantity-container">
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button>
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)} </p>
                        <BtnTrash onClick={() => deleteProducts(product.id)}><TrashImage src={TrashImg} alt="icone de lixo" /></BtnTrash>
                    </Body>
                ))
                : (
                    <EmptyCart>Carrinho vazio, adicione algum item.</EmptyCart>
                )
            }
        </Container>
    )
}