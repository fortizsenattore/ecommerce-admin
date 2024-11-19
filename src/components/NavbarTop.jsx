import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/tokenSlice";
import Modal from "react-bootstrap/Modal";

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

  return (
    <>
      <Navbar expand="false" id="navbar1" className="fixed-top shadow navbar-styles">
        <Container>
          <Navbar.Toggle className="prueba2" aria-controls="offcanvasNavbar" data-bs-theme="dark" />
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
                    isActive ? "link-active m-0 ps-4 py-4" : "link-inactive m-0 ps-4 py-4"
                  }
                  to="/"
                >
                  Home
                  <i className="ms-auto bi bi-chevron-right"></i>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-active m-0 ps-4 py-4" : "link-inactive m-0 ps-4 py-4"
                  }
                  to="/products"
                >
                  Products
                  <i className="ms-auto bi bi-chevron-right"></i>
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-active m-0 ps-4 py-4" : "link-inactive m-0 ps-4 py-4"
                  }
                  to="/brands"
                >
                  Brands
                  <i className="ms-auto bi bi-chevron-right"></i>
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-active m-0 ps-4 py-4" : "link-inactive m-0 ps-4 py-4"
                  }
                  to="/orders"
                >
                  Orders
                  <i className="ms-auto bi bi-chevron-right"></i>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-active m-0 ps-4 py-4" : "link-inactive m-0 ps-4 py-4"
                  }
                  to="/admins"
                >
                  Admins
                  <i className="ms-auto bi bi-chevron-right"></i>
                </NavLink>
                {token === "" ? (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active m-0 ps-4 py-4" : "link-inactive m-0 ps-4 py-4"
                    }
                    to="/login"
                  >
                    Login
                    <i className="ms-auto bi bi-chevron-right"></i>
                  </NavLink>
                ) : (
                  <NavLink onClick={showModal} className="link-inactive m-0 ps-4 py-4">
                    Logout
                    <i className="ms-auto bi bi-chevron-right"></i>
                  </NavLink>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Modal show={modal} onHide={hideModal}>
        <Modal.Body className="background-night color-text-our-white saira px-4 position-relative">
          <i
            onClick={hideModal}
            className="bi bi-x x-modal-styles position-absolute cursor-pointer"
          ></i>
          <p className="m-0 saira-expanded-bold">Are you sure you want to log out?</p>
          <hr />
          <div className="d-flex justify-content-end">
            <button onClick={hideModal} className="button-no-modal saira-bold me-2">
              No, thanks
            </button>
            <Link onClick={goodbye} to="/">
              <button className="button-yes-modal saira-bold ms-2">Yes, I want to logout</button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarTop;
