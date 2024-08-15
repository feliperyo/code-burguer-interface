import React, { useEffect, useState } from "react";

import PropTypes from 'prop-types'

import ProductsLogo from '../../assets/products-logo.png'
import { Container, ProductsImg, CategoriesMenu, CategoryButton, ProductsContainer } from "./styles";
import api from '../../services/api'
import formatCurrency from "../../utils/formatCurrency";

import { CardProducts } from '../../components'

export function Products({ location: { state } }) {

    let categoryId = 0
    if (state?.categoryId) {
        categoryId = state.categoryId
    }

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategories, setActiveCategories] = useState(categoryId)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todos' }, ...data]

            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            const newProducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })

            setProducts(newProducts)
        }

        loadProducts()
        loadCategories()
    }, [])

    useEffect(() => {
        if (activeCategories === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(product => product.category_id === activeCategories)

            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategories, products])

    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="logo home" />
            <CategoriesMenu>
                {categories &&
                    categories.map(category => (
                        <CategoryButton
                            type="button"
                            key={category.id}
                            isActiveCategory={activeCategories === category.id}
                            onClick={() => {
                                setActiveCategories(category.id)
                            }}>{category.name}</CategoryButton>
                    ))}
            </CategoriesMenu>
            <ProductsContainer>
                {filteredProducts &&
                    filteredProducts.map(product => (
                        <CardProducts key={product.id} product={product} />
                    ))}
            </ProductsContainer>
        </Container>
    )
}

Products.propTypes = {
    location: PropTypes.object
}