import React from 'react'
import styles from './Articles.module.css'
import Article from '../Article/Article'

function Articles() {
  return (
    <div className={styles.articles_container}>
        <div className={styles.articles_left}>
            <Article />
        </div>
        <div className={styles.articles_right}>
            <h1>Location</h1>
        </div>
    </div>
  )
}

export default Articles