import React, { useState, useEffect } from 'react'
import { Link } from 'wouter'
import styles from './Categories.module.css'

const Categories = () => {
  const [categories, setCategories] = useState<Array<string>>([])
  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      )
      const data = await response.json()
      console.log(data)
      setCategories(data)
    }
    getCategories()
  }, [])
  return (
    <div className={styles.categories}>
      <h2>View all categories</h2>
      <div className={styles['categories-list']}>
        {categories.map((category) => (
          <Link key={category} href={`/products/${category}`}>
            <p>
              <span>{category}</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Categories
