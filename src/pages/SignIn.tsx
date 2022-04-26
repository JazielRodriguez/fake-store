import React from 'react'
import Container from '../components/Container'
import Form from '../components/Form'
import Header from '../components/Header'
const SignIn = () => {
  return (
    <div>
      <Header />
      <Container>
        <Form signUp={true} />
      </Container>
    </div>
  )
}
export default SignIn
