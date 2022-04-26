import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import { Product } from '../types/index'

import styles from './PageCategories.module.css'
import ProductList from '../components/ProductList'

interface Props {
  category: string
}
const Products: React.FC<Props> = ({ category }) => {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [products, setProducts] = useState<Array<Product>>([])
  useEffect(() => {
    const getCategoryProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      )
      const data = await response.json()
      console.log(data)
      setLoading(false)
      setProducts(data)
    }
    getCategoryProducts()
  }, [])
  return (
    <>
      <Header />
      <Container>
        <div className={styles['categories-content']}>
          <h1>{category.replace('%20', ' ')}</h1>
          <ProductList isLoading={isLoading} products={products} />
        </div>
      </Container>
    </>
  )
}
export default Products
