import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import { BiSolidMinusCircle } from 'react-icons/bi';
import { BsFillPlusCircleFill } from 'react-icons/bs';

export default function DoubleAccordion({ items }) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className={styles.double_accordion}>
      <Row>
        <Col md={5} className={styles.double_accordion__questions}>
          <ul>
            {items &&
              items.map((item) => (
                <li
                  key={item.id}
                  className={activeTab === item.id ? 'tab active' : ''}
                  onClick={() => handleTabClick(item.id)}
                  style={{
                    background: activeTab === item.id ? 'rgb(255,153,0)' : '',
                    background: activeTab === item.id ? 'linear-gradient(0deg, rgba(255,153,0,1) 0%, rgba(207,120,30,1) 45%, rgba(120,81,52,1) 100%)' : '',
                    border: activeTab === item.id ? 'none' : '',
                  }}
                >
                  <p>{item.question}</p>
                  {activeTab === item.id ? (
                        <BiSolidMinusCircle style={{ color: 'black', fontSize:"20px" }} />
                    ) : (
                        <BsFillPlusCircleFill style={{ color: 'white', fontSize:"20px" }} />
                    )}
                </li>
              ))}
          </ul>
        </Col>

        <Col md={7} className={styles.double_accordion__answer}>
          <div className={styles.answer_area}>
            {items &&
              items.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.answer_content} ${
                    activeTab === item.id ? styles.visible : styles.hidden
                  }`}
                >
                  <span>Answer</span>
                  <p>{item.answer}</p>
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </section>
  );
}
