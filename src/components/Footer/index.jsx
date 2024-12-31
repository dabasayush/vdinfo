
// components
import Links from "./Links"
import Socials from "./Socials"
import NewsLetter from "./NewsLetter"
import Payment from "./Payment"
import Copyright from "./Copyright"

// styles
import styles from "./styles.module.scss"

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__container}>
            <Links />
            <Socials />
            <NewsLetter />
            <Payment />
            <Copyright />
        </div>
    </div>
  )
}
