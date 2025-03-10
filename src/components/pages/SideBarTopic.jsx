import React from "react";
import { Link } from "react-router-dom";
import "../../css/sideBar.css"; // Import sidebar styles

export const SideBarTopic = ({ topicName }) => {
  // Define correct paths for each topic based on App.jsx routes
  const validRoutes = {
    "Numerical Ability": "/numerical-ability",
    Computer: "/computer",
    "Current Affairs": "/current-affairs",
    English: "/english",
    "Exam Details": "/exam-details",
    Hindi: "/hindi",
    "Online Test": "/online-test",
    Plan: "/plan",
    Reasoning: "/reasoning",
    "Static GK": "/static-gk",
  };

  return (
    <div className="sidebar my-5 p-3">
      <h4 className="sidebar-title  fs-4 fw-semibold text-black">Topics</h4>
      <ul className="sidebar-list">
        {topicName.map((data, index) => {
          const path = validRoutes[data];

          return (
            <li key={index} className="sidebar-item">
              {path ? (
                <Link to={path} className="sidebar-link fw-semi-bold fs-5">
                  {data}
                </Link>
              ) : (
                <span className="sidebar-text fw-bold">{data}</span> // Show as text if no valid path
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
