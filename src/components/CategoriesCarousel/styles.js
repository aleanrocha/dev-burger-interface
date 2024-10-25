import styled from 'styled-components'
import 'react-multi-carousel/lib/styles.css'

export const Container = styled.div`
  .carousel-item {
    padding: 2rem;
    cursor: grab;
  }

`
export const Title = styled.h2`
  color: #9758a6;
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
    background-color: #9750a6;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
`
export const ContainerItens = styled.div`
  background: url(${(props) => props.$imageUrl}) no-repeat center /cover;
  height: 230px;
  border-radius: 1rem;
  padding: 3rem 1rem;
  display: flex; 
  align-items: flex-end;
  & > p {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5rem;
    cursor: pointer;
    &:hover {
      background-color: #9750a6;
    }
  }
`
