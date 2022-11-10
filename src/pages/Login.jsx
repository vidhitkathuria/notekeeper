import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const resp = await axios.post("url", {
      username,
      password,
    });

    console.log(resp.data);
  };

  return (
    <div className="login d-flex align-items-center">
      <div className="card w-25 mx-auto  p-4">
        <h1 className="text-center text-dark mb-4">Login</h1>
        <form action="" className="">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="d-flex justify-content-between">
          <button onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
          <div className="d-flex align-items-center">
            <span className="text-primary mx-2 fs-6">Need an account?</span>
            <button
              onClick={() => navigate("/signup")}
              className="btn btn-primary"
            >
              Sign-Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
