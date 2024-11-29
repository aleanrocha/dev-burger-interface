import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { UserCircle, ShoppingCart } from '@phosphor-icons/react'

import { useUser } from '../../hooks/UserContext'
import { useCart } from '../../hooks/CartContext'

import {
  HeaderContainer,
  Navigation,
  NavLink,
  Options,
  UserContent,
  Logout,
  CartContent,
  CartIcon,
} from './styles'
import { paths } from '../../constants/paths'

export const Header = () => {
  const [userConfig, setUserConfig] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { userInfo, logout } = useUser()
  const { cartProducts } = useCart()
  const logoutUser = () => {
    navigate(paths.Login)
    logout()
  }
  return (
    <HeaderContainer>
      <Navigation>
        <NavLink to={paths.Home} $isActive={pathname === paths.Home}>
          Home
        </NavLink>
        <hr />
        <NavLink to={paths.Menu} $isActive={pathname === paths.Menu}>
          Cardápio
        </NavLink>
      </Navigation>
      <Options>
        <UserContent $showUserConfig={userConfig}>
          <UserCircle
            size={30}
            onClick={() =>
              setUserConfig(window.innerWidth <= 580 && !userConfig)
            }
          />
          <div>
            <h3>
              Olá, <span>{userInfo.name?.split(' ')[0]}</span>
            </h3>
            <Logout onClick={logoutUser}>Sair</Logout>
          </div>
        </UserContent>
        <CartContent>
          <NavLink to={paths.Cart}>
            <CartIcon $itemsInCart={cartProducts.length}>
              <ShoppingCart size={30} />
            </CartIcon>
          </NavLink>
          <p>Carrinho</p>
        </CartContent>
      </Options>
    </HeaderContainer>
  )
}
