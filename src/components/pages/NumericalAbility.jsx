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
    <div classNadivme="container-fluid">
      <div className="row">
        <SideBar />
        <PageContent
          heding={
            "NUMERICAL ABILITY - Subject Wise Multiple Choice Questions (MCQ)"
          }
          topicData={topicData}
        />
      </div>
    </div>
  );
};

export default NumericalAbility;
