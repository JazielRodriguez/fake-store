import React, { useState, useEffect } from 'react'

import styles from './FeaturedProducts.module.css'
import ProductCard from './ProductCard'

export interface Product {
  id: number
  title: string
  image: string
  description: string
}
const FeaturedProducts = () => {
  const [products, setProducts] = useState<Array<Product>>([])
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products?limit=4'
      )
      const data = await response.json()
      setProducts(data)
    }
    getProducts()
  }, [])
  return (
    <>
      <h2 className={styles.title}>Our featured products</h2>
      <div className={styles['product-list']}>
        {products.map((product) => (
          <ProductCard key={product.id} productInfo={product} />
        ))}
      </div>
    </>
  )
}
export default FeaturedProducts