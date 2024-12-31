import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "./styles.module.scss"
import Slider from 'react-slick/lib/slider'
import ZCard from '../Cards/ZCard/ZCard';

export default function ClientReview() {

    var settings = {
        autoplay:false,
        autoplaySpeed: 3000,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

  return (
    <section className={styles.client_review}>
        <Container className={styles.client_review__content}>

            <Row className={styles.heading}>
              <h3 className='text-center text-uppercase mt-3'>
                what our clients say <span>about us</span>
              </h3>
            </Row>
            <Row className={styles.client_review__cards}>
                    <Slider {...settings} className={styles.card_list}>
                      <ZCard />
                      <ZCard />
                      <ZCard />
                      <ZCard />
                      {/* <FlipCard />
                      <FlipCard />
                      <FlipCard />
                      <FlipCard /> */}
                    </Slider>
                </Row>
        </Container>
    </section>
  )
} 
