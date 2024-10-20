import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

export const GlobalButton = styled.button`
  background-color: #9758a6;
  color: #fff;
  width: 100%;
  height: 50px;
  max-width: 400px;
  font-size: 1.8rem;
  font-family: 'Road Rage', sans-serif;
  border: none;
  text-transform: uppercase;
  margin: 1rem 0;
  border-radius: 5px;
  &:hover {
    background-color: #6f357c;
  }
  ${(props) =>
    props.$loading &&
    css`
      &:after {
        content: '';
        display: block;
        margin: auto;
        width: 19px;
        height: 19px;
        border: 3px dashed #ccc;
        border-radius: 50%;
        font-weight: bold;
        animation: ${rotate} 1.5s infinite;
      }
    `}
`
