import React from "react";
import image from "../assets/bg-logo.png";

export const Footer = () => {
  return (
    <footer className="container text-center text-md-start py-5 my-5 border-top">
      <div className="row">
        <div className="col-md-3 mb-3 d-flex flex-column align-items-center align-items-md-start">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <img
              src={image}
              alt="logo"
              style={{ height: "120px", width: "140px" }}
            />
          </a>
          <p className="text-body-secondary">© 2025</p>
        </div>

        <div className="col-md-3 mb-3 d-flex flex-column align-items-center align-items-md-start">
          <h5>Section</h5>
          <ul className="nav flex-column text-center text-md-start">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-3 d-flex flex-column align-items-center align-items-md-start">
          <h5>Section</h5>
          <ul className="nav flex-column text-center text-md-start">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-3 d-flex flex-column align-items-center align-items-md-start">
          <h5>Section</h5>
          <ul className="nav flex-column text-center text-md-start">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
