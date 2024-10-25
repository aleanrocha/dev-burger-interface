import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryButton,
} from './styles'
import { CardProduct } from '../../components/CardProduct'
import { formatCurrency } from '../../utils/formatCurrency'

export const Menu = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await api.get('/products')
      const newProducts = data.map((product) => ({
        formatedPrice: formatCurrency(product.price),
        ...product,
      }))
      setProducts(newProducts)
    }
    const loadCategories = async () => {
      const { data } = await api.get('/categories')
      setCategories(data)
    }
    loadProducts()
    loadCategories()
  }, [])
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
      <ProductsContainer>
        <h2>Cardápio</h2>
        <CategoryMenu>
          {categories &&
            categories.map((category) => (
              <CategoryButton key={category.id}>{category.name}</CategoryButton>
            ))}
        </CategoryMenu>
        <div>
          {products &&
            products.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
        </div>
      </ProductsContainer>
    </Container>
  )
}
