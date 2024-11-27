import styled from 'styled-components'

export const Container = styled.div`
  width: 30%;
  position: sticky;
  top: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    button {
      margin: 1.5rem auto;
      display: block;
    }
  }
`

export const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  .title {
    grid-area: title;
    margin-bottom: 1rem;
    background-color: #484848;
    color: #fff;
    text-transform: uppercase;
    padding: 0.5rem;
    text-align: center;
  }
`

export const ContainerTop = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  grid-template-areas:
    'items items-price'
    'delivery-tax delivery-tax-price';
  .items {
    grid-area: items;
    opacity: 0.6;
  }
  .items-price {
    grid-area: items-price;
  }
  .delivery-tax {
    grid-area: delivery-tax;
    opacity: 0.6;
  }
  .delivery-tax-price {
    grid-area: delivery-tax-price;
  }
`

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  & > h3 {
    opacity: 0.6;
  }
  & > p {
    font-size: 1.2rem;
    font-weight: 600;
  }
`
