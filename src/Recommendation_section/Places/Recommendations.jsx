import React from "react";
import { useState, useEffect } from "react";
import "./Recommendations.css";

const Recommendations = (props) => {

  return (
    <>
      <div className="recomm-container">
        <div class="recomm-header">{props.reccData}</div>
      </div>
    </>
  );
};

export default Recommendations;
