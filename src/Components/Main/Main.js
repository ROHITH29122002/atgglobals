import React from 'react'
import MainNav from '../MainNav/MainNav'
import Articles from '../Articles/Articles'
import styles from './Main.module.css'

function Main() {
  return (
    <div className={styles.main_container}>
        <MainNav />
        <Articles />
    </div>
  )
}

export default Main