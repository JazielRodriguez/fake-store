import React from 'react'
import ReactLoading from 'react-loading'
import styles from './LoadingComponent.module.css'
const LoadingComponent = () => {
  return (
    <div className={styles['loading-component']}>
      <ReactLoading
        type='spinningBubbles'
        color='#3d348b'
        height={128}
        width={128}
      />
    </div>
  )
}
export default LoadingComponent
