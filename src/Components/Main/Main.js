import React from 'react'
import MainNav from '../MainNav/MainNav'
import styles from './Main.module.css'

function Main() {
  return (
    <div className={styles.main_container}>
        <MainNav />
    </div>
  )
}

export default Main