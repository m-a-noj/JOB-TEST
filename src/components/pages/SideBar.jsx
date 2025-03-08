import React from "react";
import { SideBarTopic } from "./SideBarTopic";

const SideBar = () => {
  // Topics must match actual route paths
  const topics = [
    "Numerical Ability",
    "Computer",
    "Current Affairs",
    "English",
    "Exam Details",
    "Hindi",
    "Online Test",
    "Plan",
    "Reasoning",
    "Static GK",
  ];

  return <SideBarTopic topicName={topics} />;
};

export default SideBar;
