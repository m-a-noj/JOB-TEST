import React from "react";
import image from "../assets/bg-logo.png";
import "../css/hero.css";

export const Footer = () => {
  return (
    <footer className=" footercss container-fluid  text-center text-md-start py-5 my-5 border-top">
      <div className="row mx-lg-5">
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
          <p className="text-body-secondary ">© 2025</p>
        </div>

        <div className="col-md-3 mb-3 d-flex flex-column align-items-center align-items-md-start">
          <h5 className="fw-semibold">Quick Links</h5>
          <ul className="nav flex-column text-center text-md-start">
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Mock Test For SBI Clerk
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                MBA Aptitude Test
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                RRB Group D Practice Test
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Railway Mock Test
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Free Online Exam Preparation For Try
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                EPFO Online Practice Test
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Mock test For IBPS Clerk, PO
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Mock test For IBPS Clerk, PO
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                LIC AAO Online Practice Test
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                NICL Online Practice Test
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                SSC CGL Online Practice Test
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Engineering Online Entrance Exam Government Exam Online Test
              </a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5 className="fw-semibold">Important Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Blog
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                ABout Us{" "}
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Contact US
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Partner With Us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Reference
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                FAQ
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Refer & Earn Policy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Refund Policy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Privacy User Policy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Terms & Conditions
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                User Acceptance
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link icon-link-hover link-danger p-0 text-body-secondary"
              >
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
