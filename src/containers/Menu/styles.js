import styled from 'styled-components'

import bannerMenu from '../../assets/banner-menu.png'
import background from '../../assets/bg-login-2.png'
import { Link } from 'react-router-dom'

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
export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 1rem 0;
  overflow-x: auto;
  padding: 0.5rem 0;
  @media screen and (max-width: 580px) {
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 1rem;
    border-radius: 5rem;
  }
`
export const CategoryButton = styled(Link)`
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 3px solid
    ${(props) => (props.$isActiveCategory ? '#9750a6' : 'transparent')};
  &:hover {
    color: #9750a6;
  }
`

export const ProductsContainer = styled.div`
  & > h2 {
    color: #61a120;
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
    padding: 3rem 0 0.5rem;
    margin-bottom: 1rem;
    position: relative;
    &::after {
      content: '';
      width: 60px;
      height: 5px;
      background-color: #61a120;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  & > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4rem;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;
    > div {
      width: 250px;
    }
  }
`
