import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
      <Nav className=" p-0 saira color-text-our-white navbar-styles p-4 justify-content-between d-flex">
        <div className="w-100">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active m-0 pb-3" : "link-inactive m-0 pb-3"
            }
            to="/"
          >
            Home
            <i className="ms-auto bi bi-chevron-right"></i>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active m-0 pb-3" : "link-inactive m-0 pb-3"
            }
            to="/products"
          >
            Products
            <i className="ms-auto bi bi-chevron-right"></i>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active m-0 pb-3" : "link-inactive m-0 pb-3"
            }
            to="/brands"
          >
            Brands
            <i className="ms-auto bi bi-chevron-right"></i>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active m-0 pb-3" : "link-inactive m-0 pb-3"
            }
            to="/orders"
          >
            Orders
            <i className="ms-auto bi bi-chevron-right"></i>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active m-0 pb-3" : "link-inactive m-0 pb-3"
            }
            to="/admins"
          >
            Admins
            <i className="ms-auto bi bi-chevron-right"></i>
          </NavLink>
        </div>

        <div className="w-100 d-flex align-items-center">
          <NavLink onClick={showModal} className="link-inactive mt-auto d-flex align-items-center">
            <button className="link-inactive button-logout justify-content-between d-flex px-2">
              <p className="m-0">Logout </p>
              <i className="bi bi-box-arrow-right"></i>
            </button>
          </NavLink>
        </div>
      </Nav>

      <Modal show={modal} onHide={hideModal}>
        <Modal.Body className="background-night color-text-our-white saira px-4 position-relative">
          <i
            onClick={hideModal}
            className="bi bi-x x-modal-styles position-absolute cursor-pointer"
          ></i>
          <p className="m-0 saira-expanded-bold">Are you sure you want to log out?</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Link onClick={() => goodbye()} to="/login">
              <button className="button-yes-modal saira-bold ms-2">Yes, I want to logout</button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarTop;
