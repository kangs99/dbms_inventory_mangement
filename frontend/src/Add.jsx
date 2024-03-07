import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import img from "./img/img1.jpg";

const Add = () => {
  const [datas, setStock] = useState({
    product_id: null,
    name: "",
    category: "",
    in_stock: null,
    buy_price: null,
    sell_price: null,
  });
  const location = useLocation();
  const navigate = useNavigate();
  const brand = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setStock((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8800/${brand}`, datas);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("FormData:", datas);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img
            src={img}
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          inventory
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <Link className="link" to="/" style={{ textDecoration: "none", color: "black" }}>
                  <h6>HOME</h6>
                </Link>
              </li>
              <li className="nav-item">
              <Link to='/login' style={{ textDecoration: "none", color: "black" }}><h6>logout</h6></Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="d-flex vh-100 vw-100 justify-content-center align-items-center"
        style={{ backgroundColor: "rgb(137, 132, 140)" }}
      >
        <div className="w-45 bg-white rounded p-3 d-flex">
          <form>
            <h2>Add product details</h2>
            <div className="mb-2">
              <label htmlFor="product_id">Product ID</label>
              <input
                type="text"
                placeholder="Enter product ID"
                className="form-control"
                id="product_id"
                onChange={handleChange}
                name="product_id"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="form-control"
                id="name"
                onChange={handleChange}
                name="name"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                placeholder="Enter category"
                className="form-control"
                id="category"
                onChange={handleChange}
                name="category"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="in_stock">In Stock</label>
              <input
                type="number"
                placeholder="Enter in stock quantity"
                className="form-control"
                id="in_stock"
                onChange={handleChange}
                name="in_stock"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="buy_price">Buy Price</label>
              <input
                type="number"
                placeholder="Enter buy price"
                className="form-control"
                id="buy_price"
                onChange={handleChange}
                name="buy_price"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="sell_price">Sell Price</label>
              <input
                type="number"
                placeholder="Enter sell price"
                className="form-control"
                id="sell_price"
                onChange={handleChange}
                name="sell_price"
              />
            </div>
            <button className="formbutton btn btn-secondary"  style={{ textDecoration: 'none', boxShadow: 'none' }} onClick={handleClick}>
              <Link to={`/data/${brand}`} style={{ color: 'inherit', textDecoration: 'none' }}>Add</Link>
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
