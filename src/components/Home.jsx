import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { getAllBrands } from "../../redux/brandSlice";
import {
  ArrowUp,
  ArrowDown,
  Users,
  DollarSign,
  ShoppingBag,
  Percent,
  Calendar,
  Activity,
} from "lucide-react";
import NavbarTop from "./NavbarTop";

const recentOrders = [
  {
    id: "#ORD-7892",
    customer: "John Smith",
    date: "2023-05-12",
    amount: 128500,
    status: "Completed",
  },
  {
    id: "#ORD-7893",
    customer: "Emma Johnson",
    date: "2023-05-11",
    amount: 95700,
    status: "Processing",
  },
  {
    id: "#ORD-7894",
    customer: "Michael Brown",
    date: "2023-05-10",
    amount: 215000,
    status: "Completed",
  },
  {
    id: "#ORD-7895",
    customer: "Olivia Davis",
    date: "2023-05-09",
    amount: 187300,
    status: "Pending",
  },
];

function Home() {
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [metrics, setMetrics] = useState({
    mrr: 79680000,
    customers: 5320,
    activePercentage: 41,
    satisfaction: 98.7,
    monthlyGrowth: 12.8,
    revenueGrowth: 8.5,
  });

  useEffect(() => {
    const getBrands = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/brands`,
          headers: { authorization: `Bearer ${token}` },
        });
        dispatch(getAllBrands(response.data));
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
    getBrands();
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      setTimeout(() => toast.info("You need to login to access Home"), 800);
    }
  }, [token]);

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-layout">
        <div className="sidebar-container">
          <NavbarTop />
        </div>

        <div className="main-content">
          <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="saira-expanded-bold">Home</h1>
              <div className="d-flex align-items-center">
                <div className="me-3 d-flex align-items-center">
                  <Calendar className="me-2" size={18} />
                  <span className="subtitle-home-styles m-0 saira-expanded-more-bold">
                    {new Date().toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <button className="btn btn-sm btn-outline-success">
                  <Activity size={16} className="me-1" /> Refresh Data
                </button>
              </div>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card border-0 h-100 bg-dark bg-opacity-75 text-light">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="saira-expanded-bold m-0">Current MRR</h6>
                      <div className="icon-box rounded-circle bg-success bg-opacity-25 p-2">
                        <DollarSign size={20} className="text-success" />
                      </div>
                    </div>
                    <h3 className="saira-expanded-more-bold">{formatCurrency(metrics.mrr)}</h3>
                    <div className="d-flex align-items-center mt-3">
                      <ArrowUp size={16} className="text-success me-1" />
                      <span className="text-success me-1">{metrics.revenueGrowth}%</span>
                      <span className="text-muted small">vs last month</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card border-0 h-100 bg-dark bg-opacity-75 text-light">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="saira-expanded-bold m-0">Current Customers</h6>
                      <div className="icon-box rounded-circle bg-primary bg-opacity-25 p-2">
                        <Users size={20} className="text-primary" />
                      </div>
                    </div>
                    <h3 className="saira-expanded-more-bold">
                      {metrics.customers.toLocaleString()}
                    </h3>
                    <div className="d-flex align-items-center mt-3">
                      <ArrowUp size={16} className="text-success me-1" />
                      <span className="text-success me-1">{metrics.monthlyGrowth}%</span>
                      <span className="text-muted small">vs last month</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card border-0 h-100 bg-dark bg-opacity-75 text-light">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="saira-expanded-bold m-0">Active Customers</h6>
                      <div className="icon-box rounded-circle bg-warning bg-opacity-25 p-2">
                        <ShoppingBag size={20} className="text-warning" />
                      </div>
                    </div>
                    <h3 className="saira-expanded-more-bold">{metrics.activePercentage}%</h3>
                    <div className="d-flex align-items-center mt-3">
                      <ArrowDown size={16} className="text-danger me-1" />
                      <span className="text-danger me-1">2.3%</span>
                      <span className="text-muted small">vs last month</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card border-0 h-100 bg-dark bg-opacity-75 text-light">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="saira-expanded-bold m-0">Satisfaction Rate</h6>
                      <div className="icon-box rounded-circle bg-info bg-opacity-25 p-2">
                        <Percent size={20} className="text-info" />
                      </div>
                    </div>
                    <h3 className="saira-expanded-more-bold">{metrics.satisfaction}%</h3>
                    <div className="d-flex align-items-center mt-3">
                      <ArrowUp size={16} className="text-success me-1" />
                      <span className="text-success me-1">1.2%</span>
                      <span className="text-muted small">vs last month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-12 col-lg-8">
                <div className="card border-0 h-100 bg-dark bg-opacity-75 text-light">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="saira-expanded-more-bold text-center color-text-our-white">
                        Market Trend
                      </h5>
                      <div className="dropdown">
                        <button
                          className="btn btn-sm btn-dark dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Last 12 Months
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Last 6 Months
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Last 3 Months
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              This Year
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="chart-container" style={{ height: "300px" }}>
                      <img
                        src="graph.png"
                        alt="Market trend chart"
                        className="img-fluid img-graph-styles"
                        style={{ maxHeight: "100%", width: "100%", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="card border-0 h-100 bg-dark bg-opacity-75 text-light">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="saira-expanded-more-bold text-center color-text-our-white">
                        Sales Distribution
                      </h5>
                      <div className="dropdown">
                        <button
                          className="btn btn-sm btn-dark dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          By Brand
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="dropdownMenuButton2"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              By Region
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              By Model
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              By Color
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="chart-container d-flex justify-content-center"
                      style={{ height: "300px" }}
                    >
                      <img
                        src="chart.png"
                        alt="Sales distribution chart"
                        className="img-fluid img-graph-styles"
                        style={{ maxHeight: "100%", width: "100%", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-12">
                <div className="card border-0 bg-dark bg-opacity-75 text-light">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="saira-expanded-more-bold">Recent Orders</h5>
                      <button className="btn btn-sm btn-outline-light">View All</button>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-dark table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentOrders.map((order) => (
                            <tr key={order.id}>
                              <td>{order.id}</td>
                              <td>{order.customer}</td>
                              <td>{order.date}</td>
                              <td>{formatCurrency(order.amount)}</td>
                              <td>
                                <span
                                  className={`badge ${
                                    order.status === "Completed"
                                      ? "bg-success"
                                      : order.status === "Processing"
                                      ? "bg-primary"
                                      : "bg-warning"
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
