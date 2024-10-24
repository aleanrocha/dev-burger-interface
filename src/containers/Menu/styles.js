import styled from 'styled-components'

import bannerMenu from '../../assets/banner-menu.png'
import background from '../../assets/bg-login-2.png'

export const Container = styled.section`
  background: #252525 url('${background}');
  min-height: 100vh;
`
export const Banner = styled.div`
  background: #252525 url('${bannerMenu}') no-repeat center / cover;
  color: #fff;
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  & > div {
    position: absolute;
    right: 25%;
    text-align: center;
    h1 {
      text-align: right;
      font-family: 'Road Rage', sans-serif;
      font-size: 5rem;
      line-height: 4rem;
      font-weight: 800;
      text-transform: uppercase;
      text-align: center;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 280px;
    background-position: left left;
    & > div {
      position: static;
      h1 {
        font-size: 2.7rem;
        line-height: 3rem;
      }
    }
  }
`
export const CategoryMenu = styled.div``

export const ProductsContainer = styled.div``
