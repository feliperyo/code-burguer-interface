import styled from "styled-components";

export const Container = styled.div`

`

export const ProductsImg = styled.img`
width: 100%;
`

export const CategoriesMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 20px;
`

export const CategoryButton = styled.button`
border: none;
background: none;
cursor: pointer;
color: ${props => props.isActiveCategory ? '#9758a6' : '#9A9A9D'};
border-bottom:${props => props.isActiveCategory ? '2px solid #9758a6' : 'none'} ;
font-size: 17px;
line-height: 20px;
`