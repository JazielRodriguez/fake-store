import React from 'react'
import LoadingComponent from './LoadingComponent'
import ProductCard from './ProductCard'
import styles from './ProductList.module.css'
import { Product } from '../types/index'
interface Props {
  isLoading: boolean
  products: Array<Product>
}
const ProductList: React.FC<Props> = ({ isLoading, products }) => {
  return (
    <div className={styles['product-list']}>
      {isLoading && <LoadingComponent />}
      {products.map((product) => (
        <ProductCard key={product.id} productInfo={product} />
      ))}
    </div>
  )
}
export default ProductList
