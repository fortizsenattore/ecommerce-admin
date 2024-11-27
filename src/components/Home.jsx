import React, { useEffect } from "react";
import NavbarTop from "./NavbarTop";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getAllBrands } from "../../redux/brandSlice";
import axios from "axios";

function Home() {
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/brands`,
        headers: { authorization: `Bearer ${token}` },
      });
      dispatch(getAllBrands(response.data));
    };
    getBrands();
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      setTimeout(() => toast.info("You need to login to access Home"), 800);
    }
  }, [token]);

  return (
    <>
      <div className="container-fluid m-0 p-0 vh-100">
        <div className="row m-0 p-0">
          <div className="col-4 col-sm-3 col-lg-2 m-0 p-0 background-night-navbar vh-100">
            <NavbarTop />
          </div>
          <div className="col-8 col-sm-9 col-lg-10 d-flex pt-4 mb-4 justify-content-center color-text-night saira">
            <div className="container">
              {/* first 4 rectangles */}
              <div className="row g-4 mb-4 ">
                <div className="col-6 col-lg-3">
                  <div className="background-1-home p-3 h-100">
                    <p className="saira-expanded-bold">Current MRR</p>
                    <p className="subtitle-home-styles m-0 saira-expanded-more-bold">$79.680.000</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="background-2-home p-3 h-100">
                    <p className="saira-expanded-bold">Current Costumers</p>
                    <p className="subtitle-home-styles m-0 saira-expanded-more-bold">5.320</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="background-3-home p-3 h-100">
                    <p className="saira-expanded-bold">Active Costumers</p>
                    <p className="subtitle-home-styles m-0 saira-expanded-more-bold">41%</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="background-4-home p-3 h-100">
                    <p className="saira-expanded-bold">Satisfaction Rate</p>
                    <p className="subtitle-home-styles m-0 saira-expanded-more-bold">98.7%</p>
                  </div>
                </div>
              </div>
              {/* 2 middle-row */}
              <div className="row">
                <div className="col-md-7">
                  <div className="background-night-transparency p-3 h-100">
                    <p className="saira-expanded-more-bold text-center color-text-our-white">
                      Market trend
                    </p>
                    <div className="d-flex justify-content-center">
                      <img
                        className="img-fluid img-graph-styles"
                        src="graph.png"
                        alt="Graph image"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-5 d-none d-md-block">
                  <div className="background-night-transparency p-3 h-100">
                    <p className="saira-expanded-more-bold text-center mb-4 color-text-our-white">
                      Sales
                    </p>
                    <div className="d-flex justify-content-center">
                      <img
                        className="img-fluid img-graph-styles"
                        src="chart.png"
                        alt="Graph image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
