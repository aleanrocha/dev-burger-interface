import { CartContainer, Title, Content } from './styles'

import { CartBanner } from '../../components'

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
