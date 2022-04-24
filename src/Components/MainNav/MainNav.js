import React, { useState } from 'react'
import styles from './MainNav.module.css'
import arrow_down from './arrow_down.svg'
import users from './users.svg'

function MainNav() {
  const [active,setactive] = useState([true,false,false,false,false])
  console.log(active);
  return (
    <div className={styles.main_nav_container}>
      <div className={styles.nav_left}>
        <button 
        id={active[0] ? styles.clicked : ''}
          className={styles.nav_filter_btn}
          onClick = {() => {
            setactive( prevactive => {
              return [true,false,false,false,false]
            })
            
          }}
        >All Posts(32)
        </button>
        <button 
        id={active[1] ? styles.clicked : ''}
          className={styles.nav_filter_btn}
          onClick = {() => {
            setactive( prevactive => {
              return [false,!prevactive[1],false,false,false]
            })
          }}
        >
          Articles
        </button>
        <button 
        id={active[2] ? styles.clicked : ''}
        className={styles.nav_filter_btn}
        onClick = {() => {
          setactive( prevactive => {
            return [false,false,!prevactive[2],false,false]
          })
        }}
        >
          Event
        </button>
        <button 
        id={active[3] ? styles.clicked : ''}
        onClick = {() => {
          setactive( prevactive => {
            return [false,false,false,!prevactive[3],false]
          })
        }}
        className={styles.nav_filter_btn}
        >
          Education
        </button>
        <button 
        id={active[4] ? styles.clicked : ''}
        className={styles.nav_filter_btn}
        onClick = {() => {
          setactive( prevactive => {
            return [false,false,false,false,!prevactive[4]]
          })
        }}
        >
          Job
        </button>
      </div>
      <div className={styles.nav_right}>
        <button className={styles.write_btn}>Write a Post <img className={styles.arrow_down_img} src={arrow_down} alt='arrow down'/></button>
        <button className={styles.group_btn}><img className={styles.users_img}  src={users} alt='users'/>Join Group</button>
      </div>
      <hr className={styles.nav_borderline} />
    </div>
  )
}

export default MainNav