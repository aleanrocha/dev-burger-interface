import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-multi-carousel'

import { Container, Title, ContainerItens } from './styles'
import { api } from '../../services/api'

export const CategoriesCarousel = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('/categories')
      setCategories(data)
    }
    loadCategories()
  }, [])
  const navigate = useNavigate()
  const navigateToMenu = (categoryId) => {
    navigate(
      {
        pathname: '/cardapio',
        search: `?categoria=${categoryId}`,
      },
      {
        replace: true,
      }
    )
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <Container>
      <Title>Categorias</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carousel-item"
      >
        {categories &&
          categories.map((category) => (
            <ContainerItens
              key={category.id}
              $imageUrl={category.url}
              onClick={() => navigateToMenu(category.id)}
            >
              <p>
                {category.name}
              </p>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
