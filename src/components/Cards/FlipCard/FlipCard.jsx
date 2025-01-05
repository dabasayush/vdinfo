import React from "react";
import styles from "./styles.module.scss";
import BootStrapModal from "../../Modal";
import Image from "next/image";

export default function FlipCard() {
  return (
    <div className={styles.card_item}>
      <div className={`${styles.eff} ${styles.front}`}>
        <div className={styles.client_image}>
          <img src='/images/ad.jpg' alt='' />
        </div>
        <h5 className={`text-center ${styles.user_name}`}>Ayush Dabas</h5>
        <p className={`text-center ${styles.user_profession}`}>
          Software Developer
        </p>
        <h6>Youtube</h6>
      </div>

      <div className={`${styles.eff} ${styles.back}`}>
        <div>
          <img src='/images/logo/logo-dark.png' alt='' />
        </div>
        <div className='d-flex justify-content-between'>
          <div className=''>
            <h5 className={`pt-4 mt-4 ${styles.user_name}`}>Ayush Dabas</h5>
            <p className={styles.user_profession}>(Software Developer)</p>
          </div>
          <div className={styles.client_back_image}>
            <img src='/images/ad.jpg' alt='' />
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <BootStrapModal
            title={"Youtube"}
            link={
              // "https://www.youtube.com/embed/EngW7tLk6R8?si=MxDU0KGa4FC-_II7?autoplay=1"
              "https://www.youtube.com/embed/pY3WhHALiL0?si=-Zv8ufIU5nt4M1bt?autoplay=1"
            }
          />
        </div>
      </div>
    </div>
  );
}
