import styled from 'styled-components'

import bgLogin1 from '../../assets/bg-login-1.jpg'
import bgLogin2 from '../../assets/bg-login-2.png'

export const LoginContainer = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #252525;
  color: #fff;
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
`
export const RightContainer = styled.div`
  background: url('${bgLogin2}') center / cover;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
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
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
`
export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  & > input {
    width: 100%;
    height: 52px;
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    border: none;
    font-size: 0.9rem;
    font-weight: 600;
    &:focus {
      outline: 2px solid #9758a6;
    }
  }
  & > label {
    font-size: 1.1rem;
    font-weight: 600;
  }
`
export const Text = styled.p`
  text-align: center;
  font-weight: 600;
  margin-top: 1.7rem;
  & > a {
    color: #fff;
    text-decoration: underline;
    &:hover {
      color: #9758a6;
    }
  }
`
