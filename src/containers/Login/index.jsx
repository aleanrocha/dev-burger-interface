import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Form,
  FormControl,
  LeftContainer,
  Text,
  LoginContainer,
  RightContainer,
  Title,
} from './styles'
import { Button } from '../../components/Button'
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
  const onSubmit = (data) => {
    console.log(data)
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
          <FormControl $inputError={errors.email?.message}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            <span>{errors.email?.message}</span>
          </FormControl>
          <FormControl $inputError={errors.password?.message}>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              {...register('password')}
            />
            <span>{errors.password?.message}</span>
          </FormControl>
          <Button text="Entrar" type="submit" />
        </Form>
        <Text>
          Não possui conta? <a href="#">Clique aqui.</a>
        </Text>
      </RightContainer>
    </LoginContainer>
  )
}
