import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import NavBarCartButton from "./NavBarCartButton";
import AuthContext from "../store/auth-context";
const NavBar = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/">HOME</Link>{" "}
          </Navbar.Brand>
          <Navbar.Brand>
            <NavLink to="/store">STORE</NavLink>
          </Navbar.Brand>
          <Navbar.Brand>
            {" "}
            <NavLink to="/about">ABOUT</NavLink>{" "}
          </Navbar.Brand>
          <Navbar.Brand>
            {" "}
            <NavLink to="/login">Login</NavLink>{" "}
          </Navbar.Brand>
          <Navbar.Brand>
            {" "}
            <NavLink to="/contactUs">Contact Us</NavLink>{" "}
          </Navbar.Brand>
          <Navbar.Brand>
            <NavBarCartButton onClick={props.onShowCart} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
