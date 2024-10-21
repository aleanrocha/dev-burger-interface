import styled from 'styled-components'

import bannerHome from '../../assets/banner-home.jpg'
import background from '../../assets/bg-login-2.png'

export const Banner = styled.div`
  background: #252525 url('${bannerHome}') no-repeat center / cover;
  color: #fff;
  height: 50vh;
  position: relative;
  & > h1 {
    text-align: right;
    font-family: 'Road Rage', sans-serif;
    font-size: 3rem;
    position: absolute;
    top: 20%;
    right: 10%;
  }
  @media screen and (max-width: 580px) {
    height: 35vh;
    background-position: left left;
    & > h1 {
      font-size: 2rem;
      top: 80%;
    }
  }
`
export const Container = styled.section`
  background: #fafafa url('${background}');
  min-height: 50vh;

`
export const Content = styled.div``
