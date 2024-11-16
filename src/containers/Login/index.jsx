import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import {
  Form,
  LeftContainer,
  Text,
  LoginContainer,
  RightContainer,
  Title,
} from './styles'

import { useUser } from '../../hooks/UserContext'
import { paths } from '../../constants/paths'

import logoDevBurger from '../../assets/logo-login.png'
import { api } from '../../services/api'
import { Button, FormControl } from '../../components'

const loginSchema = yup.object({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Mínimo de 6 caracteres'),
})

export const Login = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { putUserData } = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) })
  const onSubmit = async (data) => {
    try {
      setLoading(true)
      const { status, data: resData } = await api.post(
        '/session',
        {
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        }
      )
      setLoading(false)
      if (status === 200 || status === 201) {
        toast.success('Login realizado com sucesso!')
        setTimeout(() => navigate('/home'), 2000)
      } else if (status === 401) {
        toast.error('Email ou senha incorretos!')
      } else {
        throw new Error()
      }
      putUserData(resData)
    } catch (error) {
      toast.error('Erro no servidor, tente novamente!')
      console.log(error.response?.data)
    }
  }
  return (
    <LoginContainer>
      <LeftContainer>
        <img src={logoDevBurger} alt="Logo DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span> <br /> Acesse com seu
          <span> Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            inputError={errors.email?.message}
            labelInfo="Email"
            placeholder="Digite seu email"
            inputType="email"
            idFor="email"
            register={register}
          />
          <FormControl
            inputError={errors.password?.message}
            idFor="password"
            labelInfo="Senha"
            inputType="password"
            placeholder="Digite sua senha"
            register={register}
          />
          <Button text="Entrar" isLoading={loading} type="submit" />
        </Form>
        <Text>
          Não possui conta? <Link to={paths.Register}>Registre-se</Link>
        </Text>
      </RightContainer>
    </LoginContainer>
  )
}
