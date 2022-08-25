import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Layout = () => {
  return (
    <Container>
      <header className="NavMain-StyledNavbar-module--cls2--2pVZv NavMain-StyledNavbar-module--cls1--3GekH navbar navbar-expand navbar-dark">
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <section>
        <Outlet />
      </section>
    </Container>
  );
};

export default Layout;
