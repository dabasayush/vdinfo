import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick';
import styles from './styles.module.scss'

export default function CertifiedDigitalMarketing() {

    var settings = {
        autoplay:true,
        autoplaySpeed: 5000,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
    };

  return (
    <section className={styles.digital_marketing}>
        <Container>
            <Row>
                <div className={styles.digital_marketing__content}>
                    <h3 className='text-center text-uppercase mt-3'>
                        certified digital marketing
                    </h3>
                    <h4 className='text-center text-uppercase '>
                        Professionals
                    </h4>
                    <p className='mt-4 d-flex'>
                    At VD Infotech, our team consists of certified digital marketing professionals dedicated to delivering top-notch Digital marketing services. As a leading marketing agency, we specialize in various areas, including online marketing strategies, lead generation, and advertising agency solutions. Our experts are skilled in leveraging the latest tools and techniques to enhance brand visibility and drive results. With a strong focus on maximizing ROI, our certified professionals ensure that every campaign is tailored to meet your unique business goals. Trust VD Infotech for your digital marketing needs and experience the difference that expertise can make in your online success.
                    </p>
                </div>
                <div className={styles.digital_marketing__certifications}>
                    <Slider {...settings} className={` ${styles.certificate_img}`}>
                        <div className={styles.slide_item}>
                            <li className='d-flex justify-content-center align-items-center'>
                                <img src="/images/certifications/yt.png" alt="YouTube Certified" className={styles.certificationLogo} />    
                            </li>
                        </div>
                        <div className={styles.slide_item}>
                            <li className='d-flex justify-content-center align-items-center'>
                                <img src="/images/certifications/facebook.png" alt="Bing Certified" className={styles.certificationLogo} />
                            </li>
                        </div>
                        <div className={styles.slide_item}>
                            <li className='d-flex justify-content-center align-items-center'>
                                <img src="/images/certifications/bing.png" alt="Google AdWords Certified" className={styles.certificationLogo} />
                            </li>
                        </div>
                        <div className={styles.slide_item}>
                            <li className='d-flex justify-content-center align-items-center'>
                                <img src="/images/certifications/google.ad.png" alt="Google Analytics Certified" className={styles.certificationLogo} />
                            </li>
                        </div>
                        <div className={styles.slide_item}>
                            <li className='d-flex justify-content-center align-items-center'>
                                <img src="/images/certifications/google-analytics.png" alt="Google Analytics Certified" className={styles.certificationLogo} />
                            </li>
                        </div>
                    </Slider>
                </div>
            </Row>
        </Container>
    </section>
  )
}
