import styled from "styled-components";
import BackgroundImage from '../../assets/bg-login.jpg'

export const Container = styled.div`
height: 100vh;
width: 100vw;
background:url('${BackgroundImage}');
background-size: cover;

display: flex;
justify-content: center;
align-items: center;
`

export const RegisterImage = styled.img`
height: 70%;
`

export const ContainerItems = styled.div`
border-radius:  0px 10px 10px 0px;
background: #373737;
box-shadow: 0px 4px 15px 0px #4A90E23D;
height: 70%;
padding: 25px 75px;

display: flex;
flex-direction: column;
justify-content: center;

h1{
font-size: 24px;
font-weight: 500;
line-height: 28.13px;
text-align: center;
color: #fff;
margin-top: 10px;
}

form{
    display: flex;
    flex-direction: column;
}
`

export const Label = styled.p`
font-size: 12px;
font-weight: 500;
line-height: 14.06px;
color: #fff;
margin: ${props => (props.error ? '12px 0 5px' : '28px 0 5px')}; 
`

export const Input = styled.input`
width: 391.42px;
height: 38.32px;
border-radius: 5px;
box-shadow: 3px 3px 10px 0px #4A90E230;
border: ${props => (props.error ? '2px solid #cc1717;' : 'none')};
padding-left: 10px;
`

export const SignInLink = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 16.41px;
color: #fff;
margin: 0 auto;

a{
    cursor: pointer;
    text-decoration: underline;

    &:hover{
        opacity: .8;
    }

    &:active{
    opacity: .6;
    }
}
`