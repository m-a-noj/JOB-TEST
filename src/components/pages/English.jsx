import React from "react";
import SideBar from "./SideBar";
import PageContent from "./PageContent";

const English = () => {
  const topicData = [
    { tittle: " Active Voice & Passive Voice" },
    { tittle: "  Cloze Test" },
    { tittle: "Direct and Indirect Speech " },
    { tittle: " Error Spotting Error Detection" },
    { tittle: " Fillers" },
    { tittle: "  One Word Substitution" },
    { tittle: " Paragraph Completion" },
    { tittle: " Phrase Replacement" },
    { tittle: "  Reading Comprehension" },
    { tittle: " Sentence Connectors" },
    { tittle: "  Sentence Correction" },
    { tittle: " Sentence Rearrangement" },
    { tittle: "  Tenses" },
    { tittle: "  Word Usage" },
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

export default English;
