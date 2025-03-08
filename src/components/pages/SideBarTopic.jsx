import React from "react";
import { Link } from "react-router-dom";

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
    <div className="col-12 col-lg-3 ms-3 text-black p-3 order-3 order-lg-0 bg-light rounded shadow-sm">
      <h4 className="mb-3 fw-bold text-primary">Topics</h4>

      <ul className="list-group">
        {topicName.map((data, index) => {
          const path = validRoutes[data]; // Get the correct path

          return (
            <li key={index} className="list-group-item border-0">
              {path ? (
                <Link
                  to={path}
                  className="text-decoration-none text-dark fw-medium d-block py-2"
                >
                  {data}
                </Link>
              ) : (
                <span className="text-muted fw-medium d-block py-2">
                  {data}
                </span> // Show as text if no valid path
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
