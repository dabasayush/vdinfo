import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.scss'


export default function SeoWorks() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

  return (
    <section className={styles.seo_works}>
      <Container>
        <Row className={styles.seo_works__sec_row}>
            <Col md={3}>
                <ul className={`${styles.tab_col}`}>
                    {
                        tabs && tabs.map((item, index) => (
                        <li key={index}>
                            <a
                                className={activeTab === item.id ? 'tab active' : ''}
                                onClick={() => handleTabClick(item.id)}
                                style={{backgroundColor: activeTab === item.id ? "#d92727" : ""}}
                            >
                                {item.name}
                            </a>
                        </li>))
                    }
                </ul>
            </Col>
            <Col md={5}>
                <div className={styles.content_col}>
                    <div className={styles.tabs_data}>
                        {
                            tabs&& tabs.map((item, index)=>(
                                activeTab === item.id && 
                                <div key={index}>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className={styles.videosec}>
                    <video width={"100%"} autoPlay muted playsInline src="/videos/seo.mp4"></video>
                    {/* <video width={"100%"} autoPlay muted playsInline>
                        <source src="https://www.adlift.com/in/wp-content/themes/adlift-india/vid/GIF_Seo_that_works.mp4" type="video/mp4" />
                    </video> */}
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
}

const tabs = [
    {
        id: 1,
        name:"seo",
        title: "SEO that works",
        content: "Are you flitting from one digital marketing agency to another in search of that tailor-made Search Engine Optimization (SEO) plan that delivers your business goals? Look no further. Your search for the best digital marketing agency ends here - with AdLift.",
    },{
        id: 2,
        name:"content marketing",
        title: "Content marketing - Telling great Stories at Scale",
        content: "We, as a digital marketing company, plan and conceptualize to create, strategize, distribute and promote result driven content that converts through our proprietary ContentLift platform."
    },{
        id: 3,
        name:"paid media",
        title: "Paid Media - Performance marketing that’s profitable",
        content: "As a specialized digital marketing agency, our goal is to assist you in reaching your target audience and driving conversions through highly targeted advertising across various platforms. With a team of experienced experts, we will work closely with you to create and optimize your campaigns, ensuring you achieve the best possible return on investment (ROI)."
    },{
        id: 4,
        name:"social media marketing",
        title: "Social Media Marketing that drives brand success",
        content: "We excel in delivering top-notch digital marketing services that harness the potential of social media platforms. Our strategic approach ensures effective audience engagement, heightened brand awareness, and substantial expansion of your online presence. With a focus on achieving tangible results, our result-driven social media strategy is tailored to help you meet and surpass your business objectives."
    },{
        id: 5,
        name:"influencer marketing",
        title: "Influencer Marketing – Data-driven influencer marketing",
        content: "Our digital marketing company offers data-driven influencer marketing services. Collaborate with influencers who resonate with your brand to boost awareness, reach new audiences, and drive sales. Achieve remarkable results with our tailored approach."
    }
]
