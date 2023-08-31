import React from 'react'
import { Container , Navbar } from 'react-bootstrap'
import NavBarCartButton from './NavBarCartButton';
const NavBar = (props) => {
  return (
    <div>
        <Navbar bg="dark" expand="sm" variant="dark">
            <Container>
                <Navbar.Brand>HOME</Navbar.Brand>
                <Navbar.Brand>STORE</Navbar.Brand>
                <Navbar.Brand>ABOUT</Navbar.Brand>
                <Navbar.Brand> 
                   <NavBarCartButton onClick = {props.onShowCart} />
                   </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;