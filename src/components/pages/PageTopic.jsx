import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const PageTopic = ({ tittle }) => {
  return (
    <div className="col-md-6 p-3 text-black">
      <h5 className="mx-1">
        {tittle}
        <FaArrowAltCircleRight style={{ marginLeft: "8px" }} />
      </h5>
    </div>
  );
};

export default PageTopic;
