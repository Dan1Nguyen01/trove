import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {FcGoogle} from 'react-icons/fc';

function Signup() {
	
	return (
		<div className={styles.container}>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Create Account</h2>
					<input type="text" className={styles.input} placeholder="Username" />
					<input type="text" className={styles.input} placeholder="Email" />
					<input
						type="password"
						className={styles.input}
						placeholder="Password"
					/>
					<button className={styles.btn}>Sign Up</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn}>
                        <FcGoogle/>
						<span>Sign up with Google</span>
					</button>
					<p className={styles.text}>
						Already Have Account ? <Link to="/login">Log In</Link>
					</p>
				</div>	
		</div>
	);
}

export default Signup;