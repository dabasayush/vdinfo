"use client";
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Move useRouter inside the component

import styles from './styles.module.scss';

const Mobile = () => {
  const [expanded, setExpanded] = useState(false); // State to control navbar toggle
  const [activeLink, setActiveLink] = useState(''); // State to track active link
  const router = useRouter(); // Hook for navigation

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setExpanded(false);

    const formattedLink = link.replace(/\s+/g, '-').toLowerCase();
    
    router.push(`/services/${formattedLink}`);
  };

  return (
    <div className={`header_main ${styles.main}`}>
      <div className={styles.main__container}>
        <Navbar className={styles.main} expanded={expanded} expand="lg" sticky="top">
          <Container>
            {/* Logo on the left side */}
            <Navbar.Brand href="/">
              <img
                src="/images/logo/logo-light.png"
                width="190"
                className="d-inline-block align-top"
                alt="Company logo"
              />
            </Navbar.Brand>

            {/* Toggle for mobile view */}
            <Navbar.Toggle
              style={{ backgroundColor: "white" }}
              aria-controls="navbar-nav"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />

            <Navbar.Collapse id="navbar-nav">
              {/* Links in the middle */}
              <Nav className={`mx-auto rounded ${styles.main__middle_links}`}>
                <Nav.Link
                  href="/"
                  onClick={() => setActiveLink('home')}
                >
                  Home
                </Nav.Link>

                <NavDropdown title="Services" id="services-dropdown" className="text-dark">
                  <NavDropdown.Item
                    
                    onClick={() => handleLinkClick('digital marketing')}
                  >
                    Digital Marketing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    
                    onClick={() => handleLinkClick('design and development')}
                  >
                    Design and Development
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    
                    onClick={() => handleLinkClick('software development')}
                  >
                    Software Development Service
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Our Work" id="work-dropdown">
                  <NavDropdown.Item
                    onClick={() => setActiveLink('work1')}
                  >
                    Work 1
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => setActiveLink('work2')}
                  >
                    Work 2
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => setActiveLink('work3')}
                  >
                    Work 3
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Packages" id="packages-dropdown">
                  <NavDropdown.Item
                    onClick={() => setActiveLink('package1')}
                  >
                    Package 1
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => setActiveLink('package2')}
                  >
                    Package 2
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => setActiveLink('package3')}
                  >
                    Package 3
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  href="#company"
                  onClick={() => setActiveLink('company')}
                >
                  Company
                </Nav.Link>
                <Nav.Link
                  href="#location"
                  onClick={() => setActiveLink('location')}
                >
                  Location
                </Nav.Link>
                <Nav.Link
                  href="#industries"
                  onClick={() => setActiveLink('industries')}
                >
                  Industries
                </Nav.Link>
              </Nav>

              {/* Button on the right side */}
              <Button
                variant="primary"
                className={`ms-lg-3 text-uppercase ${styles.btn_primary} ${styles.main__btn_style}`}
                onClick={() => setExpanded(false)}
              >
                Get Free Consultation
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Mobile;