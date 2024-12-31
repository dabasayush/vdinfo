// icons
import { FaFacebookF } from "react-icons/fa"

import { 
  BsInstagram, 
  BsPinterest, 
  BsSnapchat, 
  BsTwitter, 
  BsYoutube 
} from "react-icons/bs";

// styles
import styles from "./styles.module.scss"
import Link from "next/link";


export default function Socials() {
  return(  
    <div className={styles.footer__socials}>
      <section>
        <h3>Stay Connected</h3>
        <ul>
          <li>
            <Link href="" target="_blank">
              <FaFacebookF/>
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <BsInstagram />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <BsTwitter />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <BsYoutube />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <BsPinterest />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <BsSnapchat />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}


// export default function Socials({platform, link}) {
//   const getIcon = (platform) => {
//     switch (platform){
//       case "facebook":
//         return <FaFacebookF/>
//         case "instagram":
//           return <BsInstagram/>
//         case "twitter":
//           return <BsTwitter />
//         case "youtube":
//           return <BsYoutube />
//         case "pinterest":
//           return <BsPinterest />
//     }
//   }
//   return <Link href={link}>{getIcon(platform)}</Link>
// }
