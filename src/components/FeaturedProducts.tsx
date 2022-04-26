import React, { useState, useEffect } from 'react'

import styles from './FeaturedProducts.module.css'
import ProductList from './ProductList'
import { Product } from '../types/index'
const FeaturedProducts = () => {
  const [products, setProducts] = useState<Array<Product>>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=4')
      const data = await response.json()
      setIsLoading(false)
      setProducts(data)
    }
    getProducts()
  }, [])
  return (
    <>
      <h2 className={styles.title}>Our featured products</h2>
      <ProductList products={products} isLoading={isLoading} />
    </>
  )
}
export default FeaturedProducts
