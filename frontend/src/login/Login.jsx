import React,{ useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";
import "./login.scss";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await login(inputs);
  //     navigate("/");
  //   } catch (err) {
  //     setErr(err.response.data);
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  

  return (
    <div>
      <div className="login">
      <div className="card">
        
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && <p>{err}</p>}
            <button onClick={handleLogin}>Login</button>
            <span>Don't you have an account?
          <Link to="/register">
            <button >Register</button>
          </Link>
          </span>
            
          </form>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
