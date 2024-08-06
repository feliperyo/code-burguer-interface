import React, { useEffect } from "react";

import HomeLogo from '../../assets/home-logo.png'

import { Container, HomeImg } from "./styles";
import CategoryCarousel from '../../components/CategoryCarousel'

import api from '../../services/api'

function Home() {

    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('categories')

            console.log(response)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <HomeImg src={HomeLogo} alt="logo home" />
            <CategoryCarousel />
        </Container>
    )
}

export default Home