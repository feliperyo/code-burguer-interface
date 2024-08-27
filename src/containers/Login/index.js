import React from "react";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';

import { Link, useHistory } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'

import { useUser } from "../../hooks/UserContext";
import LoginImg from '../../assets/burguer-login.svg'
import Logo from '../../assets/logo.svg'
import api from '../../services/api'


import { ErrorMessage } from '../../components'
import { Container, LoginImage, ContainerItems, Label, Input, SignInLink, ButtonStyle } from './styles'

export function Login() {
  const history = useHistory()

  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um email válido").required("O email é obrigatório"),
    password: Yup.string().required("Digite sua senha").min(6, "A senha deve ter pelo menos 6 dígitos"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post('session', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Deu tudo certo 👌',
        error: 'Verifique seu email e senha 🤯'
      }
    )
    putUserData(data)

    setTimeout(() => {

      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    }, 1000);

  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="imagem hamburguer" />
      <ContainerItems>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.email?.message}>Email</Label>
          <Input type="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <ButtonStyle type="submit" style={{ marginTop: 75, marginBottom: 25 }}>Entrar</ButtonStyle>
        </form>

        <SignInLink>Não possui conta? <Link style={{ color: 'white' }} to="/cadastro">Cadastrar</Link></SignInLink>
      </ContainerItems>
    </Container>
  );
}
