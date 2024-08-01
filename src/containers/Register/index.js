import React from "react";
import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'

import RegisterImg from '../../assets/burguer-register.svg'
import Logo from '../../assets/logo.svg'
import api from '../../services/api'

import Button from "../../components/Button";
import { Container, RegisterImage, ContainerItems, Label, Input, SignInLink, ErrorMessage } from './styles'

function Register() {

  const schema = Yup.object({
    name: Yup.string().required('Digite seu nome'),
    email: Yup.string().email("Digite um email válido").required("O email é obrigatório"),
    password: Yup.string().required("Digite sua senha").min(6, "A senha deve ter pelo menos 6 dígitos"),
    confirmPassword: Yup.string().required("Confirme sua senha").oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (clientData) => {
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })

    console.log(response)
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="imagem hamburguer" />
      <ContainerItems>
        <img src={Logo} alt="logo" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input type="text" {...register("name")} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input type="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>Cadastrar</Button>
        </form>

        <SignInLink>Já possui conta? <a>Entrar</a></SignInLink>
      </ContainerItems>
    </Container>
  );
}

export default Register;
