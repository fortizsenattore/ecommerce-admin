import React, { useEffect } from "react";
import NavbarTop from "./NavbarTop";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/brands`,
        headers: { authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      dispatch(getAllBrands(response.data));
    };
    getBrands();
  }, []);

  useEffect(() => {
    if (!token) return navigate("/login");
    setTimeout(() => toast.info("You need to login to access Home"), 800);
  }, []);

  return (
    <>
      <div className="container-fluid m-0 p-0 vh-100">
        <div className="row m-0 p-0">
          <div className="col-2 m-0 p-0 background-night-navbar vh-100">
            <NavbarTop />
          </div>
          <div className="col-10 d-flex pt-4 mb-4 justify-content-center color-text-our-white saira">
            <div className="container">
              {/* first 4 rectangules */}
              <div className="row mb-4 ">
                <div className="col-3">
                  <div className="background-darkBlue p-3 h-100">
                    <p className="saira-expanded-bold">Current MRR</p>
                    <p className="fs-5 saira-expanded-more-bold">$17.080.000.000</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="background-brilliantBlue p-3 h-100">
                    <p className="saira-expanded-bold">Current Costumers</p>
                    <p className="fs-5 saira-expanded-more-bold">5.320</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="background-lightBlue p-3 h-100">
                    <p className="saira-expanded-bold">Active Costumers</p>
                    <p className="fs-5 saira-expanded-more-bold">41%</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="background-blueJeans p-3 h-100">
                    <p className="saira-expanded-bold">Satisfaction Rate</p>
                    <p className="fs-5 saira-expanded-more-bold">98.7%</p>
                  </div>
                </div>
              </div>
              {/* 2 middle-row */}
              <div className="row">
                <div className="col-7">
                  <div className="background-night-transparency p-3 h-100">
                    <p className="saira-expanded-more-bold text-center">Market trend</p>
                    <div className="d-flex justify-content-center">
                      <img className="img-fluid img-graph-styles" src="graph-image.png" alt="Graph image" />
                    </div>
                  </div>
                </div>

                <div className="col-5">
                  <div className="background-night-transparency p-3 h-100">
                    <p className="saira-expanded-more-bold text-center mb-4">Sales</p>
                    <div className="d-flex justify-content-center">
                      <img className="img-fluid" src="chart-image.png" alt="Graph image" />
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
