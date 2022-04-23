import React from 'react'
import styles from './Hero.module.css'
import hero from './hero1x.svg'

function Hero() {
  return (
    <div className={styles.hero_container}>
      <img className={styles.hero_img} src={hero} alt='hero img'/>
    </div>
  )
}

export default Hero