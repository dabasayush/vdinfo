"use client"

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import styles from './styles.module.scss';

const AdminHeader = () => {
  return (
    <Navbar expand="lg" className={`py-3 ${styles.admin_nav}`}>
      <Container>
        <Navbar.Brand href="/admin">
          <img
            src="/images/logo/logo-white.png"
            width="150"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto"> {/* Align items to the right */}
            <Nav.Link href="/admin" className="me-3">Home</Nav.Link>
            <Nav.Link href="/admin/blog" className="me-3">Blog</Nav.Link>
            <Nav.Link href="/admin/register" className="me-3">Register</Nav.Link>
            <Button variant="dark" href="/admin/login">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;