import React from 'react'
import styles from './styles.module.scss'

import { PiDotsThreeOutlineFill, PiExport } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';


export default function ProfileCard() {
  return (
    <div className={styles.profile}>
      <div className={styles.profile_image}>
        <img src="/images/ad.jpg" />
      </div>
      <h2 className={styles.profile_username}>Harsh</h2>
      <small className={styles.profile_user_handle}>designer</small>
      <div className={styles.profile_actions}>
        {/* <button className={`${styles.btn} ${styles.btn__primary}`}>Follow</button> */}
        {/* <button className={`${styles.btn} ${styles.btn__icon}`}>
          <PiExport />
        </button>
        <button className={`${styles.btn} ${styles.btn__icon}`}>
          <PiDotsThreeOutlineFill />
        </button> */}
      </div>
      <div className={styles.profile_links}>
        <Link href="#" className={`${styles.link}`}>
          <FaLinkedinIn />
        </Link>
        <Link href="#" className={`${styles.link}`}>
          <FaTwitter />
        </Link>
        <Link href="#" className={`${styles.link}`}>
          <FaFacebookF />
        </Link>
      </div>
    </div>
  )
}
