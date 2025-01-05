import React from 'react'
import styles from './styles.module.scss'
import { FaStar } from 'react-icons/fa6'
import Image from 'next/image'

export default function Review() {
  return (
    <div>
        <div className={`${styles.review_box} ${styles.card}`}>
            <div className={styles.card_img}>
                <img  src="https://bebran.com/public/uploads/1698746164_be-bran-reviewimg1.webp" alt="Be Bran Reviewimg1" width="290" height="234"/>
            </div>
            <div className={styles.card_body}>
                <div className={styles.card_icon}>
                    <img src="https://bebran.com/public/uploads/1698746164_be-bran-reviewimg1.webp" alt="Be Bran Reviewimg1" width="82" height="82"/>
                </div>
                <h3 className={styles.hF}>Lisa Mc Cornner</h3>
                <ul>
                    <li>
                        <FaStar />
                    </li>
                    <li>
                        <FaStar />
                    </li>
                    <li>
                        <FaStar />
                    </li>
                    <li>
                        <FaStar />
                    </li>
                </ul>
                <p>I was very impressed with the digital marketing services from BeBran. They understood my business needs and developed a customized strategy tailored to my goals. I am pleased with the results I have achieved so far.</p>
                <div className={`text-center ${styles.rfacebook}`}>
                    <img src="https://bebran.com/public/uploads/1698746164_google.webp" alt="Google" width="162" height="70"/>
                </div>
            </div>
        </div>
    </div>
  )
}
