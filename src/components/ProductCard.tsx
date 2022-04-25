import React from 'react'
import { Link } from 'wouter'
import styles from './ProductCard.module.css'
import { Product } from './FeaturedProducts'
const ProductCard = ({ productInfo }: { productInfo: Product }) => {
  const resumeProduct = `${productInfo.description.slice(0, 120)}...`
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-image']}>
        <img className={styles.image} src={productInfo.image} alt={productInfo.title}/>
      </div>
      <div className={styles['product-info']}>
        <div className={styles['product-resume']}>
          <h2>{productInfo.title}</h2>
          <p>{resumeProduct}</p>
        </div>
        <Link href={`product/${productInfo.id}`}>
          <a className={styles['product-btn']}>View Details</a>
        </Link>
      </div>
    </div>
  )
}
export default ProductCard
