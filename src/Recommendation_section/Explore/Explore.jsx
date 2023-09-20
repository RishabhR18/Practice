import React from 'react';
import "./Explore.css";

const  Explore =(props) => {
    console.group("zzzzzzzzzzzzzz",props);
  return (
    <div>
      <div className="explore-container">
        <div class="explore-header">{props.exploreData}</div>
      </div>
    </div>
  )
}

export default Explore
