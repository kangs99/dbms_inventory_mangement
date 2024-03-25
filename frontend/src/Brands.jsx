import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./img/img1.jpg";
import "./styles/brands.scss";
import puma from "./img/puma.jpg";
import adidas from "./img/adidas.jpg";
import nike from "./img/nike1.jpg";
import ua from "./img/underarmour.jpg";


function Brands() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
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
                <Link  to="/" style={{ textDecoration: "none", color: "black" }}>
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
      <div className="d-flex justify-content-center align-items-center">
        <h1>Brands</h1>
      </div>
      <div className="container">
        <div className="d-lg-flex">
          <div className="card border-0 me-lg-4 mb-lg-0 mb-4">
            <div className="backgroundEffect"></div>
            <div className="pic">
              <img className="" src={puma} alt="" />
            </div>
            <div className="content">
              <p className="h-1 mt-4 fw-bold fs-4">PUMA</p>

              <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                <div className="btn btn-primary abc">
                  <Link
                    to={`/data/puma`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Stock
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-lg-flex">
          <div className="card border-0 me-lg-4 mb-lg-0 mb-4">
            <div className="backgroundEffect"></div>
            <div className="pic">
              <img className="" src={adidas} alt="" />
            </div>
            <div className="content">
              <p className="h-1 mt-4 fw-bold fs-4">ADIDAS</p>

              <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                <div className="btn btn-primary abc">
                  <Link
                    to={`/data/adidas`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Stock
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-lg-flex">
          <div className="card border-0 me-lg-4 mb-lg-0 mb-4">
            <div className="backgroundEffect"></div>
            <div className="pic">
              <img className="" src={nike} alt="" />
            </div>
            <div className="content">
              <p className="h-1 mt-4 fw-bold fs-4">NIKE</p>

              <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                <div className="btn btn-primary abc">
                  <Link
                    to={`/data/nike`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Stock
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-lg-flex">
          <div className="card border-0 me-lg-4 mb-lg-0 mb-4">
            <div className="backgroundEffect"></div>
            <div className="pic">
              <img className="" src={ua} alt="" />
            </div>
            <div className="content">
              <p className="h-1 mt-4 fw-bold fs-4">UNDER ARMOUR</p>

              <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                <div className="btn btn-primary btn-lg">
                  <Link
                    to={`/data/underarmour`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Stock
                  </Link>
                  <span class="fas fa-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
