import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
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

export const OfferImg = styled.img`

`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    p{
        color: #424242;
        font-size: 18px;
        line-height: 120%;
        font-weight: bold;
    }
`

export const Image = styled.img`
    width: 200px;
    border-radius: 10px;
`