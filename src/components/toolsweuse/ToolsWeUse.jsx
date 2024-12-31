import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './styles.module.scss'
import Slider from 'react-slick';


export default function ToolsWeUse({data}) {
  
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
    <section className={styles.tools_we_use}>
        <Container>
            <Row>
                <div className={styles.tools_we_use__content}>
                    <h3 className='text-center text-uppercase mt-3'>
                        Tools <span>We Use</span>
                    </h3>
                    <p className='mt-4 d-flex'>
                        {data.content}
                    </p>

                    <div className={` ${styles.tools_we_use__tools}`}>
                        <Slider {...settings} className={` ${styles.tools_img}`}>
                            {data.images && data.images.map((image, index)=>(
                                <div key={index} className={styles.slide_item}>
                                    <li className='d-flex justify-content-center align-items-center'>
                                        <img src={image.imageSrc} alt={image.alt} className={styles.certificationLogo} />    
                                    </li>
                                </div>
                            ))}
                            
                        </Slider>
                    </div>
                </div>
                
            </Row>
        </Container>
    </section>
  )
}
