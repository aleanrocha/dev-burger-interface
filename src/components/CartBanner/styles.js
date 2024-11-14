import styled from 'styled-components'

import bannerCart from '../../assets/banner-cart.png'

export const Banner = styled.div`
  background: #252525 url('${bannerCart}') no-repeat center / cover;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 200px;
  }
`
