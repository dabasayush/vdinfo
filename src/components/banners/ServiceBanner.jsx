import React from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from './styles.module.scss'

export default function ServiceBanner() {
  return (
    <div className={styles.service_banner}>
        <Container className={styles.service_banner__container}>
            <Row>
                banner
            </Row>
        </Container>
    </div>
  )
}
