import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import styles from './styles.module.scss'
import ServiceFlipCard from '../Cards/ServiceFlipCard/ServiceFlipCard'


export default function Discuss({data}) {
  return (
    <section className={styles.discuss}>
        <Container>
            <Row>
                <Col>
                    <h2 className='text-center'>
                        {data.title} <span>Project?</span>
                    </h2>
                </Col>
            </Row>

            <Row>
                <Col className={styles.discuss__cards}>
                    {data.flipCards && data.flipCards.map((card, index)=>(
                        <ServiceFlipCard 
                            key={index}
                            serviceTitle={card.serviceTitle}
                            serviceContent={card.serviceContent}
                            image={card.image}
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    </section>
  )
}
