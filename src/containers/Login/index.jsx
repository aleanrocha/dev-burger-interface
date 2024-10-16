import {
  Form,
  FormControl,
  LeftContainer,
  Link,
  LoginContainer,
  RightContainer,
  Title,
} from './styles'
import logoDevBurger from '../../assets/logo-login.png'

export const Login = () => {
  return (
    <LoginContainer>
      <LeftContainer>
        <img src={logoDevBurger} alt="Logo DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span> Acesse com seu
          <span>Login e senha.</span>
        </Title>
        <Form>
          <FormControl>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Digite seu email" />
          </FormControl>
          <FormControl>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </FormControl>
        </Form>
        <Link href="#">Não possui conta? Clique aqui.</Link>
      </RightContainer>
    </LoginContainer>
  )
}
