import React from "react";
import Card from "./Card";

const CardRender = ({ data }) => {
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
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <Card description={item.description} tittle={item.tittle} />
        </div>
      ))}
    </div>
  );
};

export default CardRender;
