import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands, deleteBrand, editBrand, createBrand } from "../../redux/BrandSlice";
import NavbarTop from "./NavbarTop";

function Brands() {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brand);

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/brands`,
        // headers: { authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      dispatch(getAllBrands(response.data));
    };
    getBrands();
  }, []);

  const [modalEdit, setModalEdit] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [brand, setBrand] = useState(null);

  const [name, setName] = useState(brand?.name);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const formatNumber = (num, fixed) => {
    const array = Math.floor(num).toString().split("");
    let index = -3;
    while (array.length + index > 0) {
      array.splice(index, 0, ".");
      index -= 4;
    }
    if (fixed > 0) {
      const decimalPart = num.toFixed(fixed).split(".")[1];
      return array.join("") + "," + decimalPart;
    }
    return array.join("");
  };

  const hideModalEdit = () => {
    setModalEdit(false);
  };

  const hideModalCreate = () => {
    setModalCreate(false);
  };

  const showModalEdit = (brand) => {
    setBrand(brand);
    setModalEdit(true);
  };

  const showModalCreate = () => {
    setModalCreate(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const call = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_URL}/brands/${brand.id}`,
      data: { name },
      // headers: { authorization: `Bearer ${token}` },
    });
    dispatch(editBrand(call.data));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const call = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/brands`,
      data: { name },
    });
    console.log(call.data);
    dispatch(createBrand(call.data));
  };

  const handleDelete = async (brand, event) => {
    event.preventDefault();
    const call = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_URL}/brands/${brand.id}`,
    });
    dispatch(deleteBrand(brand.id));
  };

  return (
    brands && (
      <>
        <NavbarTop />

        <div className="color-text-our-white background-night saira min-vh-100">
          <div className="container py-5 ">
            <div className="d-flex mb-4 align-items-center mt-5">
              {/* Buscador */}
              <form className="d-flex w-75 rounded p-0">
                <label hidden htmlFor="carSearcher">
                  hey
                </label>
                <input
                  className="form-control buscador-styles color-text-our-white border-0 rounded-0 rounded-start background-night"
                  name="carSearcher"
                  id="carSearcher"
                />
                <button className="button-search rounded-end fw-bold px-3 py-3 w-25 m-0 h-100">
                  Search
                  <i className="bi bi-search ms-2"></i>
                </button>
              </form>
              {/* Boton + */}
              <div className="ms-auto">
                <i
                  className="fs-1 color-text-gold bi bi-plus-circle cursor-pointer"
                  onClick={showModalCreate}
                ></i>
              </div>
            </div>
            <h1 className="saira-expanded-more-bold mb-2">Brands</h1>
            {/* Tabla */}
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Brand</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {brands?.map((brand) => (
                  <tr key={brand.id}>
                    <td>{brand?.id}</td>
                    <td>{brand?.name}</td>
                    <td>
                      <i
                        onClick={() => showModalEdit(brand)}
                        className="bi bi-pencil-fill me-2 color-text-gold cursor-pointer"
                      ></i>
                      <i
                        onClick={(event) => handleDelete(brand, event)}
                        className="ms-2 bi bi-trash cursor-pointer text-primary"
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        {/* modal edit */}

        <Modal show={modalEdit} onHide={hideModalEdit}>
          <Modal.Body className="background-night color-text-our-white saira p-4 position-relative">
            <i
              onClick={hideModalEdit}
              className="bi bi-x x-modal-styles position-absolute cursor-pointer"
            ></i>
            <p className="m-0 saira-expanded-bold">Make the changes you desire</p>
            <hr />
            <form onSubmit={handleEdit} method="PATCH">
              <label className="mb-1" htmlFor="Name">
                Brand Name
              </label>
              <input
                className="form-control mb-3 input-modal-styles rounded-0"
                type="text"
                id="Name"
                name="Name"
                placeholder={brand?.name}
                onChange={handleName}
              />{" "}
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  onClick={hideModalEdit}
                  className="button-no-modal saira-bold me-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  onClick={hideModalEdit}
                  className="button-yes-modal saira-bold ms-2"
                >
                  Save changes
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        {/*  modal create */}

        <Modal show={modalCreate} onHide={hideModalCreate}>
          <Modal.Body className="background-night color-text-our-white saira p-4 position-relative">
            <i
              onClick={hideModalCreate}
              className="bi bi-x x-modal-styles position-absolute cursor-pointer"
            ></i>
            <p className="m-0 saira-expanded-bold">Create a new brand</p>
            <hr />
            <form onSubmit={handleCreate} method="POST">
              <label className="mb-1" htmlFor="Power">
                Name
              </label>
              <input
                onChange={handleName}
                className="form-control mb-3 input-modal-styles rounded-0"
                type="text"
                id="Name"
                name="Name"
                placeholder={brand?.Name}
              />{" "}
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  onClick={hideModalCreate}
                  className="button-no-modal saira-bold me-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  onClick={hideModalCreate}
                  className="button-yes-modal saira-bold ms-2"
                >
                  Save changes
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    )
  );
}

export default Brands;
