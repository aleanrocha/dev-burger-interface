import styled from 'styled-components'

import background from '../../assets/bg-login-2.png'

export const CartContainer = styled.section`
  background: #252525 url('${background}');
  width: 100%;
  min-height: 100vh;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  min-height: 60vh;
  padding: 2rem 1rem 10rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 3rem;
  }
`
