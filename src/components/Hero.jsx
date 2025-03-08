import React from "react";
import myimage from "../assets/heroBanner.png";
import myimage2 from "../assets/heroBanner2.png";
import myimage3 from "../assets/heroBanner3.png";
import styles from "./Hero.module.css"; // Import the custom CSS for the object-fit styles

const Hero = () => {
  {
    console.log(styles);
  }
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1400">
          <img
            src={myimage}
            className={`${styles["custom-carousel-image"]}  d-block w-100`}
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="1400">
          <img
            src={myimage2}
            className={`${styles["custom-carousel-image"]} d-block w-100`}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="1400">
          <img
            src={myimage3}
            className={`${styles["custom-carousel-image"]} d-block w-100`}
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
