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
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const controlBtn = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  return (
    <Fragment>
      <div className="header-wrapper">
        <span className="header-icon">
          <img src={FoodIcon} alt="food-icon" className="food-icon" />
        </span>
        <nav className="nav-bar">
          <ul>
            <SearchOutlined />
            <Link to="/search" className="link">
              {" "}
              <li>Search</li>
            </Link>
            <InfoOutlined />{" "}
            <Link to="/about" className="link">
              {" "}
              <li>About us</li>
            </Link>
            <Link to="/offers" className="link" style={{marginTop:"-6px"}}>
              {" "}
              <li>Offers <sup className="new-text">New</sup> </li>
            </Link>
            <ShoppingCartOutlined />{" "}
            <Link to="/orders" className="link">
              {" "}
              <li>Orders</li>
            </Link>
            <StorefrontOutlined />
            <Link to="/stores" className="link">
              {" "}
              <li>Stores</li>
            </Link>
            <ContactSupportOutlined />{" "}
            <Link to="/about" className="link">
              {" "}
              <li>Help and Support</li>
            </Link>
          </ul>
        </nav>
        <button className="login-btn" onClick={controlBtn}>
          {btnName}
        </button>
      </div>
    </Fragment>
  );
};

export default Header;
