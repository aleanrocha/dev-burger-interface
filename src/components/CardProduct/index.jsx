import { useState } from 'react'
import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import { Container, Image } from './sstyles'
import { Button } from '../Button'

import iconCart from '../../assets/icon-cart.svg'
import { CheckCircle } from '@phosphor-icons/react/dist/ssr'

export const CardProduct = ({ product }) => {
  const { putProductInCart } = useCart()
  const [productAdded, setProductAdded] = useState(false)
  const handleClick = () => {
    setProductAdded(true)
    const timer = setTimeout(() => {
      setProductAdded(false)
    }, 500);
    return () => clearTimeout(timer)
  }
  return (
    <Container>
      <Image src={product.url} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.formatedPrice}</p>
      </div>
      <Button
        type="button"
        click={() => {
          putProductInCart(product), handleClick()
        }}
      >
        {productAdded ? (
          <CheckCircle />
        ) : (
          <img src={iconCart} alt="Icone de adicionar ao carrinho" />
        )}
      </Button>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object,
}
