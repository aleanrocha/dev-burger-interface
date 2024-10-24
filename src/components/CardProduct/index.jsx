import PropTypes from 'prop-types'

import { Container, Image } from './sstyles'
import { Button } from '../Button'
import iconCart from '../../assets/icon-cart.svg'

export const CardProduct = ({ product }) => {
  return (
    <Container>
      <Image src={product.url} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.formatedPrice}</p>
      </div>
      <Button type='button'><img src={iconCart} alt="Icone de adicionar ao carrinho" /></Button>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object,
}
