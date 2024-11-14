import { Banner } from './styles'
import logo from '../../assets/logo-login.png'

export const CartBanner = () => {
  return (
    <Banner>
      <img src={logo} alt="Logo DevBUrger" />
    </Banner>
  )
}
