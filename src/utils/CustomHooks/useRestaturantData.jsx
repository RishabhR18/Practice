import React from "react";
import { useState, useEffect } from "react";
import {RESTAURANT_MENU_URL} from "../constant";

const useRestaturantData = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const apiData = await data.json();

    const resValue = apiData.data;

    setRestaurantMenu(resValue);
  };

   return restaurantMenu;
};

export default useRestaturantData;
