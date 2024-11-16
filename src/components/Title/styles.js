import styled from 'styled-components'

export const TitleStyled = styled.h2`
  color: ${(props) => (props.$isPurple ? ' #9750a6' : '#61a120')};
  text-align: center;
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
  padding: 3rem 0 0.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  position: relative;
  &::after {
    content: '';
    width: 60px;
    height: 5px;
    background-color: ${(props) => (props.$isPurple ? ' #9750a6' : '#61a120')};
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
`
