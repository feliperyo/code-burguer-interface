import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'


import Offers from '../../assets/offers.png'
import api from '../../services/api'
import { Container, OfferImg, ContainerItems, Image } from "./styles";
import { Button } from '../../components'
import formatCurrency from '../../utils/formatCurrency'

import { useCart } from "../../hooks/CartContext";
import { useHistory } from "react-router-dom";

export function OffersCarousel() {
    const [offers, setOffers] = useState([])
    const { putProductsInCart } = useCart()
    const { push } = useHistory()

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data
                .filter(product => product.offer)
                .map(product => {
                    return { ...product, formatedPrice: formatCurrency(product.price) }
                })

            setOffers(onlyOffers)
        }

        loadOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemToShow: 1 },
        { width: 400, itemToShow: 2 },
        { width: 600, itemToShow: 3 },
        { width: 900, itemToShow: 4 },
        { width: 1300, itemToShow: 5 }
    ]

    return (
        <Container>
            <OfferImg src={Offers} alt="logo da oferta" />

            <Carousel itemsToShow={5} style={{ width: '80%' }} breakPoints={breakPoints}>
                {offers && offers.map(product => (
                    <ContainerItems key={product.id}>
                        <Image src={product.url} alt="foto do produto" />
                        <p>{product.name}</p>
                        <p>{product.formatedPrice}</p>
                        <Button
                            onClick={() => {
                                putProductsInCart(product)
                                push('/carrinho')
                            }} style={{ width: '100%', height: '50px', borderRadius: '8px' }}>Peça agora!</Button>
                    </ContainerItems>
                ))}
            </Carousel>
        </Container>
    )
}