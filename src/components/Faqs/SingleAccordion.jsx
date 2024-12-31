"use client"
import React, { useState } from 'react';

import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiSolidMinusCircle } from "react-icons/bi";

import styles from './styles.module.scss'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.single_accordion}>
        <div className={styles.single_accordion__faq_accordion}>
            {items && items.map((item, index) => (
                <div key={index} className={styles.accordion_item}>
                    <div className={`p-2 d-flex justify-content-between ${styles.accordion_title}`} onClick={() => handleItemClick(index)}>
                        <h6>{`0${index + 1}. ${item.question}`}</h6>
                        <button className='active-btn-sty'>
                        {activeIndex === index ? <BiSolidMinusCircle style={{ fontSize: "28px" }} /> : <BsFillPlusCircleFill style={{ fontSize: "28px" }} />}
                        </button>
                    </div>
                    {activeIndex === index && (
                        <div className={styles.accordion_content}><p>{item.answer}</p></div>
                    )}
                </div>
            ))}
            </div>
    </section>
  );
};

export default Accordion;
