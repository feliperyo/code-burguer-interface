import styled from "styled-components";

export const ContainerButton = styled.button`
width: 182.81px;
height: 36.13px;
background: #9758A6;
border: none;
border-radius: 20px;
cursor: pointer;
margin-left: auto;
margin-right: auto;

font-size: 16px;
font-weight: 500;
line-height: 18.75px;
text-align: center;
color: #eee;

&:hover{
    background: #6f3576;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
}

&:active{
    opacity: .8;
}
`