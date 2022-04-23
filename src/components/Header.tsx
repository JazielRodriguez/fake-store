import React, { useState } from 'react'
import { Link } from 'wouter'
import { useMediaQuery } from 'react-responsive'
import Container from './Container'
import styles from './Header.module.css'
import MobileMenu from './MobileMenu'
const Header = () => {
  const [menuMobileState, setMenuMobileState] = useState<boolean>(false)
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 48rem)' })

  const mobileMenuHandler = () => {
    setMenuMobileState(!menuMobileState)
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles['header-content']}>
          <h2>Your Store</h2>
          {isTabletOrDesktop && (
            <nav>
              <Link href='/products'>
                <a>About Us</a>
              </Link>
            </nav>
          )}
          {!isTabletOrDesktop && (
            <div className={styles['mobile-menu-btn']} onClick={mobileMenuHandler
            }>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {menuMobileState && <MobileMenu />}
        </div>
      </Container>
    </header>
  )
}
export default Header
