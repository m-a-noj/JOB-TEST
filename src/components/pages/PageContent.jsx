import React from "react";
import PageTopic from "./PageTopic";

const PageContent = ({ heding, topicData }) => {
  return (
    <div className="col-12 col-lg-8  ps-4 pt-3 order-1 order-lg-1">
      <h4>{heding}</h4>
      <div className="row">
        {topicData.map((data, index) => (
          <PageTopic tittle={data.tittle} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PageContent;
