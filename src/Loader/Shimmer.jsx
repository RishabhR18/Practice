import React from "react";
import { Skeleton } from "@mui/material";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <>
      <div className="skeleton-container">
        <div className="shimmer-card-container">
            <div className="rest-card"></div>
            <div className="rest-card"></div>
            <div className="rest-card"></div>
            <div className="rest-card"></div>
            <div className="rest-card"></div>
            <div className="rest-card"></div>
            <div className="rest-card"></div>
            <div className="rest-card"></div>
          </div >
        </div>
    </>
  );
};

export default Shimmer;
