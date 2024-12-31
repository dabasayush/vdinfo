import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles.module.scss'

// icons

const HeroBanner = () => {
  return (
    <section className={styles.hero_banner} style={{marginTop:"100px"}}>
        <Container>
            <div className={styles.hero_banner__container}>
                <Row>
                    <Col xs={0} md={4} className={`d-none d-md-flex align-item-center justify-content-start ${styles.hero_banner__left}`}>
                        <div style={{marginTop:"78px"}}>
                            <span>We Specialize in</span>
                            <h2>
                                Digital <br />  Marketing
                            </h2>
                        </div>
                            
                    </Col>
                    <Col xs={12} md={4} className="d-flex justify-content-center">
                    <img
                        // src="/images/7th-year.png"
                        src="/images/bnr-img.png"
                        alt="Middle Column"
                        style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
                    />
                    </Col>
                    <Col xs={0} md={4} className={`d-none d-md-flex justify-content-end ${styles.hero_banner__right}`}>
                        <div style={{marginTop:"78px"}}>
                            <span>We Expert in</span>
                            <h2 className={styles.h2mt}>
                                Performance <br /> Marketing
                            </h2>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
  );
};

export default HeroBanner;
