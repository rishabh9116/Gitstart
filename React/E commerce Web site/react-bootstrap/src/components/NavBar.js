import React from 'react'
import { Container , Navbar } from 'react-bootstrap'
const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" expand="sm" variant="dark">
            <Container>
                <Navbar.Brand>HOME</Navbar.Brand>
                <Navbar.Brand>STORE</Navbar.Brand>
                <Navbar.Brand>ABOUT</Navbar.Brand>

            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;