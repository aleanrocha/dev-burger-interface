import { useLocation } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from '../../config/stripeConfig'
import { CheckoutForm } from '../../components/Stripe/CheckoutForm'

export const Checkout = () => {
  const {
    state: { clientSecret },
  } = useLocation()
  if (!clientSecret) {
    return <p style={{ minHeight: '100vh', margin: 'auto' }}>Ops, deu ruim!</p>
  }
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  )
}
