import React from "react";
import myimage from "../assets/bg-logo.png";
const Navbar = () => {
  const imageStyles = {
    width: "100px", // Set the width of the image
    height: "auto", // Maintain the aspect ratio
    borderRadius: "10%", // Make the image round
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={myimage} alt="Logo" style={imageStyles} />
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                NUMERICAL ABILITY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                REASONING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                ENGLISH
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                COMPUTER
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                EXAM DETAILS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                ONLINE TEST
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                CURRENT AFFAIRS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
