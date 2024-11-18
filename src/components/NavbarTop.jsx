import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/tokenSlice";

function NavbarTop() {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const hideModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  const goodbye = () => {
    dispatch(logout(""));
    setModal(false);
  };

  useEffect(() => {
    const navbarElement = document.querySelector("#navbar1");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 56) {
        navbarElement.classList.remove("navbar-styles");
        navbarElement.classList.add("scroll-navbar");
      } else if (window.scrollY < 56) {
        navbarElement.classList.add("navbar-styles");
        navbarElement.classList.remove("scroll-navbar");
      }
    });
  });
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
            className="background-night custom-offcanvas"
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
                  to="/about"
                >
                  About
                  <i className="ms-auto bi bi-chevron-right"></i>
                </NavLink>
                {token === "" ? (
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "link-active m-0 ps-4 py-4"
                        : "link-inactive m-0 ps-4 py-4"
                    }
                    to="/login"
                  >
                    Login
                    <i className="ms-auto bi bi-chevron-right"></i>
                  </NavLink>
                ) : (
                  <NavLink
                    onClick={showModal}
                    className="link-inactive m-0 ps-4 py-4"
                  >
                    Logout
                    <i className="ms-auto bi bi-chevron-right"></i>
                  </NavLink>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <NavLink className="text-center">
            <img
              className="img-fluid navbar-logo-styles"
              src={crownLogo}
              alt="Brand Image"
            />
          </NavLink>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavbarTop;
