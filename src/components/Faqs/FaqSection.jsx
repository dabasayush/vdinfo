import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import SingleAccordion from './SingleAccordion'
import styles from './styles.module.scss'
import DoubleAccordion from './DoubleAccordion';

export default function FaqSection() {
  return (
    <section className={styles.faq_section}>
      <Container style={{border: "1px solid white", padding:"30px"}}>
        <Row className={styles.faq_section__content}>
          <Col md={12}>
            <h3 className='text-center text-uppercase'>Frequently Asked <span>Questions</span></h3>
              
          </Col>
        </Row>
        <Row className="accordion">
          <Col className='d-md-none'>
            <SingleAccordion items={items}/>
          </Col>
          <Col className='d-none d-md-block'>
            <DoubleAccordion items={items}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const items = [
  {
    id: 1,
    question: "What digital marketing services does VD Infotech offer?",
    answer: " VD Infotech is a leading digital marketing agency providing a full range of services, including search engine optimization (SEO), social media marketing, PPC ads, and affiliate marketing. We focus on lead generation, boosting organic reach, and maximizing your ROAS (Return on Ad Spend)."
  },
  {
    id: 2,
    question: " How does VD Infotech improve website ranking with SEO?",
    answer: "At VD Infotech, our search engine optimization (SEO) services improve your website’s ranking by optimizing content, enhancing page speed, and building high-quality backlinks. This helps your site rank higher in search engines, increasing organic traffic and visibility."
  },
  {
    id: 3,
    question: "How can VD Infotech help with lead generation through social media marketing?",
    answer: "Our social media marketing strategies are designed to boost engagement and lead generation. VD Infotech helps clients create impactful campaigns on platforms like Facebook, Instagram, and LinkedIn, using both organic reach and paid ads to grow your audience and increase conversions."
  },
  {
    id: 4,
    question: "What role do paid ads play in VD Infotech’s digital marketing strategies?",
    answer: " VD Infotech uses paid ads such as Google Ads and Facebook Ads to deliver targeted campaigns that drive immediate traffic and conversions. Our focus on optimizing CTR (Click-Through Rate) ensures that your ads perform efficiently and generate high-quality leads."
  },
  {
    id: 5,
    question: "How does VD Infotech measure campaign success using analytics?",
    answer: " We use advanced analytics tools to monitor and optimize digital marketing campaigns. By tracking key metrics such as CTR, ROAS, and traffic, VD Infotech helps businesses understand the performance of their PPC ads and organic marketing efforts, ensuring continuous improvement."
  },
  {
    id: 6,
    question: "How does VD Infotech help optimize page speed for better SEO?",
    answer: "At VD Infotech, we implement effective affiliate marketing programs by partnering with reputable affiliates to promote your products or services. This strategy boosts lead generation and expands your online presence, driving more traffic and conversions."
  },
  {
    id: 7,
    question: "What is VD Infotech’s approach to affiliate marketing?",
    answer: "VD Infotech improves your website’s page speed, which directly impacts SEO and user experience. Faster page loading times lead to better ranking in search engines, improved CTR, and increased visitor engagement, all essential for boosting organic reach."
  },
  {
    id: 8,
    question: "How can VD Infotech increase ROAS through digital marketing?",
    answer: "Our team at VD Infotech focuses on maximizing your ROAS (Return on Ad Spend) by creating highly targeted PPC ads, optimizing Google Ads and Facebook Ads, and improving lead generation strategies. This ensures that every dollar spent on ads delivers significant returns."
  },
  
]
