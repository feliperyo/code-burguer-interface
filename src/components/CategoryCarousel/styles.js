import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
    background-color: #EFEFEF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow {
        background-color: #9758a6;
        color: #EFEFEF;
        border: none;
    }

    .rec.rec-arrow:hover {
        border: 2px solid #9758a6;
        background-color: #EFEFEF;
        color: #9758a6;
    }

    .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #EFEFEF;
    }
`

export const CategoryImg = styled.img`

`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Image = styled.img`
    width: 200px;
    border-radius: 10px;
`

export const Button = styled(Link)`
width: 100%;
height: 50px;
background: #9758A6;
border: none;
border-radius: 8px;
cursor: pointer;
margin-left: auto;
margin-right: auto;

font-size: 16px;
font-weight: 500;
line-height: 18.75px;
text-align: center;

text-decoration: none;
display: flex;
align-items: center;
justify-content: center;

color: #eee;

&:hover{
    opacity: .8;
}

&:active{
    opacity: .6;
}
`