"use client"

import React, { useState } from 'react';

import LoginForm from '../../../../componentsAdmin/forms/LoginForm'
import { Container } from 'react-bootstrap';


const Login = () => {

  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default Login;