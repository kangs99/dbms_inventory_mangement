import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import img from "./img/img1.jpg";

const Update = () => {
  const [formData, setFormData] = useState({
    product_id: "",
    name: "",
    category: "",
    in_stock: null,
    buy_price: null,
    sell_price: null,
  });

  const location = useLocation();
  const productId = location.pathname.split("/")[3]; // Getting product ID from URL
  const brand = location.pathname.split("/")[2]; // Getting brand from URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/${brand}/${productId}`
        );
        setFormData(res.data); // Set form data with fetched data
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [brand, productId]); // Trigger useEffect when brand or productId changes

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/${brand}/${productId}`, formData);
    } catch (err) {
      console.log(err);
    }
  };

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
    <div className="d-flex vh-100 vw-100 justify-content-center "
    style={{ backgroundColor: "rgb(137, 132, 140)" }}> 
      
      <div className="form">
        <h1>Update the Product</h1>
        <input
          type="text"
          placeholder="Product ID"
          onChange={handleChange}
          name="product_id"
          value={formData.product_id}
        />
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={formData.name}
        />
        <input
          type="text"
          placeholder="Category"
          onChange={handleChange}
          name="category"
          value={formData.category}
        />
        <input
          type="number"
          placeholder="In Stock"
          onChange={handleChange}
          name="in_stock"
          value={formData.in_stock}
        />
        <input
          type="number"
          placeholder="Buy Price"
          onChange={handleChange}
          name="buy_price"
          value={formData.buy_price}
        />
        <input
          type="number"
          placeholder="Sell Price"
          onChange={handleChange}
          name="sell_price"
          value={formData.sell_price}
        />
        <button className="formbutton btn btn-secondary" style={{ textDecoration: 'none', boxShadow: 'none' }} onClick={handleSubmit}>
          <Link to={`/data/${brand}`} style={{ color: 'inherit', textDecoration: 'none'}}>Update</Link>
        </button>
        
      </div>
    </div>
    </div>
  );
};

export default Update;
