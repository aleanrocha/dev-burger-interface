import styled from 'styled-components'

import background from '../../assets/bg-login-2.png'

export const CartContainer = styled.section`
  background: #252525 url('${background}');
  width: 100%;
  min-height: 100vh;
`
export const Title = styled.h2`
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
`

export const Content = styled.div``
