import React, { useEffect } from "react";
import NavbarTop from "./NavbarTop";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {

  const token = useSelector((state) => state.token);
  const navigate = useNavigate()

  useEffect(()=> {
    if (!token) return navigate("/login")
  },[])

  return (
    <>
      <NavbarTop />
      <div className="background-night color-text-night saira vh-100 py-5">
        <div className="container overflow-hidden">
          {/* first 4 rectangules */}
          <div className="row mb-4">
            <div className="col-3">
              <div className="background-gold p-3 h-100">
                <p className="saira-expanded-bold">Current MRR</p>
                <p className="fs-5 saira-expanded-more-bold">$17.080.000.000</p>
              </div>
            </div>
            <div className="col-3">
              <div className="background-less-gold p-3 h-100">
                <p className="saira-expanded-bold">Current Costumers</p>
                <p className="fs-5 saira-expanded-more-bold">5.320</p>
              </div>
            </div>
            <div className="col-3">
              <div className="background-more-gold p-3 h-100">
                <p className="saira-expanded-bold">Active Costumers</p>
                <p className="fs-5 saira-expanded-more-bold">41%</p>
              </div>
            </div>
            <div className="col-3">
              <div className="background-lots-gold p-3 h-100">
                <p className="saira-expanded-bold">Satisfaction Rate</p>
                <p className="fs-5 saira-expanded-more-bold">98.7%</p>
              </div>
            </div>
          </div>
          {/* 2 middle-row */}
          <div className="row mb-4">
            <div className="col-6">
              <div className="background-offwhite p-3 h-100">
                <p className="saira-expanded-more-bold">Trend</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta dolorem ut, aspernatur voluptatum et vel, eligendi quod,
                  sunt rem nostrum dolores maxime voluptatibus quibusdam fuga
                  perferendis. Odio dignissimos natus repudiandae.
                </p>
              </div>
            </div>

            <div className="col-3 ">
              <div className="background-offwhite p-3 h-100">
                <p className="saira-expanded-more-bold">Sales</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta dolorem ut, aspernatur voluptatum et vel, eligendi quod,
                  sunt rem nostrum dolores maxime voluptatibus quibusdam fuga
                  perferendis. Odio dignissimos natus repudiandae.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="background-offwhite p-3 h-100">
                <p className="saira-expanded-more-bold">Transactions</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta dolorem ut, aspernatur voluptatum et vel, eligendi quod,
                  sunt rem nostrum dolores maxime voluptatibus quibusdam fuga
                  perferendis. Odio dignissimos natus repudiandae.
                </p>
              </div>
            </div>
          </div>
          {/* 3 last row */}
          <div className="row">
            <div className="col-6 ">
              <div className="background-offwhite p-3 h-100">
                <p className="saira-expanded-more-bold">Trend</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta dolorem ut, aspernatur voluptatum et vel, eligendi quod,
                  sunt rem nostrum dolores maxime voluptatibus quibusdam fuga
                  perferendis. Odio dignissimos natus repudiandae.
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className="background-offwhite p-3 h-100">
                <p className="saira-expanded-more-bold">Costumer Demographic</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta dolorem ut, aspernatur voluptatum et vel, eligendi quod,
                  sunt rem nostrum dolores maxime voluptatibus quibusdam fuga
                  perferendis. Odio dignissimos natus repudiandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Home;
