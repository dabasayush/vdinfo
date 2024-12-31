import React from 'react'
import styles from './styles.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Dcard from '../Cards/Dcard/Dcard';


export default function ProcessWeFollow() {
  return (
    <section className={styles.processWeFollow}>
      <Container>
        <Row className={styles.processWeFollow__content}>
          <Col md={12}>
            <h3 className='text-center text-uppercase'>Process We 
              <span> FOllow</span>
            </h3>
          </Col>
          <Col md={12}>
            <Dcard />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
