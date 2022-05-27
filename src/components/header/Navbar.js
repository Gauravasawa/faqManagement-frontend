import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [intialState, setIntialState] = useState([]);

  let location = useLocation();
  let Navigate = useNavigate();

  const handelLogout = () => {
    localStorage.removeItem("token");
    Navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <div className="d-flex">
                <button className="btn btn-outline-success mx-1" type="submit">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Login
                  </Link>
                </button>
                <button className="btn btn-outline-success mx-2" type="submit">
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    SignUp
                  </Link>
                </button>
              </div>
            ) : (
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handelLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
