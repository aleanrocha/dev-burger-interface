import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryButton,
} from './styles'
import { CardProduct } from '../../components'
import { formatCurrency } from '../../utils/formatCurrency'
import { paths } from '../../constants/paths'

export const Menu = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const navigate = useNavigate()
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria')
    if (categoryId) {
      return categoryId
    }
    return 0
  })

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
      setCategories([{id: 0, name: 'Todas'}, ...data])
    }
    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newProducts = products.filter(
        (product) => product.category_id === activeCategory
      )
      setFilteredProducts(newProducts)
    }
  }, [products, activeCategory])
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
              <CategoryButton
                key={category.id}
                $isActiveCategory={activeCategory === category.id}
                onClick={() => {
                  navigate(
                    {
                      pathname: paths.Menu,
                      search: `?categoria=${category.id}`,
                    },
                    { replace: true }
                  ),
                    setActiveCategory(category.id)
                }}
              >
                {category.name}
              </CategoryButton>
            ))}
        </CategoryMenu>
        <div>
          {filteredProducts &&
            filteredProducts.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
        </div>
      </ProductsContainer>
    </Container>
  )
}
