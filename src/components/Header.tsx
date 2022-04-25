import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Container from './Container'
import styles from './Header.module.css'
import MobileMenu from './MobileMenu'
import NavItems from './NavItems'
import { Link } from 'wouter'
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
          <Link href='/'>
            <h2>Your Store</h2>
          </Link>
          {isTabletOrDesktop && <NavItems />}
          {!isTabletOrDesktop && (
            <div
              className={styles['mobile-menu-btn']}
              onClick={mobileMenuHandler}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {menuMobileState && (
            <MobileMenu mobileMenuHandler={mobileMenuHandler} />
          )}
        </div>
      </Container>
    </header>
  )
}
export default Header
