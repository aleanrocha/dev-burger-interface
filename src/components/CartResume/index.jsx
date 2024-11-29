import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Fragment } from 'react'
import { useCart } from '../../hooks/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'

import { Button } from '../Button'
import { Container, Wrapper, ContainerTop, ContainerBottom } from './styles'
import { api } from '../../services/api'
import { paths } from '../../constants/paths'

export const CartResume = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { cartProducts } = useCart()
  const totalPrice = cartProducts?.reduce(
    (acc, cur) => acc + +cur.price * +cur.quantity,
    0
  )
  const deliveryTax = (totalPrice * 5) / 100
  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      }
    })
    try {
      setLoading(true)
      const { data } = await api.post('/create-payment-intent', { products })
      navigate(paths.Checkout, {
        state: data,
      })
    } catch (error) {
      toast.error('Erro inesperado, tente novamente!')
      console.log(error.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Fragment>
      {cartProducts.length && (
        <Container>
          <Wrapper>
            <h2 className="title">Resumo do pedido</h2>
            <ContainerTop>
              <h3 className="items">Itens</h3>
              <p className="items-price">{formatCurrency(totalPrice)}</p>
              <h3 className="delivery-tax">Taxa de entrega</h3>
              <p className="delivery-tax-price">
                {formatCurrency(deliveryTax)}
              </p>
            </ContainerTop>
            <ContainerBottom>
              <h3>Total</h3>
              <p>{formatCurrency(totalPrice + deliveryTax)}</p>
            </ContainerBottom>
          </Wrapper>
          <Button
            text={'Finalizar pedido'}
            type={'submit'}
            isLoading={loading}
            click={submitOrder}
          />
        </Container>
      )}
    </Fragment>
  )
}
