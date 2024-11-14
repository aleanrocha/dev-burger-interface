import logo from '../../assets/logo-login.png'

import { CartContainer, Banner, Title, Content } from './styles'

export const Cart = () => {
  return (
    <CartContainer>
      <Banner>
        <img src={logo} alt="Logo DevBUrger" />
      </Banner>
      <Title>Finalizar pedido</Title>
      <Content>
        {/*<CartItems />*/}
        {/*<CartResume />*/}
      </Content>
    </CartContainer>
  )
}
