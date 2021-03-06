import React from 'react'
import styles from './Navbar.module.css'
import logo from './whole.svg'
import search from './search.svg'
import menu from './menu.png'
import Modal from './Modal'
import { useState } from 'react'

function Navbar() {
  const [toggle,setToggle] = useState(false)
  const [openModal,setopenmodal] = useState(false)
  function handlemodel(){
    setopenmodal(false)
  }
  return (
    <div className={styles.navbar}>
          <div className={styles.nav_logo_div}>
              <img className={styles.nav_logo_img} src={logo} alt='logo'/>
          </div>
          <button 
            className={styles.open}  
            onClick={() => setToggle(prevtoggle => {
              return !prevtoggle
            }
            )}
            >
              <img className={styles.hamburger} src={menu} alt='menu'/>
          </button>
          <div 
          className={styles.nav_collapse}
          id = {toggle ? styles.hidden : ''}
          >
            <div className={styles.input_container}>
                  <img className={styles.input_search} src={search} alt='search'/>
                  <input className={styles.nav_input} placeholder='Search for your favorite groups in ATG'/>
            </div>
              <button
              onClick={() => {
                setopenmodal(true)
              }}
               className={styles.nav_login_heading}>Create account.<span className={styles.nav_login_span}>it's free</span></button>
          </div>
          <div className={styles.nav_search_div}>
              <div className={styles.input_container}>
                  <img className={styles.input_search} src={search} alt='search'/>
                  <input className={styles.nav_input} placeholder='Search for your favorite groups in ATG'/>
              </div>
          </div>
          <div className={styles.nav_login_div}>
              <button 
              className={styles.nav_login_heading}
              onClick={() => {
                setopenmodal(true)
              }}
              >
                Create account.
              <span 
              className={styles.nav_login_span}
              >
                it's free
              </span>
              </button>
          </div>
          {openModal && <Modal closeModal={handlemodel}/>}
      </div>
  )
}

export default Navbar