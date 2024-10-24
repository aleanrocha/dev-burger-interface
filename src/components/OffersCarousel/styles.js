import styled from 'styled-components'
import 'react-multi-carousel/lib/styles.css'

export const Container = styled.div`
  overflow-x: hidden;
  .carousel-item {
    padding: 2rem;
  }
  .react-multi-carousel-list {
    overflow: visible;
  }
`
export const Title = styled.h2`
  color: #61a120;
  text-align: center;
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
  margin: 4rem 0 3rem;
  padding-bottom: 0.5rem;
  position: relative;
  &::after {
    content: '';
    width: 60px;
    height: 5px;
    background-color: #61a120;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
`
