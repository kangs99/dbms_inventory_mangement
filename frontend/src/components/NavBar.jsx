import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/img1.jpg';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from "../context/authContext.js";


const NavBar=() =>{
  const { currentUser, logout } = useContext(AuthContext);
  return (
    
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
            <img src={Logo} style={{ width: "40px", height: "40px" }} />
            </Link>
          </div>
          <div className="links">
            <Link className="link" to="/">
              <h6>HOME</h6>
            </Link>
            <span>{currentUser?.username}</span>
            {currentUser ? (
              <span onClick={logout}>Logout</span>
            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )}
            
          </div>
        </div>
      </div>
    );
}

export default NavBar;
