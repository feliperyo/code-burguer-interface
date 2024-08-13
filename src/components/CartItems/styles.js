import styled from "styled-components";

export const Container = styled.div`
background-color: #fff;
border-radius: 20px;
box-shadow: 0px 10px 40px rgba(0,0,0,0.3);
padding: 10px;
width: max-content;
`

export const Header = styled.div`
display: grid;
grid-template-columns: repeat(6,1fr);
padding: 10px;
border-bottom: 1px solid #b5b5b5;

p{
    font-size: 16px;
    color: #b5b5b5;
}
`

export const Body = styled.div`
display: grid;
grid-template-columns: repeat(6,1fr);
width: max-content;
grid-gap: 10px 15px;
padding: 10px;

p{
    font-size: 16px;
    color: #000;
}

.quantity-container{
    display: flex;
    gap: 20px;

    button{
        height: 30px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        margin-top: -5px;
    }
}
`

export const ProductImage = styled.img`
width: 120px;
height: 120px;
border-radius: 10px;
`
export const BtnTrash = styled.button`
width: 20px;
height: 20px;
background: transparent;
border: none;
cursor: pointer;
`

export const TrashImage = styled.img`
width: 20px;
height: 20px;
`

export const EmptyCart = styled.p`
padding: 20px;
text-align: center;
font-weight: bold;
`