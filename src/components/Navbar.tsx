import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartButton } from "./CartButton";
import storeImg from "../assets/images/store.png";

type Props = {};

export function Navbar({}: Props) {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto d-flex justify-content-center align-items-center">
          <Nav.Link to="/" as={NavLink}>
            <img src={storeImg} alt="logo" />
          </Nav.Link>
          <Nav.Link to="/" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <CartButton />
      </Container>
    </NavbarBs>
  );
}
