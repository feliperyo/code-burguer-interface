import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'


import Category from '../../assets/category.png'
import api from '../../services/api'
import { Container, CategoryImg, ContainerItems, Image, Button } from "./styles";

export function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }

        loadCategories()
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
            <CategoryImg src={Category} alt="logo da categoria" />

            <Carousel itemsToShow={5} style={{ width: '80%' }} breakPoints={breakPoints}>
                {categories && categories.map(category => (
                    <ContainerItems key={category.id}>
                        <Image src={category.url} alt="foto da categoria" />
                        <Button to={{
                            pathname: '/produtos',
                            state: { categoryId: category.id }
                        }}>{category.name}</Button>
                    </ContainerItems>
                ))}
            </Carousel>
        </Container>
    )
}