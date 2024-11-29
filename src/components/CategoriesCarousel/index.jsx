import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-multi-carousel'

import { Container, ContainerItens } from './styles'
import { Title } from '../Title'
import { paths } from '../../constants/paths'

export const CategoriesCarousel = ({ categories }) => {
  const navigate = useNavigate()
  const navigateToMenu = (categoryId) => {
    navigate(
      {
        pathname: paths.Menu,
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
      <Title text={'Categorias'} isPurple={true} />
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carousel-item"
      >
        {categories &&
          categories.map((category) => (
            <ContainerItens key={category.id} $imageUrl={category.url}>
              <p onClick={() => navigateToMenu(category.id)}>{category.name}</p>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}

CategoriesCarousel.propTypes = {
  categories: PropTypes.array.isRequired,
}
