import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Aplikasi Aaron - A11.2021.13668</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
