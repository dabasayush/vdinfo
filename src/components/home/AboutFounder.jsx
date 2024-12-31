import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.scss'
export default function AboutFounder() {
  return (
    <section className={styles.about_founder}>
        <Container>
            <Row style={{border:"1px solid white",}}>
                <Col className={styles.about_founder__content} md={8}>
                    <h2>
                        SEO Agency India’s #1 Digital Marketing Strategist Teaches The Secrets of How You Can Transform Your
                    </h2>
                    <div className={styles.titles}>
                        <ul>
                            {
                                titles && titles.map((item, index) => (
                                    <li key={index}>
                                        {item.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className={styles.about}>
                        <h4>
                            Transform Your Business into A Brand with 10x Growth
                        </h4>
                        <h3>
                            Meet Vishal Dagar (Founder & CEO of VD INFOTECH) Online
                        </h3>
                    </div>
                    
                    <div className={styles.aboutceo}>
                        <h4>
                            What other SEO companies don't tell you | SEO Industry Exposed by VD
                        </h4>
                    </div>
                    
                    <div className={styles.about_founder__buttons}>
                        <Button
                            variant="secondary"
                            className={`ms-lg-3 text-uppercase primary ${styles.btn_secondary} ${styles.slot_button}`}
                            >
                                Book Your Slot Now!
                        </Button>
                        <Button
                            variant="primary"
                            className={`ms-lg-3 text-uppercase secondary ${styles.btn_primary} ${styles.book_button}`}
                            >
                                Know My Vision
                        </Button>
                    </div>
                </Col>

                <Col md={4} className={styles.about_founder__image}>
                
                    {/* <div className='d-flex justify-content-end'>
                        <img height={400} src="/images/vishal-sir-pic.png" />
                    </div> */}
                </Col>
            </Row>
        </Container>
    </section>
  )
}

const titles = [
    {
        title: "Online Presence"
    }, {
        title: "Traffic on Website"
    }, {
        title: "Genuine B2B Leads"
    }, {
        title: "Sales"
    }, {
        title: "Online Reputation"
    },
]