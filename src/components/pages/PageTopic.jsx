import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "../../css/pagetopic.css";

const PageTopic = ({ tittle }) => {
  return (
    <div className="col-md-6 p-3 w-100">
      <div className="topic-box shadow-sm p-3 d-flex align-items-center justify-content-between">
        <h5 className="m-0 text-dark fw-semibold">{tittle}</h5>
        <FaArrowAltCircleRight className="icon" />
      </div>
    </div>
  );
};

export default PageTopic;
