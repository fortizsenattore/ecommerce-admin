import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import {
  getAllProducts,
} from "../../redux/productSlice";
import NavbarTop from "./NavbarTop";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CreateProductModal from "./CreateProductModal";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product);
  const brands = useSelector((state) => state.brand);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      setTimeout(() => toast.info("You need to login to access the Products´ section"), 800);
    }
  }, [token]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products`,
        headers: { authorization: `Bearer ${token}` },
      });
      dispatch(getAllProducts(response.data));
    };
    getProducts();
  }, []);

  const [modalCreate, setModalCreate] = useState(false);

  const hideModalCreate = () => {
    setModalCreate(false);
  };

  const showModalCreate = () => {
    setModalCreate(true);
  };

  return (
    products &&
    brands && (
      <>
        <div className="container-fluid m-0 p-0">
          <div className="row m-0 p-0">
            <div className="col-2 m-0 p-0 background-night-navbar vh-100">
              <NavbarTop />
            </div>
            <div className="col-10 mb-4 pt-4 justify-content-center color-text-our-white saira">
              <div className="container">
                <div className="d-flex mb-4 align-items-center">
                  {/* Buscador */}
                  <form className="d-flex w-50 buscador rounded p-0">
                    <label hidden htmlFor="carSearcher">
                      hey
                    </label>
                    <input
                      className="form-control buscador-styles color-text-our-white border-0 rounded-0 rounded-start"
                      name="carSearcher"
                      id="carSearcher"
                      placeholder="Look into the products"
                    />
                    <button className="button-search rounded-end fw-bold px-3 m-0 h-100">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                  {/* Boton + */}
                </div>
                <div className="d-flex">
                  <h1 className="saira-expanded-more-bold mb-2">Products</h1>
                  <div className="ms-auto">
                    <i
                      className="fs-1 color-text-blizzardBlue bi bi-plus-circle cursor-pointer"
                      onClick={showModalCreate}
                    ></i>
                  </div>
                </div>
                {/* Tabla */}
                <div className="scroll-table">
                  <Table striped bordered hover responsive variant="lig">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Model</th>
                        <th>Brand</th>
                        <th>Stock</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products?.map((car) => (
                        <Product key={car.id} car={car} />
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CreateProductModal
          showModalCreate={showModalCreate}
          hideModalCreate={hideModalCreate}
          modalCreate={modalCreate}
        />
      </>
    )
  );
}

export default Products;
