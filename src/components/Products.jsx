import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, deleteProduct, editProduct } from "../../redux/productSlice";
import { Link, NavLink, useNavigate  } from "react-router-dom";

function Products() {
    
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);
   

    useEffect(() => {
      const getProducts = async () => {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/products`,
        });
        dispatch(getAllProducts(response.data));
      };
      getProducts();
    }, []);

  const [modal, setModal] = useState(false);
  const [car, setCar] = useState(null);

  const [model, setModel] = useState(car?.model);
  const [description, setDescription] = useState(car?.description);
  const [featured, setFeatured] = useState(car?.featured);
  const [price, setPrice] = useState(car?.price);
  const [stock, setStock] = useState(car?.stock);
  const [year, setYear] = useState(car?.year);
  const [power, setPower] = useState(car?.power);

  const handleModel = (e) => {
    setModel(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleFeatured = (e) => {
    console.log(e.target.value);
    setFeatured(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleStock = (e) => {
    setStock(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handlePower = (e) => {
    setPower(e.target.value);
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

  const hideModal = () => {
    setModal(false);
  };

  const showModal = (car) => {
    setCar(car);
    setModal(true);
  };


  const handleEdit = async () => {
    const call = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_URL}/products/${car.id}`,
      data: { model, description, featured, price, stock, year, power }
    });
 };

  const handleDelete = async (car)=>{
    const call = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_API_URL}/products/${car.id}`,
    })
    dispatch(deleteProduct(car.id))

  }

  return (
    <>
      <div className="color-text-our-white background-night saira">
        <div className="container py-5 ">
          <div className="d-flex mb-4 align-items-center">
            <form className="d-flex form-product-styles w-75 border rounded p-0">
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
            <div className="ms-auto">
              <i className="fs-1 color-text-gold bi bi-plus-circle cursor-pointer"></i>
            </div>
          </div>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((car) => (
                <tr>
                  <td>{car?.id}</td>
                  <td>{car?.model}</td>
                  <td>{car?.brand.name}</td>
                  <td>{car?.stock}</td>
                  <td>
                    <i
                      onClick={() => showModal(car)}
                      className="bi bi-pencil-fill me-2 color-text-gold cursor-pointer"
                    ></i>
                    <i onClick={()=>handleDelete(car)} className="ms-2 bi bi-trash cursor-pointer text-primary"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Modal show={modal} onHide={hideModal}>
        <Modal.Body className="background-night color-text-our-white saira p-4 position-relative">
          <i
            onClick={hideModal}
            className="bi bi-x x-modal-styles position-absolute cursor-pointer"
          ></i>
          <p className="m-0 saira-expanded-bold">Make the changes you desire</p>
          <hr />
          <form onSubmit={handleEdit}>
            <label className="mb-1" htmlFor="model">
              Model
            </label>
            <input
              className="form-control mb-3 input-modal-styles rounded-0"
              type="text"
              id="model"
              name="model"
              placeholder={car?.model}
              onChange={handleModel}
            />
            <label className="mb-1" htmlFor="Description">
              Description
            </label>
            <input
              className="form-control mb-3 input-modal-styles rounded-0"
              type="text"
              id="Description"
              name="Description"
              placeholder={car?.description}
              onChange={handleDescription}
            />
            <label className="mb-1" htmlFor="Featured">
              Featured
            </label>
            <select
              class="form-select mb-3 input-modal-styles rounded-0"
              placeholder={car?.featured}
              id="Featured"
              name="Featured"
              onChange={handleFeatured}
            >
              {car?.featured ? (
                <option selected>True</option>
              ) : (
                <option selected>False</option>
              )}
              {car?.featured == true ? (
                <option value="0">False</option>
              ) : (
                <option value="1">True</option>
              )}
            </select>
            <label className="mb-1" htmlFor="Price">
              Price
            </label>
            <input
              onChange={handlePrice}
              className="form-control mb-3 input-modal-styles rounded-0"
              type="text"
              id="Price"
              name="Price"
              placeholder={formatNumber(car?.price, 0)}
            />
            <label className="mb-1" htmlFor="Stock">
              Stock
            </label>
            <input
              onChange={handleStock}
              className="form-control mb-3 input-modal-styles rounded-0"
              type="text"
              id="Stock"
              name="Stock"
              placeholder={car?.stock}
            />
            <label className="mb-1" htmlFor="Year">
              Year
            </label>
            <input
              onChange={handleYear}
              className="form-control mb-3 input-modal-styles rounded-0"
              type="text"
              id="Year"
              name="Year"
              placeholder={car?.year}
            />
            <label className="mb-1" htmlFor="Power">
              Power
            </label>
            <input
             onChange={handlePower}
              className="form-control mb-3 input-modal-styles rounded-0"
              type="text"
              id="Power"
              name="Power"
              placeholder={car?.power}
            />{" "}
            <div className="d-flex justify-content-end">
              <button
                type="button"
                onClick={hideModal}
                className="button-no-modal saira-bold me-2"
              >
                Cancel
              </button>

              <button
                type="submit"
                onClick={hideModal}
                className="button-yes-modal saira-bold ms-2"
              >
                Save changes
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Products;