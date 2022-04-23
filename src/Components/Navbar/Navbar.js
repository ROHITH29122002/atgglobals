import React from 'react'
import styles from './Navbar.module.css'
import logo from './whole.svg'
import search from './search.svg'

function Navbar() {
  return (
    <div className={styles.navbar}>
          <div className={styles.nav_logo_div}>
              <img className={styles.nav_logo_img} src={logo} alt='logo'/>
          </div>
          <div className={styles.nav_search_div}>
              <div className={styles.input_container}>
                  <img className={styles.input_search} src={search} alt='search'/>
                  <input className={styles.nav_input} placeholder='Search for your favorite groups in ATG'/>
              </div>
          </div>
          <div className={styles.nav_login_div}>
              <h2 className={styles.nav_login_heading}>Create account.<span className={styles.nav_login_span}>it's free</span></h2>
          </div>
      </div>
  )
}

export default Navbar