import React from 'react';
import styles from './styles.module.scss';

export default function AdminFooter() {
  return (
    <div className={styles.admin_footer}>
        <div className={styles.footer__copyright}>
            <section>
                &#169;2024 VD Infotech All Rights Resereved.
            </section>
        </div>
    </div>
  )
}
