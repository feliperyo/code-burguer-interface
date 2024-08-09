import React, { useEffect, useState } from "react";

import Category from '../../assets/category.png'
import api from '../../services/api'
import { Container, CategoryImg } from "./styles";

function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <CategoryImg src={Category} alt="logo da categoria" />
        </Container>
    )
}

export default CategoryCarousel