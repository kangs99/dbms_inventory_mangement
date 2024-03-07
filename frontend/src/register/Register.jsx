import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
    
  });
  const [err, setErr] = useState(null);
  const navigate=useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try{const res= await axios.post("/auth/register", inputs);
    console.log(res)
    navigate("/login")
  }
    catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err)

  return (
    <div>
      <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button onClick={handleClick}>Register</button>
            {err && <p>{err}</p>}
            <span>
              Do you already have an account?<Link to="/login">
            <button>Login</button>
          </Link>
            </span>
            
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
