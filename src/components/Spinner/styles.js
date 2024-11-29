import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    display: block;
    width: 45px;
    height: 45px;
    background-color: transparent;
    border: 4px dotted #fafafa;
    border-radius: 50%;
    animation: ${rotate} 2s infinite linear;
  }
`
