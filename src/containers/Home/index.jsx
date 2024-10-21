import { CategoriesCarousel } from "../../components/CategoriesCarousel"
import { Banner, Container, Content } from "./styles"


export const Home = () => {
  return (
    <main>
      <Banner>
        <h1>Bem vindo(a)!</h1>
     </Banner>
     <Container>
        <Content>
          <h2>Categorias</h2>
          <CategoriesCarousel />
        </Content>
     </Container>
    </main>
  )
}

