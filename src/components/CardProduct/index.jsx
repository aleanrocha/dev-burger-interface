import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import { Container, Image } from './sstyles'
import { Button } from '../Button'

import iconCart from '../../assets/icon-cart.svg'

export const CardProduct = ({ product }) => {
  const { putProductInCart } = useCart()
  return (
    <Container>
      <Image src={product.url} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.formatedPrice}</p>
      </div>
      <Button type="button" click={() => putProductInCart(product)}>
        <img src={iconCart} alt="Icone de adicionar ao carrinho" />
      </Button>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object,
}
