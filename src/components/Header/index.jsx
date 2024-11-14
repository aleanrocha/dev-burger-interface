import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { UserCircle, ShoppingCart } from '@phosphor-icons/react'

import { useUser } from '../../hooks/UserContext'

import {
  HeaderContainer,
  Navigation,
  NavLink,
  Options,
  UserContent,
  Logout,
  CartContent,
} from './styles'

export const Header = () => {
  const [userConfig, setUserConfig] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { userInfo, logout } = useUser()
  const logoutUser = () => {
    navigate('/entrar')
    logout()
  }
  return (
    <HeaderContainer>
      <Navigation>
        <NavLink to={'/home'} $isActive={pathname === '/home'}>
          Home
        </NavLink>
        <hr />
        <NavLink to={'/cardapio'} $isActive={pathname === '/cardapio'}>
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
              Olá, <span>{userInfo && userInfo.name.split(' ')[0]}</span>
            </h3>
            <Logout onClick={logoutUser}>Sair</Logout>
          </div>
        </UserContent>
        <CartContent>
          <NavLink to={'/carrinho'}>
            <ShoppingCart size={30} />
          </NavLink>
          <p>Carrinho</p>
        </CartContent>
      </Options>
    </HeaderContainer>
  )
}
