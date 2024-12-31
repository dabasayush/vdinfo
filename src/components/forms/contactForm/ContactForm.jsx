import React from 'react'
import styles from "./styles.module.scss"
import { Button, Col, Row } from 'react-bootstrap'

export default function ContactForm() {
  return (
    <form>
        <div className={styles.form_container}>
            <Row className={styles.form_row}>
                <Col sm={6} md={6}>
                    <input type="text" id="name" name="name" placeholder="Full Name"/>
                </Col>
                <Col sm={6} md={6}>
                    <input type="email" id="email" name="email" placeholder="Email"/>
                </Col>
            </Row>

            <Row className={styles.form_row}>
                <Col sm={6} md={6}>
                    <input type="tel" id="phone" name="phone" placeholder="Phone No."/>
                </Col>
                <Col sm={6} md={6}>
                    <input type="tel" id="whatsapp" name="whatsapp" placeholder="WhatsApp No."/>
                </Col>
            </Row>

            <Row className={styles.form_row}>
                <Col>
                    <input type="text" id="location" name="location" placeholder="Enter Your Location"/>
                </Col>
            </Row>

            <Row className={styles.form_row}>
                <Col>
                    <textarea id="message" name="message" placeholder="Message"></textarea>
                </Col>
            </Row>

            <Row className={styles.form_row}>
                <Col className='d-flex justify-content-center'>
                    <button type="submit">Submit</button>
                </Col>
            </Row>
        </div>
    </form>
  )
}
