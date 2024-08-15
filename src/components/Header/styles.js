import styled from "styled-components";

export const Container = styled.div`
position: fixed;
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
height: 72px;
background-color: #fff;
box-shadow: 2px 3px 5px 0px #00000026;
`

export const ContainerLeft = styled.div`
display: flex;
gap: 30px;
`

export const PageLink = styled.a`
cursor: pointer;
text-decoration: none;
color: ${props => props.isActive ? '#9758A6' : '#555'};
font-weight: ${props => props.isActive ? 'bold' : 'normal'};
font-size: 16px;
line-height: 19px;
`

export const ContainerRight = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

export const Line = styled.div`
height: 40px;
border-right: 1px solid #bababa;
`

export const ContainerText = styled.div`

p{
    font-size: 14px;
    font-weight: 300;
    line-height: 16.41px;
    color: #555;
}
`

export const PageLinkExit = styled.a`
cursor: pointer;
font-size: 14px;
font-weight: 700;
line-height: 16.41px;
color: #9758A6;
`