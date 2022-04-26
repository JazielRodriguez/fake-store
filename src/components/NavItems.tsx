import React from 'react'
import { Link } from 'wouter'
const NavItems = () => {
  return (
    <nav>
      <Link href='/signin'>
        <a>Create an account</a>
      </Link>
    </nav>
  )
}
export default NavItems
