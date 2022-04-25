import React, { useEffect, useState } from 'react'
import { Product } from '../components/FeaturedProducts'
interface Props {
  category: string
}
const Products: React.FC<Props> = ({ category }) => {
  const [products, setProducts] = useState<Array<Product>>([])
  useEffect(() => {
    const getCategoryProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      )
      const data = await response.json()
      setProducts(data)
      console.log(data)
    }
    getCategoryProducts()
  }, [])
  return (
    <>
      <h2>Visible</h2>
      <h1>{category}</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  )
}
export default Products
