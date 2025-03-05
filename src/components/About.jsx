import React from "react";
import image from "../assets/bg-logo.png";

const About = () => {
  return (
    <div className="px-4 py-5  text-center">
      <img
        className="d-block mx-auto mb-4"
        src={image}
        alt=""
        width="200"
        height="200"
      />
      <h1 className="display-5  fw-bold text-body-emphasis">
        Welcome To Cracktest - An Online Exam Practice Website
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4 mt-3 text-primary-emphasis">
          Unique and smart way to online Exam practice, Multiple Choice
          Questions in English & Hindi language with Solutions. Cracktest
          provide Subject wise and Topic wise MCQ's for ease of learning.
          Prepare unlimited Online Mock test for Entrance exams for college
          admission and competitive exams for government and private jobs.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            fdprocessedid="0dasxi"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
