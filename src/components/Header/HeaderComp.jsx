"use client";
import { Button, Container, Row, Col } from 'react-bootstrap';

import styles from './styles.module.scss';
import Link from 'next/link';
import { useState } from 'react';

const Main = () => {

    const [activeMenu, setActiveMenu] = useState('');
    const [submenuVisible, setSubmenuVisible] = useState(false);
    const servicesLinks = {
        'digital marketing': [
          { label: 'SEO', href: '/services/digital-marketing/seo' },
          { label: 'Social Media', href: '/services/digital-marketing/social-media' },
        ],
        'design and development': [
          { label: 'Website Design', href: '/services/design-and-development/website-design' },
          { label: 'Website Development', href: '/services/design-and-development/website-development' },
          { label: 'E-Commerce Development', href: '/services/design-and-development/e-commerce-development' },
          { label: 'Application Development', href: '/services/design-and-development/application-development' },
          { label: 'Software Development', href: '/services/design-and-development/software-development' },
        ],
        'software development': [
          { label: 'Website Design', href: '/services/design-and-development/website-design' },
          { label: 'Website Development', href: '/services/design-and-development/website-development' },
          { label: 'E-Commerce Development', href: '/services/design-and-development/e-commerce-development' },
          { label: 'Application Development', href: '/services/design-and-development/application-development' },
          { label: 'Software Development', href: '/services/design-and-development/software-development' },
        ],
      };

      const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
        setSubmenuVisible(true); // Show submenu when hovering over parent
      };
    
      const handleMouseLeave = () => {
        setSubmenuVisible(false); // Hide submenu when mouse leaves both parent and submenu
      };
    
  return (
    <div className={`header_main ${styles.main_header}`}>
      <Container className={styles.main_header__container}>
        <div className={styles.parent_row}>
            <div>
                <Link href={"/"}>
                    <img
                        src="/images/logo/logo-light.png"
                        width="190"
                        className="d-inline-block align-top"
                        alt="Company logo"
                    />
                </Link>
            </div>
            <div className={styles.main_header__middle_links}>
                <ul className={styles.nav_list}>
                    <li>
                        <Link className={styles.nav_links} href={"/"}>Home</Link>
                    </li>
                    <li
                        className={styles.dropdown}
                        onMouseEnter={() => setActiveMenu('services')}
                        onMouseLeave={() => setActiveMenu('')} 
                    >
                        <Link 
                            className={styles.nav_dropdown} 
                            href={"/"}
                        >
                            Services
                        </Link>
                        <div className={styles.sub_menu}>
                            <Row>
                                <Col md={4}>
                                <ul>
                                    <li
                                        onMouseEnter={() => handleMouseEnter('digital marketing')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link className={styles.dropdown_items} href={"/services/digital-marketing"}>
                                        Digital Marketing
                                        </Link>
                                    </li>
                                    <li
                                        onMouseEnter={() => handleMouseEnter('design and development')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link className={styles.dropdown_items} href={"/services/design-and-development"}>
                                        Design and Development
                                        </Link>
                                    </li>
                                    <li
                                        onMouseEnter={() => handleMouseEnter('software development')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link className={styles.dropdown_items} href={"/services/design-and-development"}>
                                            Software Development
                                        </Link>
                                    </li>
                                </ul>
                                </Col>
                                <Col md={8}>
                                    {(activeMenu in servicesLinks) && (
                                        <ul className={styles.dropdown_sub_items_list}
                                            onMouseEnter={() => setSubmenuVisible(true)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {servicesLinks[activeMenu].map((item) => (
                                            <li key={item.href}>
                                                <Link className={styles.dropdown_sub_items} href={item.href}>
                                                    {item.label}
                                                </Link>
                                            </li>
                                            ))}
                                        </ul>
                                    )}
                                </Col>
                            </Row>
                        </div>
                    </li>
                    <li className={styles.dropdown}>
                        <Link 
                            className={styles.nav_dropdown} 
                            href={"#"}
                        >
                            Our Work
                        </Link>
                    </li>
                    <li className={styles.dropdown}>
                        <Link href={"#"}>Pakages</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Company</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Location</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Industries</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Button
                    variant="primary"
                    className={`ms-lg-3 text-uppercase ${styles.btn_primary} ${styles.main__btn_style}`}
                    onClick={() => setExpanded(false)}
                >
                    Get Free Consultation
                </Button>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Main;