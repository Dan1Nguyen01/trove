import React from 'react'
import {Link} from 'react-router-dom';
import styles from './styles.module.css';
import img1 from '../../imgs/testing.jpg'
import {FcGoogle} from 'react-icons/fc';
const CLIENT_ID = '196869371751-uk3rpto9ier6hk932s1glt961v20j876.apps.googleusercontent.com';
const CLIENT_SECR= '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';

const Login = () => {
  
  return (
    <div className={styles.trove__li_containter}>
        <div className={styles.right}>
					<h2 className={styles.from_heading}>Members Log in</h2>
					<input type="text" className={styles.input} placeholder="Email" />
					<input type="text" className={styles.input} placeholder="Password" />
					<button className={styles.btn}>Log In</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn}>
						<FcGoogle/>
						<span>Sing in with Google</span>
					</button>
					<p className={styles.text}>
						New Here ? <Link to="/signup">Sign Up</Link>
					</p>
				</div>

    </div>
  )
}

export default Login