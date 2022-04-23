import React, { ReactNode } from 'react'
import styles from './Container.module.css'
interface Children {
  children: ReactNode
}
const Container = ({ children }: Children) => {
  return <div className={styles.container}>{children}</div>
}
export default Container
