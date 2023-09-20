import React, { useState, useEffect } from "react";
import "./RestaurantMenu.css";
import TimelapseSharpIcon from "@mui/icons-material/TimelapseSharp";
import CurrencyRupeeTwoToneIcon from "@mui/icons-material/CurrencyRupeeTwoTone";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { ExpandMoreOutlined } from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Pizza1 from "../utils/images/p1.webp";
import Pizza2 from "../utils/images/p2.webp";
import Pizza3 from "../utils/images/p3.webp";
import Pizza4 from "../utils/images/p4.webp";
import Pizza5 from "../utils/images/p5.webp";
import VegIcon from "../utils/images/veg.png";
import NonVegIcon from "../utils/images/non-veg.png";
// import Pizza6 from "../utils/images/p6.webp";
// import FssaiIcon from  '../utils/images/fssai.webp';
import {
  Switch,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [expanded, setExpanded] = useState(null);
  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.590798&lng=88.423888&restaurantId=23925&catalog_qa=undefined&submitAction=ENTER"
    );
    const apiData = await data.json();

    const resValue = apiData.data;

    setRestaurantMenu(resValue);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <>
      <div className="restaurant-menu">
        <div className="restaurant-menu-container">
          <div className="restaurant-menu-header">
            <div className="menu-header">
              <span className="restaurant-details">
                <p className="restaurant-name">
                  {restaurantMenu?.cards[0].card.card.info.name}
                </p>
                <p className="restaurant-cuisine">
                  {restaurantMenu?.cards[0].card.card.info.cuisines.join(" ,")}
                </p>
                <p className="restaurant-area">
                  {restaurantMenu?.cards[0].card.card.info.areaName}
                </p>
              </span>
              <span className="restaurant-rating-bar">
                <p className="restaurant-avgRating">
                  <StarSharpIcon />{" "}
                  {restaurantMenu?.cards[0].card.card.info.avgRating}
                </p>
                <p className="restaurant-totalRating">
                  {restaurantMenu?.cards[0].card.card.info.totalRatingsString}
                </p>
              </span>
            </div>
            <hr className="header-line" />
            <span className="time-block">
              <TimelapseSharpIcon className="time-icon" />{" "}
              <span className="delievery-time">
                {restaurantMenu?.cards[0].card.card.info.sla?.deliveryTime} MINS
              </span>
              <CurrencyRupeeTwoToneIcon className="rupee-icon" />{" "}
              <span className="delievery-time">
                {restaurantMenu?.cards[0].card.card.info.costForTwoMessage}
              </span>
            </span>
          </div>
          <div className="promotion-wrapper">
            {restaurantMenu?.cards[1].card.card.gridElements.infoWithStyle.offers.map(
              (det) => {
                return (
                  <div className="res-offer">
                    <NewReleasesIcon />
                    <span style={{ textAlign: "center", padding: "4px 0px",color :"#ffa700",fontWeight :"bold" }}>
                      {" "}
                      {det.info.header}
                      <br />{" "}
                    </span>
                    <span style={{ textAlign: "center", padding: "4px 0px" }}>
                      {" "}
                      {restaurantMenu?.cards[0].card.card.info.aggregatedDiscountInfo?.descriptionList[0]?.meta.toUpperCase()}{" "}
                    </span>
                  </div>
                );
              }
            )}
          </div>
          <div className="veg-label">
            Veg Only <Switch defaultChecked />
          </div>
          <hr className="label-divider" />

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <div className="accordian-header">Recommended</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="filter-list">
                <div  className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                  <img src= {NonVegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[0].title
                    }
                  </div >
                  <div className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[0].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza1} style={{borderRadius:"16px"}}/></span>
                </div>

                <div  className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/>{
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[1].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[1].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza2} style={{borderRadius:"16px"}}/></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[2].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[2].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza3} style={{borderRadius:"16px"}} /></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[3].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[3].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza4} style={{borderRadius:"16px"}}/></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[4].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[4].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza5} style={{borderRadius:"16px",height: "90px",width:"210px"}}/></span>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <div className="accordian-header">Match Day Combo</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="filter-list">
                <div  className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {NonVegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[0].title
                    }
                  </div >
                  <div className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[0].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza1} style={{borderRadius:"16px"}} /></span>
                </div>

                <div  className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/>  {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[1].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[1].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza2} style={{borderRadius:"16px"}} /></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                  <img src= {VegIcon} style={{width: "12px",height:"12px"}}/>  {" "}
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[2].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[2].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza3} style={{borderRadius:"16px"}} /></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[3].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[3].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza4} style={{borderRadius:"16px"}} /></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[4].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[4].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza5} style={{borderRadius:"16px",height: "90px",width:"210px"}} /></span>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <div className="accordian-header">Best Seller</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="filter-list">
                <div  className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {NonVegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[0].title
                    }
                  </div >
                  <div className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[0].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza1} style={{borderRadius:"16px"}}/></span>
                </div>

                <div  className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/>  {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[1].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[1].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza2} style={{borderRadius:"16px"}} /></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[2].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[2].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza3} style={{borderRadius:"16px"}}/></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[3].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[3].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza4} style={{borderRadius:"16px"}}/></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/>  {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[4].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[4].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza5} style={{borderRadius:"16px",height: "90px",width:"210px"}}/></span>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <div className="accordian-header">Highest Rated</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="filter-list">
                <div  className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {NonVegIcon} style={{width: "12px",height:"12px"}}/>   {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[0].title
                    }
                  </div >
                  <div className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[0].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza1} style={{borderRadius:"16px"}} /></span>
                </div>

                <div  className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[1].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[1].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza2} style={{borderRadius:"16px"}} /></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
               <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/>  {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[2].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[2].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza3} style={{borderRadius:"16px"}} /></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/>{
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[3].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[3].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza4} style={{borderRadius:"16px"}} /></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[4].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[4].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza5} style={{borderRadius:"16px",height: "90px",width:"210px"}} /></span>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <div className="accordian-header">Highest rated</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="filter-list">
                <div  className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {NonVegIcon} style={{width: "12px",height:"12px"}}/>  {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[0].title
                    }
                  </div >
                  <div className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[0].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza1} style={{borderRadius:"16px"}} /></span>
                </div>

                <div  className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/>  {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[1].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[1].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza2} style={{borderRadius:"16px",height: "90px",width:"210px"}} /></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/>    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[2].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[2].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza3} style={{borderRadius:"16px"}} /></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/>  {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[3].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[3].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza4} style={{borderRadius:"16px"}} /></span>
                </div>

                <div className="res-block">
                <span className="filter-item">
                  <div className="card-res-name">
                    {" "}
                    <img src= {VegIcon} style={{width: "12px",height:"12px"}}/> {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[4].title
                    }
                  </div>
                  <div  className="card-res-desc">
                    {
                      restaurantMenu?.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.carousel[4].dish.info.description
                    }
                  </div>
                </span>
                <span><img src={Pizza5} style={{borderRadius:"16px",height: "90px",width:"210px"}} /></span>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <div className="res-menu-footer-wrapper">
            <div className="res-menu-footer-head">
              License No. 12813013000655
            </div>
            <div className="res-menu-footer-body">
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  padding: "4px 0px",
                }}
              >
                {restaurantMenu?.cards[0].card.card.info.name}
              </div>
              <div className="res-menu-footer-areaName">
                {restaurantMenu?.cards[0].card.card.info.areaName}
              </div>
              <div className="res-menu-footer-city">
                <LocationOnOutlinedIcon />{" "}
                {restaurantMenu?.cards[0].card.card.info.city}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
