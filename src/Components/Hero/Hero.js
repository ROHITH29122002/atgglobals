import React, { useState } from 'react'
import styles from './Hero.module.css'
import nav_icon from './navicon.svg'

function Hero() {
  const [join,setjoin] = useState(false)
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_hidden}>
        <div className={styles.nav_icon_container}>
          <img className={styles.nav_icon_img} src={nav_icon} alt='nav icon'/>
        </div>
        <button 
        className={styles.group_toggle_btn}
        onClick={() => setjoin( prevjoin => {
          return !prevjoin
        })}
        >
          {join ? 'Leave Group' : 'Join Group'}
        </button>
      </div>
      <div className={styles.hero_content_container}>
        <h1 className={styles.hero_content_heading}>Computer Engineering</h1>
        <h3 className={styles.hero_content_para}>142,765 Computer Engineers follow this</h3>
      </div>
    </div>
  )
}

export default Hero