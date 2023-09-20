import React from "react";
import { ReactDOM, Fragment } from "react";
import GooglePlayIcon from "../utils/images/google-play-icon.png";
import AppStoreIcon from "../utils/images/app-store.png";

import "./Footer.css";

let aboutList = [
  "About",
  "Careers",
  "Team",
  "Swiggy One",
  " Swiggy Instamart",
  " Swiggy Genie",
];

const contactList = [" Help & Support", "Partner with us", "Ride with us"];

const deliverCities = [
  " Bangalore",
  "Gurgaon",
  "Hyderabad",
  " Delhi",
  "Mumbai",
  "Pune",
];

const valueList=["Terms & Conditions","Cookie Policy","Private Policy"];

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-wrapper">
        <div className="footer-head">
          <span className="download-info">
            For better experience , Download the Twicky app now.
          </span>
          <span>
            <img
              src={GooglePlayIcon}
              alt="google-play-store"
              className="play-image"
            />
          </span>
          <span>
            <img src={AppStoreIcon} alt="app-store" className="store-image" />
          </span>
        </div>
        <div className="footer-body">
          <div className="first-list">
            <span className="twicky">Twicky</span>
            <div className="twicky-text">
              © 2023 Dummy Technologies Pvt. Ltd
            </div>
          </div>
          <div className="second-list">
            <span className="list-header">Company</span>

            <ul className="footer-list">
              {aboutList.map((item, index) => (
                <li key={index} className="list-items">
                  {item}
                </li>
              ))}
            </ul>
            <ul></ul>
          </div>
          <div className="third-list">
            <span className="list-header">Contact Us</span>
            <ul className="footer-list">
              {contactList.map((item, index) => (
                <li key={index} className="list-items">
                  {item}
                </li>
              ))}
            </ul>

            <span className="list-header">Legal</span>
            <ul className="footer-list">
              {valueList.map((item, index) => (
                <li key={index} className="list-items">
                  {item}
                </li>
              ))}
            </ul>


          </div>
          <div className="fourth-list">
            <span className="list-header">We deliever to</span>
            <ul className="footer-list">
              {deliverCities.map((item, index) => (
                <li key={index} className="list-items">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
