import { CartContainer, Title, Content } from './styles'

import { CartBanner } from '../../components/CartBanner'

export const Cart = () => {
  return (
    <CartContainer>
      <CartBanner />
      <Title>Finalizar pedido</Title>
      <Content>
        {/*<CartItems />*/}
        {/*<CartResume />*/}
      </Content>
    </CartContainer>
  )
}
