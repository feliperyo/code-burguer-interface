import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
background: #3C3C3C;
box-shadow: 0px 4px 4px 0px #00000040;
width: 300px;
top: 0;
left: 0;

hr{
    margin: 50px 15px;
}
`

export const ItemContainer = styled.div`
height: 50px;
display: flex;
align-items: center;
background: ${props => props.isActive ? '#565656' : 'none'};
border-radius: 2px;
margin: 8px;
padding-left: 20px;

.icon{
    color: #fff;
}
`

export const ListLink = styled(Link)`
font-size: 16px;
line-height: 19px;
color: #fff;
text-decoration: none;
margin-left: 8px;
`

