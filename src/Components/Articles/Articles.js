import React,{useState} from 'react'
import styles from './Articles.module.css'
import Article from '../Article/Article'
import location from '../Article/pin.png'
import edit from './edit.png'
import warn from './warn.png'
import up from './up.png'
import group1 from './group1.png'
import group2 from './group2.png'
import group3 from './group3.png'
import group4 from './group4.png'

function Articles() {
  const [clicked,setclicked] = useState([false,false,false,false])
  return (
    <div className={styles.articles_container}>
        <div className={styles.articles_left}>
            <Article />
        </div>
        <div className={styles.articles_right}>
          <div className={styles.location_container}>
            <div className={styles.location_left}>
              <img className={styles.location_img} src={location} alt='location pin'/>
              <input className={styles.location_input} placeholder='Enter Your Location'/>
            </div>
            <div className={styles.location_right}>
              <img className={styles.locaton_edit} src={edit} alt='edit' />
            </div>
          </div>
          <hr className={styles.nav_borderline} />
          <div className={styles.warn_container}>
            <img className={styles.warn_img} src={warn} alt='warn'/>
            <p className={styles.warn_para}>Your location will help us serve better and extend a personalised experience.</p>
          </div>
          <div className={styles.rec_container}>
            <img className={styles.rec_img} src={up} alt='up' />
            <p className={styles.rec_para}>RECOMMENDED GROUPS</p>
          </div>
          <div className={styles.group_container}>
            <div className={styles.group}>
              <img className={styles.group_img} src={group1} alt='group1'/>
              <button 
              className={styles.follow_btn}
              id = {clicked[0] ? styles.clicked : ''}
              onClick = {() => {
                setclicked( prevclicked => {
                  return [!prevclicked[0],false,false,false]
                })
              }}
              >
                {clicked[0] ? 'Followed' : 'Follow'}
              </button>
            </div>
            <div className={styles.group}>
            <img className={styles.group_img} src={group2} alt='group2'/>
              <button 
              className={styles.follow_btn}
              id = {clicked[1] ? styles.clicked : ''}
              onClick = {() => {
                setclicked( prevclicked => {
                  return [false,!prevclicked[1],false,false]
                })
              }}
              >
                {clicked[1] ? 'Followed' : 'Follow'}
              </button>
            </div>
            <div className={styles.group}>
            <img className={styles.group_img} src={group3} alt='group3'/>
              <button 
              id = {clicked[2] ? styles.clicked : ''}
              className={styles.follow_btn}
              onClick = {() => {
                setclicked( prevclicked => {
                  return [false,false,!prevclicked[2],false]
                })
              }}
              >
                {clicked[2] ? 'Followed' : 'Follow'}
              </button>
            </div>
            <div className={styles.group}>
            <img className={styles.group_img} src={group4} alt='group4'/>
              <button 
              id = {clicked[3] ? styles.clicked : ''}
              className={styles.follow_btn}
              onClick = {() => {
                setclicked( prevclicked => {
                  return [false,false,false,!prevclicked[3]]
                })
              }}
              >
                {clicked[3] ? 'Followed' : 'Follow'}
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Articles