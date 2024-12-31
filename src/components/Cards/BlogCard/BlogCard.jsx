import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogCard({post}) {
    // console.log("post", post)
  return (
    <div className={styles.bolgbox}>
        <div className={styles.blogimg}>
            <Image width={320} height={210} src={post.url} alt="Unlocking The Power Of Raven Tools"/>
            <div className={styles.btxt}>
                <div className={styles.vdic}>
                    <Image width={35} height={10} src="/images/logo/logo-dark.png" alt="1709094662 Bebran"/>
                </div>
                <div className={styles.stxt}>
                    <div className={styles.ft}>VD Infotech</div>
                    <div className={styles.st}>Sr. Writer</div>
                </div>
            </div>
        </div>
        <div className={styles.blogtxt}>
            <h4>
                {post.title}
            </h4>
            <p>{post.description}</p>... 
        </div>
    </div>
  )
}
