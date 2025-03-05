import React from "react";
import { SlTrophy } from "react-icons/sl";

const Card = ({ description, tittle }) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        marginBottom: "20px",
        boxSizing: "border-box",
        height: "100%", // Keeps card height consistent
      }}
    >
      <div style={{ textAlign: "center" }}>
        <SlTrophy
          style={{ fontSize: "4rem", marginBottom: "10px", marginTop: "8px" }}
        />
      </div>
      <div
        className="card-body"
        style={{ textAlign: "center", padding: "15px" }}
      >
        <h5 className="card-title">{tittle}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary btn-block">
          <p className="text-center fs-5 m-0">{tittle}</p>
        </a>
      </div>
    </div>
  );
};

export default Card;
