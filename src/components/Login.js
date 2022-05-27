import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const result = await response.json();
  
    if (result.success) {
      //redirect and save auth token
      localStorage.setItem("token", result.authToken);
      navigate('/')
    }
  };

  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handelSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={onChange}
              value={credentials.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={onChange}
              value={credentials.password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <br />
          <a href="http://localhost:5000/forgot-password">Forgot Password</a>
        </form>
      </div>
    </>
  );
};

export default Login;
