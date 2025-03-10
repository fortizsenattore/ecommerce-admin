import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/tokenSlice";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

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
    setTimeout(toast.success("Logout successful"), 800);
  };

  return (
    <>
      <Nav className="p-0 saira color-text-our-white navbar-styles p-4 d-flex">
        <div className="w-100">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active m-0 p-0 mb-4 ps-1" : "link-inactive m-0 p-0 mb-4 ps-1"
            }
            to="/"
          >
            <i className="bi bi-house-gear-fill me-3"></i>
            <span className="m-0">Home</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active  m-0 p-0 mb-4 ps-1" : "link-inactive  m-0 p-0 mb-4 ps-1"
            }
            to="/products"
          >
            <i className="bi bi-car-front-fill me-3"></i>
            <span className="m-0"> Products</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active  m-0 p-0 mb-4 ps-1" : "link-inactive  m-0 p-0 mb-4 ps-1"
            }
            to="/brands"
          >
            <i className="bi bi-shield-fill-check me-3 m-0"></i>
            <span className="m-0">Brands</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active  m-0 p-0 mb-4 ps-1" : "link-inactive  m-0 p-0 mb-4 ps-1"
            }
            to="/orders"
          >
            <i className="bi bi-box-seam-fill me-3 m-0"></i>
            <span className="m-0">Orders</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active  m-0 p-0 mb-4 ps-1" : "link-inactive  m-0 p-0 mb-4 ps-1"
            }
            to="/admins"
          >
            <i className="bi bi-person-circle me-3"></i>
            <span className="m-0">Admins</span>
          </NavLink>
        </div>

        <div className="w-100 d-flex align-items-center">
          <NavLink onClick={showModal} className="link-inactive mt-auto d-flex align-items-center ps-1">
            <i className="me-3 bi bi-box-arrow-right"></i>
            <p className="m-0">Logout </p>
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
