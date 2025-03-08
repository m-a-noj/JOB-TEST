import React from "react";
import Card from "./Card";

const CardRender = ({ data }) => {
  console.log(data);
  return (
    <div
      className="card-container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h1
        className="p-3"
        style={{
          fontSize: "clamp(1.8rem, 5vw, 3rem)",
          width: "100vw", // Full width
          textAlign: "center",
          backgroundColor: "#E3F2FD",
          //backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          color: "#04004D",
        }}
      >
        Welcome To Cracktest - Select Your Online Mocktest
      </h1>

      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <Card tittle={item.tittle} />
        </div>
      ))}
    </div>
  );
};

export default CardRender;
