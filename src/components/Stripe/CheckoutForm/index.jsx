import '../styles.css'
import {
  PaymentElement,
  LinkAuthenticationElement,
} from '@stripe/react-stripe-js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Copy, CheckCircle } from '@phosphor-icons/react'

import { useCart } from '../../../hooks/CartContext'
import { useStripe, useElements } from '@stripe/react-stripe-js'

import { api } from '../../../services/api'
import { paths } from '../../../constants/paths'

export const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const navigate = useNavigate()
  const { cartProducts, clearCart } = useCart()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      }
    })

    if (!stripe || !elements) {
      console.error('Stripe ou elementos com erro, tente novamente!')
      return
    }

    setIsLoading(true)

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    })
    if (error) {
      toast(error.message)
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      try {
        const { status } = await api.post(
          '/orders',
          {
            products,
          },
          { validateStatus: () => true }
        )
        if (status === 200 || status === 201) {
          toast.success('Pedido realizado com sucesso!')
          setTimeout(() => {
            navigate(
              `${paths.CompletePayment}?payment_intent_client_secret=${paymentIntent.client_secret}`
            )
            clearCart()
          }, 2000)
        } else {
          throw new Error()
        }
      } catch (error) {
        toast.error('Erro no servidor, tente novamente!')
        console.log(error.response?.data)
      }
    } else {
      navigate(
        `${paths.CompletePayment}?payment_intent_client_secret=${paymentIntent.client_secret}`
      )
    }

    setIsLoading(false)
  }

  const copyToClipboard = (text) => {
    setCopied(true)
    navigator.clipboard.writeText(text)
    setTimeout(() => setCopied(false), 500)
  }

  return (
    <div id="payment-container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <p
          id="copyToClipboard"
          onClick={() => copyToClipboard('4242 4242 4242 4242')}
        >
          Cartão valido:{' '}
          <span>4242 4242 4242 4242 {copied ? <CheckCircle /> : <Copy />}</span>
        </p>
        <LinkAuthenticationElement id="link-authentication-element" />
        <PaymentElement id="payment-element" />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              'Comprar agora'
            )}
          </span>
        </button>
      </form>
    </div>
  )
}
