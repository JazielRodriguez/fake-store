import React from 'react'
import { Link } from 'wouter'
import { ImCross } from 'react-icons/im'
import styles from './MobileMenu.module.css'

const MobileMenu = ({ mobileMenuHandler }:any) => {
  const mobileHandler = () => {
    mobileMenuHandler()
  }
  return (
    <div className={styles.menu}>
      <div className={styles['close-btn']} onClick={mobileHandler}>
        <ImCross size='3rem' color='var(--morado)' />
      </div>
      <nav>
        <Link href='/products'>
          <a>About Us</a>
        </Link>
      </nav>
    </div>
  )
}
export default MobileMenu
