import React from "react";
import PageTopic from "./PageTopic";
import { Link } from "react-router-dom";

const PageContent = ({ heading, topicData }) => {
  return (
    <div className="col-12 col-lg-9  pt-3 mt-5 order-1 order-lg-1">
      <h4 className="mb-3  d-none d-lg-block">{heading}</h4>
      <div className="row">
        {topicData.map((data, index) => (
          <div key={index} className="col-md-6 col-12 mb-3">
            <Link
              to={`/topic/${data.tittle.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-decoration-none text-primary w-100"
            >
              <PageTopic tittle={data.tittle} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageContent;
