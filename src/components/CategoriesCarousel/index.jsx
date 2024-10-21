import { useEffect, useState } from 'react';
import { api } from '../../services/api'

export const CategoriesCarousel = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const loadCategories = async () => {
      const res = await api.get('/categories')
      console.log(res)
    }
    loadCategories()
  }, [])
  return (
    <div>CategoryCarousel</div>
  )
}
