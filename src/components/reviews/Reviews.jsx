import React from 'react'
import styles from './styles.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import ReviewCard from '../Cards/ReviewCard/ReviewCard'

export default function Reviews() {
  return (
    <section className={styles.reviews}>
        <Container>
            <Row className={styles.reviews__content}>
                <Col md={12}>
                    <h3 className='text-center text-uppercase'>Outstanding 
                    <span> Reviews</span>
                    </h3>
                </Col>
            </Row>

            <Row>
                <Col lg={3} md={6} sm={6}>
                    <ReviewCard/>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <ReviewCard/>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <ReviewCard/>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <ReviewCard/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
