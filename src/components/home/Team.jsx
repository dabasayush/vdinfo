import React from 'react'
import styles from './styles.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import ProfileCard from '../Cards/ProfileCard/ProfileCard';


export default function Team() {
  return (
    <section className={styles.our_team}>
      <Container>
        <Row className={styles.our_team__content}>
          <Col md={12}>
            <h3 className='text-center text-uppercase'>OUR Professionals 
              <span> Team</span>
            </h3>
          </Col>
          <Col md={12} className='d-md-flex justify-content-between'>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
