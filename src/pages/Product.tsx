import React, { useEffect, useState } from 'react'

import styles from './Product.module.css'

import Container from '../components/Container'
import Header from '../components/Header'
import LoadingComponent from '../components/LoadingComponent'
interface Props {
  id: string
}
interface ProductProps {
  title: string
  description: string
  price: number
  image: string
}
const Product: React.FC<Props> = ({ id }) => {
  const [product, setProduct] = useState<ProductProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await response.json()
      console.log(data)
      setIsLoading(false)
      setProduct(data)
    }
    getProduct()
  }, [])
  return (
    <>
      <Header />
      <Container>
        {isLoading && <LoadingComponent />}
        {product && (
          <div className={styles.product}>
            <div className={styles['product-layout']}>
              <div className={styles['product-info']}>
                <h1>{product.title}</h1>
                <p className={styles.description}>{product.description}</p>
              </div>
              <div className={styles['product-actions']}>
                <button>Add to Cart</button>
                <p className={styles.price}>$ {product.price}</p>
              </div>
            </div>
            <div className={styles.image}>
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        )}
      </Container>
    </>
  )
}
export default Product
