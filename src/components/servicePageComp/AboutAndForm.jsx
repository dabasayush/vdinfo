import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutUs from './AboutUs'
import ContactForm from '../../components/forms/contactForm/ContactForm'

import styles from './styles.module.scss'

export default function AboutAndForm() {
  return (
    <section className={styles.about_and_form} style={{marginTop:"100px"}}>
        <Container>
            <Row>
                <Col md={8}>
                    <AboutUs />
                </Col>
                <Col md={4}>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    </section>
  )
}
