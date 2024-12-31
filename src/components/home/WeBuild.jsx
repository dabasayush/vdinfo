import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from './styles.module.scss';

export default function WeBuild() {
  return (
    <section className={styles.webuild}>
        <Container>
            <Row className={styles.webuild__top}>
                <h2 className='text-center'>
                    We Build Brands
                </h2>
                <h3 className='mt-2 text-center'>
                    Best Build Brands Company in India
                </h3>
                <p className='mt-1 text-center'>
                    We don’t cut corners. We develop an elite SEO strategy using an all-encompassing approach. Success is obtained when we create a sustainable future for your website, achieving and surpassing your goals!
                </p>
            </Row>
            <Row>
                <div className={styles.webuild__cards}>
                    <div className={`d-flex justify-content-around ${styles.row1}`}>
                        <div className={styles.card}>
                            <h5>
                                Web Designing
                            </h5>
                            <p>
                            We specialize in building visually stunning websites to engage your online audience.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h5>
                                Brand Recognition
                            </h5>
                            <p>
                                Brand Empower recognises outstanding companies for quality.
                            </p>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-between ${styles.row2}`}>
                        <div className={styles.card}>
                            <h5>
                                Lead Generation
                            </h5>
                            <p>
                                Webpulse employs a unique city-wise SEO technique to generate targeted leads.
                            </p>
                        </div>
                        <div className={`d-flex align-items-center`}> 
                            <div>
                                <img width={200} src="/images/logo/logo-light.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h5>
                                PR & Branding
                            
                            </h5>
                            <p>
                                Media coverage is done to spread the news on leading news websites.
                            </p>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-around ${styles.row3}`}>
                        <div className={styles.card}>
                            <h5>
                                Digital Marketing
                            </h5>
                            <p>
                                We utilize time-tested practices such as SEO, PPC, Meta Ads etc
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h5>
                                Electronic Media
                            </h5>
                            <p>
                                Telecast is done on National TV Channels such as Zee Business etc.
                            </p>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
  )
}
