import { CartContainer, Content } from './styles'

import { CartBanner, Title, CartItems, CartResume } from '../../components'

export const Cart = () => {
  return (
    <CartContainer>
      <CartBanner />
      <Title text={'Checkout - pedido'} isPurple={false} />
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </CartContainer>
  )
}
