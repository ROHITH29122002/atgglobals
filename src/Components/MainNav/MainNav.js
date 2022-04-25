import React, { useState } from 'react'
import styles from './MainNav.module.css'
import arrow_down from './arrow_down.svg'
import users from './users.svg'
import leave from './leave.svg'

function MainNav() {
  const [active,setactive] = useState([true,false,false,false,false])
  const [clicked,setclicked] = useState(false)
  console.log(active);
  return (
    <div className={styles.main_nav_container}>
      <div className={styles.nav_left}>
        <button 
        id={active[0] ? styles.active : ''}
          className={styles.nav_filter_btn}
          onClick = {() => {
            setactive( prevactive => {
              return [true,false,false,false,false]
            })
            
          }}
        >All Posts(32)
        </button>
        <button 
        id={active[1] ? styles.active : ''}
          className={styles.nav_filter_btn}
          onClick = {() => {
            setactive( prevactive => {
              return [false,true,false,false,false]
            })
          }}
        >
          Articles
        </button>
        <button 
        id={active[2] ? styles.active : ''}
        className={styles.nav_filter_btn}
        onClick = {() => {
          setactive( prevactive => {
            return [false,false,true,false,false]
          })
        }}
        >
          Event
        </button>
        <button 
        id={active[3] ? styles.active : ''}
        onClick = {() => {
          setactive( prevactive => {
            return [false,false,false,true,false]
          })
        }}
        className={styles.nav_filter_btn}
        >
          Education
        </button>
        <button 
        id={active[4] ? styles.active : ''}
        className={styles.nav_filter_btn}
        onClick = {() => {
          setactive( prevactive => {
            return [false,false,false,false,true]
          })
        }}
        >
          Job
        </button>
      </div>
      <div className={styles.nav_right}>
        <button className={styles.write_btn}>Write a Post <img className={styles.arrow_down_img} src={arrow_down} alt='arrow down'/></button>
        <button 
        onClick = {() =>{
          setclicked(prevclicked =>{
            return !prevclicked
          })
        }}
        id={clicked ? styles.clicked : ''}
        className={styles.group_btn}
        >
          <img className={styles.users_img}  src={clicked ? leave : users} alt='users'/>{clicked ? 'Leave Group' : 'Join Group'}
        </button>
      </div>
      <div className={styles.hidden_nav_left}>
        <h2>Posts(38)</h2>
      </div>
      <div className={styles.hidden_nav_right}>
        <button className={styles.select_btn}>
          <label>Filters : </label>
          <select className={styles.select}>
            <option>All</option>
            <option>Article</option>
            <option>Event</option>
            <option>Education</option>
            <option>Job</option>
          </select>
        </button>
      </div>
      <hr id={clicked ? styles.nav_borderline : ''} className={styles.nav_borderline} />
    </div>
  )
}

export default MainNav