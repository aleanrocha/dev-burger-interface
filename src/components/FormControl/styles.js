import styled from 'styled-components'

export const FormControlWrapper = styled.div`
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
    text-transform: capitalize;
  }
  & > span {
    font-size: 0.9rem;
    color: #ff5f5f;
    font-weight: 600;
    height: 10px;
  }
  ${(props) =>
    props.$inputError &&
    `
    & > input {
      outline: 2px solid  #ff5f5f !important;
    }
  `}
`
