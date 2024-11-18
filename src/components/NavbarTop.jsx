import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavbarTop() {
  return (
    <>
      <Navbar
        expand="false"
        id="navbar1"
        className="fixed-top shadow navbar-styles"
      >
        <Container>
          <Navbar.Toggle
            className="prueba2"
            aria-controls="offcanvasNavbar"
            data-bs-theme="dark"
          />
          <Navbar.Offcanvas
            className="w-25 background-night custom-offcanvas"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header className="color-text-our-white" closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <Nav className="saira color-text-our-white d-flex h-100 w-100 align-items-center">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "link-active m-0 ps-4 py-4"
                      : "link-inactive m-0 ps-4 py-4"
                  }
                  to="/"
                >
                  Home
                  <i className="ms-auto bi bi-chevron-right"></i>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "link-active m-0 ps-4 py-4"
                      : "link-inactive m-0 ps-4 py-4"
                  }
                  to="/products"
                >
                  Products
                  <i className="ms-auto bi bi-chevron-right"></i>
                </NavLink>
                
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "link-active m-0 ps-4 py-4"
                      : "link-inactive m-0 ps-4 py-4"
                  }
                  to="/products"
                >
                  Brands
                  <i className="ms-auto bi bi-chevron-right"></i>
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "link-active m-0 ps-4 py-4"
                      : "link-inactive m-0 ps-4 py-4"
                  }
                  to="/about"
                >
                  Orders
                  <i className="ms-auto bi bi-chevron-right"></i>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "link-active m-0 ps-4 py-4"
                      : "link-inactive m-0 ps-4 py-4"
                  }
                  to="/about"
                >
                  Users
                  <i className="ms-auto bi bi-chevron-right"></i>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "link-active m-0 ps-4 py-4"
                      : "link-inactive m-0 ps-4 py-4"
                  }
                  to="/about"
                >
                  Admins
                  <i className="ms-auto bi bi-chevron-right"></i>
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;
