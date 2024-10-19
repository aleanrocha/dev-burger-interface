import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Form,
  LeftContainer,
  Text,
  LoginContainer,
  RightContainer,
  Title,
} from './styles'
import { api } from '../../services/api'
import { Button } from '../../components/Button'
import { FormControl } from '../../components/FormControl'
import logoDevBurger from '../../assets/logo-login.png'

const loginSchema = yup.object({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Mínimo de 6 caracteres'),
})

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) })
  const onSubmit = async (data) => {
    const res = await api.post('/session', data)
    console.log(res.status)
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
          <Button text="Entrar" type="submit" />
        </Form>
        <Text>
          Não possui conta? <a href="#">Clique aqui.</a>
        </Text>
      </RightContainer>
    </LoginContainer>
  )
}
