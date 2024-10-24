import { Container, Banner, CategoryMenu, ProductsContainer } from './styles'

export const Menu = () => {
  return (
    <Container>
      <Banner>
        <div>
          <h1>
            O melhor <br /> hambúrger <br />
            está aqui
          </h1>
          <p>Esse cardápio está irresistível!</p>
        </div>
      </Banner>
      <CategoryMenu></CategoryMenu>
      <ProductsContainer></ProductsContainer>
    </Container>
  )
}
