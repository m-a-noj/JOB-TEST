import React from "react";
import SideBar from "./SideBar";
import PageContent from "./PageContent";

const NumericalAbility = () => {
  const topicData = [
    { tittle: " Average" },
    { tittle: " Boat-Stream" },
    { tittle: "Calender " },
    { tittle: " Data Sufficiency" },
    { tittle: " LCM and HCF" },
    { tittle: " Mensuration" },
    { tittle: " Mixtures and Alligation" },
    { tittle: " Number-series" },
    { tittle: " partnership" },
    { tittle: " perentage" },
    { tittle: " Permutation-Combination" },
    { tittle: " Pipes- cistern" },
    { tittle: " Probability" },
    { tittle: " Problem-on -Ages" },
    { tittle: " Problem on Trains" },
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

export default NumericalAbility;
