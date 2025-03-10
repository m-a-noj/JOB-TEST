import React, { useState } from "react";
import { Link } from "react-router-dom";
import myimage from "../assets/bg-logo.png";
import Translator from "./Translator";
import "../css/trnslator.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track navbar collapse

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const imageStyles = {
    width: "100px",
    height: "auto",
    borderRadius: "10%",
  };
  const responsiveImageStyles = {
    width: "150px", // Increase size on small screens
    height: "70px",
    borderRadius: "10%",
  };
  const navbarStyles = {
    background: "rgba(255, 255, 255, 0.2)", // Light transparent white
    backdropFilter: "blur(10px)", // Blur effect
    WebkitBackdropFilter: "blur(10px)", // Safari support
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
  };

  return (
    <nav
      className="navbar  navbar-expand-lg  fixed-top py-0 my-0"
      style={{ backgroundColor: "#ffff" }}
    >
      <div className="container ">
        {/* Logo Redirects to Home */}
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <img
            src={myimage}
            alt="Logo"
            style={
              window.innerWidth < 576 ? responsiveImageStyles : imageStyles
            }
          />
        </Link>

        {/* Toggle Button */}
        <button
          className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav fw-semi-bold hover-text-danger  ">
            <li className="nav-item  ">
              <Link
                className="nav-link active text-primary"
                to="/numerical-ability"
                onClick={closeNavbar}
              >
                NUMERICAL ABILITY
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active text-primary "
                to="/reasoning"
                onClick={closeNavbar}
              >
                REASONING
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-primary"
                to="/english"
                onClick={closeNavbar}
              >
                ENGLISH
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-primary"
                to="/computer"
                onClick={closeNavbar}
              >
                COMPUTER
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-primary"
                to="/hindi"
                onClick={closeNavbar}
              >
                HINDI
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-primary"
                to="/static-gk"
                onClick={closeNavbar}
              >
                STATIC GK
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-primary"
                to="/current-affairs"
                onClick={closeNavbar}
              >
                CURRENT AFFAIRS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-primary"
                to="/exam-details"
                onClick={closeNavbar}
              >
                EXAM DETAILS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-primary"
                to="/online-test"
                onClick={closeNavbar}
              >
                ONLINE TEST
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-primary"
                to="/plan"
                onClick={closeNavbar}
              >
                PLAN
              </Link>
            </li>
          </ul>
          <div className="d-none d-lg-block ms-auto">
            <Translator />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
