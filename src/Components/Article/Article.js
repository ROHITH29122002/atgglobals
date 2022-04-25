import React, { useState } from 'react'
import styles from './Article.module.css'
import article from './article.png'
import education from './education.png'
import event from './event.png'
import options from './threedots.svg'
import user1 from './user1.png'
import user2 from './user2.png'
import user3 from './user3.png'
import user4 from './user4.png'
import view from './visibility.png'
import share from './share.svg'
import calender from './calender.svg'
import job from './job.svg'
import location from './pin.png'

function Article() {
  const [clicked,setclicked] = useState([false,false,false])
  console.log(clicked)
  return (
    <>
      <div className={`${styles.container}`}>
        <img className={styles.main_img} src={article} alt='article'/>
        <h2 className={styles.type_heading}>✍️ Article</h2>
        <div className={styles.desc_container}>
          <p className={styles.desc}>What if famous brands had regular fonts? Meet <br/>RegularBrands!</p>
          <button onClick = {() => {
            setclicked( prevclicked => {
              return [!prevclicked[0],false,false]
            })
          }}
          >
            <img className={styles.options_img} src={options} alt='options'/>
          </button>
          <div 
          id={clicked[0] ? styles.clicked : ''} 
          className={styles.options_collapse}
          >
            <span className={styles.options_span}>Edit</span>
            <span className={styles.options_span}>Report</span>
            <span className={styles.options_span}>Bookmark</span>
          </div>
        </div>
        <p className={styles.article_heading}>I've worked in UX for the better part of a decade. From now on, I plan to rei…</p>
        <div className={styles.info_div}>
          <div className={styles.info_left}>
            <img className={styles.user_img} src={user1} alt='user'/>
            <h2>Sarthak Kamra</h2>
          </div>
          <div className={styles.info_right}>
            <img className={styles.view_img} src={view} alt='view'/>
            <p>1.4k views</p>
            <button>
              <img className={styles.share_img} src={share} alt='share'/>
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.container}`}>
        <img className={styles.main_img} src={education} alt='article'/>
        <h2 className={styles.type_heading}>🔬️ Education</h2>
        <div className={styles.desc_container}>
          <p className={styles.desc}>Tax Benefits for Investment under National Pension <br/> Scheme launched by Government</p>
          <button
          onClick = {() => {
            setclicked( prevclicked => {
              return [false,!prevclicked[1],false]
            })
          }}
          >
            <img className={styles.options_img} src={options} alt='options'/>
          </button>
          <div 
          id={clicked[1] ? styles.clicked : ''} 
          className={styles.options_collapse}
          >
            <span className={styles.options_span}>Edit</span>
            <span className={styles.options_span}>Report</span>
            <span className={styles.options_span}>Bookmark</span>
          </div>
        </div>
        <p className={styles.article_heading}>I've worked in UX for the better part of a decade. From now on, I plan to rei…</p>
        <div className={styles.info_div}>
          <div className={styles.info_left}>
            <img className={styles.user_img} src={user2} alt='user'/>
            <h2>Sarah West</h2>
          </div>
          <div className={styles.info_right}>
            <img className={styles.view_img} src={view} alt='view'/>
            <p>1.4k views</p>
            <button>
              <img className={styles.share_img} src={share} alt='share'/>
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.container_2}`}>
        <img className={styles.main_img} src={event} alt='event'/>
        <h2 className={styles.type_heading}>🗓️ Meetup</h2>
        <div className={styles.desc_container}>
          <p className={styles.desc}>Finance &amp; Investment Elite Social Mixer @Lujiazui</p>
          <button
            onClick = {() => {
              setclicked( prevclicked => {
                return [false,false,!prevclicked[2]]
              })
            }}
          >
            <img className={styles.options_img} src={options} alt='options'/>
          </button>
          <div 
          id={clicked[2] ? styles.clicked : ''} 
          className={styles.options_collapse}
          >
            <span className={styles.options_span}>Edit</span>
            <span className={styles.options_span}>Report</span>
            <span className={styles.options_span}>Bookmark</span>
          </div>
        </div>
        <div className={styles.details_container}>
          <div className={styles.date_container}>
            <img className={styles.calender_img} src={calender} alt='calender'/>
            <p className={styles.data_para}>Fri, 12 Oct, 2018</p>
          </div>
          <div className={styles.location_container}>
            <img className={styles.location_img} src={location} alt='location'/>
            <p className={styles.location_para}>Ahmedabad, India</p>
          </div>
        </div>
        <button className={styles.link_btn}>Visit Website</button>
        <div className={styles.info_div}>
          <div className={styles.info_left}>
            <img className={styles.user_img} src={user3} alt='user'/>
            <h2>Ronal Jones</h2>
          </div>
          <div className={styles.info_right}>
            <img className={styles.view_img} src={view} alt='view'/>
            <p>1.4k views</p>
            <button>
              <img className={styles.share_img} src={share} alt='share'/>
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.container}`}>
        <h2 className={styles.type_heading}>💼️ Job</h2>
        <div className={styles.details_container}>
          <div className={styles.date_container}>
            <img className={styles.calender_img} src={job} alt='job'/>
            <p className={styles.data_para}>Innovaccer Analytics Private Ltd.</p>
          </div>
          <div className={styles.location_container}>
            <img className={styles.location_img} src={location} alt='location'/>
            <p className={styles.location_para}>Noida, India</p>
          </div>
        </div>
        <button className={`${styles.link_btn} ${styles.success_btn}`}>Apply on Timesjobs</button>
        <div className={styles.info_div}>
          <div className={styles.info_left}>
            <img className={styles.user_img} src={user4} alt='user'/>
            <h2>Joseph Gray</h2>
          </div>
          <div className={styles.info_right}>
            <img className={styles.view_img} src={view} alt='view'/>
            <p>1.4k views</p>
            <button>
              <img className={styles.share_img} src={share} alt='share'/>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article