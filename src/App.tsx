import React from 'react'
import Header from './components/Header'
import Container from './components/Container'
import FeaturedProducts from './components/FeaturedProducts'
import Categories from './components/Categories'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <FeaturedProducts />
        <Categories />
      </Container>
    </>
  )
}
export default App
