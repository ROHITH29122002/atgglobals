import React from 'react'
import styles from './Modal.module.css'
import google from './google.png'
import facebook from './facebook.png'
import login from './login.svg'
import close from './close.png'

function Modal({closeModal}) {
  return (
    <div className={styles.background}>
            <button className={styles.close_btn} onClick={() => closeModal(false)}><img src={close} alt='close' /></button>
        <div className={styles.body}>
          <div className={styles.intro}>
            <p>Let's learn, share &amp; inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
          </div>
          <div className={styles.acc_div}>
              <h2>Create Account</h2>
              <p>Already have an account? <span>Sign In</span></p>
          </div>
          <div className={styles.info_div}>
              <div className={styles.info_left}>
                  <div className={styles.name_container}>
                      <input  className={styles.input} placeholder='First Name'/>
                      <input className={styles.input} placeholder='Last Name'/>
                  </div>
                  <div>
                      <input className={styles.input1} placeholder='Email'/>
                  </div>
                  <div>
                      <input className={styles.input1} placeholder='Password'/>
                  </div>
                  <div>
                      <input className={styles.input1} placeholder='Confirm Password'/>
                  </div>
                  <div className={styles.create_btn_div}>
                      <button className={styles.create_btn}>Create Account</button>
                  </div>
                  <div className={styles.facebook_btn_container}>
                      <button className={styles.facebook_btn}><img src={facebook} alt='facebook'/>Sign up with Facebook</button>
                  </div>
                  <div className={styles.google_btn_container}>
                      <button className={styles.google_btn}><img src={google} alt='google'/>Sign up with Google</button>
                  </div>
              </div>
              <div className={styles.info_right}>
                  <img src={login} alt='login'/>
                  <p>By signing up, you agree to our Terms &amp; conditions, Privacy policy</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Modal