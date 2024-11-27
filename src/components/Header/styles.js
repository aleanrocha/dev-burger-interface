import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  background-color: #252525;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`
export const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
`
export const NavLink = styled(Link)`
  color: ${(props) => (props.$isActive ? '#9750a6' : '#fff')};
  font-weight: 600;
`
export const Options = styled.div`
  display: flex;
  gap: 4rem;
  @media screen and (max-width: 580px) {
    gap: 1.5rem;
  }
`
export const UserContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: capitalize;
  position: relative;
  & > div h3 {
    font-size: 1rem;
    span {
      color: #9750a6;
    }
  }
  @media screen and (max-width: 580px) {
    & > div {
      display: none;
    }
    ${(props) =>
      props.$showUserConfig &&
      `
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 42px;
        left: 50%;
        transform: translateX(-50%);
        width: 170px;
        height: 95px;
        background-color: #000;
        border: 1.5px solid #9750a6;
        border-radius: 0.4rem;
        z-index: 99;
        &::before {
          content: '^';
          text-align: center;
          color:  #9750a6;
          width: 40px;
          font-size: 1.5rem;
          display: block;
          font-weight: bold;
          margin-top: -35px;
        }
      }
    `}
  }
`

export const Logout = styled.button`
  background-color: transparent;
  color: #f43333;
  font-size: 1rem;
  border: none;
  @media screen and (max-width: 580px) {
    background-color: #f43333;
    color: #fff;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 0.2rem 2.3rem;
    border-radius: 5rem;
    margin-top: 0.4rem;
  }
`

export const CartContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & > a {
    transition: 0.3s;
    &:hover + p {
      color: #9750a6;
    }
  }
  @media screen and (max-width: 580px) {
    & > p {
      display: none;
    }
  }
`

export const CartIcon = styled.div`
  position: relative;
  ${(props) =>
    props.$itemsInCart &&
    `
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      background-color: #f43;
      border-radius: 50%;
      position: absolute;
      top: -4px;
      right: -4px;
    }
  `}
`
