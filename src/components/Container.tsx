import React from 'react'
import styles from './Container.module.css'
import { Children } from '../types/index'
const Container = ({ children }: Children) => {
  return <div className={styles.container}>{children}</div>
}
export default Container
