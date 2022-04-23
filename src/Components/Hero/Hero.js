import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_content_container}>
      <h1 className={styles.hero_content_heading}>Computer Engineering</h1>
      <h3 className={styles.hero_content_para}>142,765 Computer Engineers follow this</h3>
      </div>
    </div>
  )
}

export default Hero