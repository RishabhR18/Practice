import React from "react";
import "./RestaurantCard.css";
import Platter from "../../../utils/images/dosa-platter.webp";
import {StarBorderOutlined} from "@mui/icons-material";

const RestaurantCard = (props) => {
  const {cloudinaryImageId,name,avgRating,cuisines,locality} =props?.resData;
  
  return (
    <>
      <div className="card-container">
        <div className="res-card">
          <div className="res-card-image">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="card-image" />
          </div>
        </div>
        <div className="res-details">
          <h2 className="res-name">{name}</h2>
          <div className="res-rating">
            <span className="icon"><StarBorderOutlined /></span>
            <span className="rating">{avgRating}</span>
          </div>
          <div className="res-category">
            <p className="res-categories">{cuisines.join(", ")}</p>
          </div>
          <div className="res-location">{locality}</div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
