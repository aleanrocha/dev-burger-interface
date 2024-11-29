import { useState, useEffect } from 'react'
import { CategoriesCarousel, OffersCarousel } from '../../components'
import { Banner, Container, Content } from './styles'
import { Spinner } from '../../components'
import { api } from '../../services/api'

export const Home = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [responseCategories, responseProducts] = await Promise.all([
          api.get('/categories'),
          api.get('/products'),
        ])
        setCategories(responseCategories.data)
        setProducts(responseProducts.data)
      } catch (error) {
        console.log('Erro ao carregar dados', error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])
  return (
    <main>
      <Banner>
        <h1>Bem vindo(a)!</h1>
      </Banner>
      <Container>
        {!loading && categories.length && products.length ? (
          <Content>
            <CategoriesCarousel categories={categories} />
            <OffersCarousel products={products} />
          </Content>
        ) : (
          <Spinner />
        )}
      </Container>
    </main>
  )
}
