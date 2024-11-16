import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'

import { Container } from './styles'
import { api } from '../../services/api'
import { CardProduct } from '../CardProduct'
import { formatCurrency } from '../../utils/formatCurrency'
import { Title } from '../Title'

export const OffersCarousel = () => {
  const [offers, setOffers] = useState([])
  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await api.get('/products')
      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => ({
          formatedPrice: formatCurrency(product.price),
          ...product,
        }))
      setOffers(onlyOffers)
    }
    loadProducts()
  }, [])
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
      <Title text={'Ofertas do dia'} isPurple={false} />
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carousel-item"
      >
        {offers &&
          offers.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </Carousel>
    </Container>
  )
}
