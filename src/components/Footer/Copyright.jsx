// lib
import Link from "next/link"

// icons
// import { IoLocationSharp } from "react-icons/io5";

// styles
import styles from "./styles.module.scss"


export default function Copyright() {
  return (
    <div className={styles.footer__copyright}>
        <section>
            &#169;2024 VD Infotech All Rights Resereved.
        </section>
        <section>
            <ul>
                {data.map((item) => (
                    <li key={item.name}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </section>
    </div>
  )
}

const data = [
    {
        name: "Privacy Center",
        link: ""
    },
    {
        name: "Privacy & Cookie Policy",
        link: ""
    },
    {
        name: "Manage Cookies",
        link: ""
    },
    {
        name: "Terms & Conditions",
        link: ""
    },
]