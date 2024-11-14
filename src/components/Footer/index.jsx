import { FooterContainer } from './styles'

export const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Desenvolvido por{' '}
        <a href="https://www.linkedin.com/in/aleanrocha">Alean Rocha</a> -{' '}
        {new Date().getFullYear()} - Todos os direitos reservados
      </p>
    </FooterContainer>
  )
}
