import React from "react";
import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'

import LoginImg from '../../assets/burguer-login.svg'
import Logo from '../../assets/logo.svg'
import api from '../../services/api'

import Button from "../../components/Button";
import { Container, LoginImage, ContainerItems, Label, Input, SignInLink, ErrorMessage } from './styles'

function Login() {

  const schema = Yup.object({
    email: Yup.string().email("Digite um email válido").required("O email é obrigatório"),
    password: Yup.string().required("Digite sua senha").min(6, "A senha deve ter pelo menos 6 dígitos"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (clientData) => {
    const response = await api.post('session', {
      email: clientData.email,
      password: clientData.password
    })

    console.log(response)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="imagem hamburguer" />
      <ContainerItems>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>Entrar</Button>
        </form>

        <SignInLink>Não possui conta? <a>Cadastrar</a></SignInLink>
      </ContainerItems>
    </Container>
  );
}

export default Login;
