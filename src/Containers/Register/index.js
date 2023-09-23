import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import Logo from '../../assets/LogoImage.svg'
import RegisterImage from '../../assets/RegisterImg.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  Container,
  RegisterImg,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

function Login() {
  const schema = yup.object().shape({
    name: yup.string().required('O seu nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um e-mail valido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos'),
    confirmPassword: yup
      .string()
      .required('A senha é obrigatória')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  console.log(errors)

  const onSubmit = async clientData => {
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })

    console.log(response)
  }

  return (
    <Container>
      <RegisterImg src={RegisterImage} alt="login-img" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>
            Sign Up
          </Button>
        </form>
        <SignInLink>
          Já possui conta? <a>Sign In</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
