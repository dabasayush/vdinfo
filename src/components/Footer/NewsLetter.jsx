
// styles
import Link from "next/link"
import styles from "./styles.module.scss"


export default function NewsLetter() {
  return (
    <div className={styles.footer__newsletter}>
        <h3>Sign Up For Our NewsLetter</h3>    
        <div className={styles.footer__flex}>
            <input type="text" placeholder="Your Email Address" />
            <button className={styles.btn_primary}>SUBSCRIBE</button>
        </div>
        <p>
            By clicking the SUBSCRIBE button, you are agreeing to {""}
            <Link className={styles.text_underline} href="">Our Privacy & Cookie Policy</Link>
        </p>
    </div>
  )
}
