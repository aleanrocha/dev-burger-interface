import styled from 'styled-components'

import bgLogin1 from '../../assets/bg-login-1.jpg'
import bgLogin2 from '../../assets/bg-login-2.png'

export const LoginContainer = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #252525;
  color: #fff;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const LeftContainer = styled.div`
  background: url('${bgLogin1}') no-repeat center / cover;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const RightContainer = styled.div`
  background: url('${bgLogin2}') center / cover;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`
export const Title = styled.h2`
  text-align: center;
  font-family: 'Road Rage', sans-serif;
  font-size: 2.7rem;
  margin-bottom: 2rem;
  & > span {
    font-family: 'Road Rage', sans-serif;
    color: #9758a6;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: calc(1.7rem - 10px);
  width: 100%;
  max-width: 400px;
`
export const Text = styled.p`
  text-align: center;
  font-weight: 600;
  margin-top: 1rem;
  & > a {
    color: #fff;
    text-decoration: underline;
    &:hover {
      color: #9758a6;
    }
  }
`
