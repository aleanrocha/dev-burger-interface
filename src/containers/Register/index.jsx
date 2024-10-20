import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Form,
  LeftContainer,
  Text,
  RegisterContainer,
  RightContainer,
  Title,
} from './styles'
import { Button } from '../../components/Button'
import { FormControl } from '../../components/FormControl'
import logoDevBurger from '../../assets/logo-login.png'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

const registerSchema = yup.object({
  name: yup
    .string()
    .required('Nome obrigatório')
    .min(8, 'Mínimo de 8 caracteres'),
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Mínimo de 6 caracteres'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('Confirmar senha obrigatória'),
})

export const Register = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) })
  const onSubmit = async (data) => {
    try {
      setLoading(true)
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        }
      )
      setLoading(false)
      if (status === 200 || status === 201) {
        toast.success('Cadastro realizado com sucesso!')
      } else if (status === 409) {
        toast.error('Email já cadastrado!')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Erro no servidor, tente novamente!')
      console.log(error.response?.data)
    }
  }
  return (
    <RegisterContainer>
      <LeftContainer>
        <img src={logoDevBurger} alt="Logo DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            inputError={errors.name?.message}
            labelInfo="Nome"
            placeholder="Digite seu nome completo"
            inputType="text"
            idFor="name"
            register={register}
          />
          <FormControl
            inputError={errors.email?.message}
            labelInfo="Email"
            placeholder="Seu melhor seu email"
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
          <FormControl
            inputError={errors.confirmPassword?.message}
            idFor="confirmPassword"
            labelInfo="Confirmar senha"
            inputType="password"
            placeholder="Confirme sua senha"
            register={register}
          />
          <Button text="Cadastrar" isLoading={loading} type="submit" />
        </Form>
        <Text>
          Já possui conta? <a href="#">Faça login</a>
        </Text>
      </RightContainer>
    </RegisterContainer>
  )
}
