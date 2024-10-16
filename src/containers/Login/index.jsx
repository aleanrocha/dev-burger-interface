import {
  Form,
  FormControl,
  LeftContainer,
  Text,
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
          Olá, seja bem vindo ao <span>Dev Burguer!</span> <br /> Acesse com seu
          <span> Login e senha.</span>
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
        <Text>
          Não possui conta? <a href="#">Clique aqui.</a>
        </Text>
      </RightContainer>
    </LoginContainer>
  )
}
