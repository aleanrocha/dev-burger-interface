import styled from 'styled-components'
import 'react-multi-carousel/lib/styles.css'

export const Container = styled.div`
  overflow-x: hidden;
  padding: 3rem 0;
  .carousel-item {
    margin-top: 1.5rem;
    padding: 2rem;
    cursor: grab;
  }
  .react-multi-carousel-list {
    overflow: visible;
  }
`
