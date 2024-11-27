import { CartContainer, Content } from './styles'

import { CartBanner, Title, CartItems } from '../../components'

export const Cart = () => {
  return (
    <CartContainer>
      <CartBanner />
      <Title text={'Checkout - pedido'} isPurple={false} />
      <Content>
        <CartItems />
        {/*<CartResume />*/}
      </Content>
    </CartContainer>
  )
}
