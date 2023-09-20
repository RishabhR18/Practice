import React, { useState } from "react";
import { ReactDOM, Fragment } from "react";
import FoodIcon from "../utils/images/food-logo-icon.png";
import "./Header.css";
import {
  ContactSupportOutlined,
  InfoOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  StorefrontOutlined,
} from "@mui/icons-material";

const Header = () => {
  const [btnName,setBtnName] = useState ("Login");
  const controlBtn =() =>{
    btnName === "Login" ? setBtnName ("Logout") : setBtnName ("Login");
  }
  return (
    <Fragment>
      <div className="header-wrapper">
        <span className="header-icon">
          <img src={FoodIcon} alt="food-icon"  className="food-icon"/>
        </span>
        <nav className="nav-bar">
          <ul>
            <SearchOutlined />
            <li>Search</li>
            <InfoOutlined /> <li>About us</li>
            <li>Offers <sup className="new-text">New</sup></li>
            <ShoppingCartOutlined /> <li>Orders</li>
            <StorefrontOutlined />
            <li>Stores</li>
            <ContactSupportOutlined /> <li>Help & Support </li>
          </ul>
        </nav>
        <button className="login-btn" onClick={controlBtn}>{btnName}</button>
      </div>
    </Fragment>
  );
};

export default Header;
