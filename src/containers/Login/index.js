import React from "react";

import LoginImg from '../../assets/burguer-login.svg'
import Logo from '../../assets/logo.svg'

import { Container, LoginImage, ContainerItems, Label, Input, Button, SignInLink } from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="imagem hamburguer" />
      <ContainerItems>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Entrar</Button>
        <SignInLink>Não possui conta? <a>Cadastrar</a></SignInLink>
      </ContainerItems>
    </Container>
  );
}

export default Login;
