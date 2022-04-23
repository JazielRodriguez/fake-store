import React from 'react'
import Header from './components/Header'
import Container from './components/Container'
import FeaturedProducts from './components/FeaturedProducts'

const App = () => {
  return (
    <>
      <Header />
      <Container>
          <FeaturedProducts />
      </Container>
    </>
  )
}
export default App
