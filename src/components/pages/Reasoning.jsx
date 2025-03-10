import React from "react";
import SideBar from "./SideBar";
import PageContent from "./PageContent";

export const Reasoning = () => {
  const topicData = [
    { tittle: " Alphanumeric Series" },
    { tittle: " Blood Relation" },
    { tittle: "Analogy" },
    { tittle: "  Box Puzzle" },
    { tittle: " Cause Effect" },
    { tittle: " Coding Decoding" },
    { tittle: "Decision Making" },
    { tittle: " Direction Sense" },
    { tittle: " Inequality" },
    { tittle: "  Logical Reasoning" },
    { tittle: "  Machine Input Output" },
    { tittle: "  Mirror Images" },
    { tittle: "  New Pattern Seating Arrangement" },
    { tittle: "  Order Ranking" },
    { tittle: " Puzzles" },
  ];
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        {/* Sidebar on the left for large screens, below for small screens */}
        <div className="col-lg-3 col-12  order-lg-0 order-1">
          <SideBar />
        </div>

        {/* PageContent beside Sidebar (Desktop), above Sidebar on Mobile */}
        <div className="col-lg-9 col-12 order-lg-1 order-0">
          <PageContent
            heading="NUMERICAL ABILITY - Multiple Choice Questions"
            topicData={topicData}
          />
        </div>
      </div>
    </div>
  );
};
