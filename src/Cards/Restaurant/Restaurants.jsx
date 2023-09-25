import React, { useEffect, useState } from "react";
import "./Restaurant.css";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import Shimmer from "../../Loader/Shimmer";
import Carousel from "./Carousel/Carousel";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Search } from "@mui/icons-material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Recommendations from "../../Recommendation_section/Places/Recommendations";
import Cuisines from "../../Recommendation_section/Cuisines/Cuisines";
import Explore from "../../Recommendation_section/Explore/Explore";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/CustomHooks/useOnlineStatus";
import { RESTAURANT_BLOCK_URL } from "../../utils/constant";
import CarouselComp from "./Carousel/Carousel";
import OfferCarousel from "./Carousel/OfferCarousel";

const Restaurant = () => {
  const [resList, setResList] = useState([]);
  const [inputData, setInputData] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [cuisineList, setCuisineList] = useState([]);
  const [exploreList, setExploreList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_BLOCK_URL);
    const apiData = await data.json();
    const resolvedData =
      apiData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.map(
        (res) => {
          return res.info;
        }
      );

    let recommendedData = apiData.data.cards[7].card.card.brands
      .map((recc) => {
        return recc.text;
      })
      .slice(0, 24);

    let cuisinesList = apiData.data.cards[8].card.card.brands
      .map((cuisines) => {
        return cuisines.text;
      })
      .slice(0, 24);

    let exploreData = apiData.data.cards[9].card.card.brands.map((explore) => {
      return explore.text;
    });

    setResList(resolvedData);
    setFilteredList(resolvedData);
    setRecommended(recommendedData);
    setCuisineList(cuisinesList);
    setExploreList(exploreData);
  };

  const filterbyRating = () => {
    const filterList = resList.filter((res) => {
      return res.avgRating > 4.0;
    });
    setFilteredList(filterList);
  };

  // const filterbyDelieveryTime = () => {
  //   const delieveryList = filteredList.filter((res) => {
  //     return res?.sla?.deliveryTime >=40;
  //   });
  //   console.log("ffffffffff",delieveryList)
  //   setFilteredList(delieveryList);
  // };


  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  const handleClick = () => {
    let searchList = resList.filter((rest) => {
      return rest.name.toLowerCase().includes(inputData.toLowerCase());
    });
    console.log("9999", searchList);
    setFilteredList(searchList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return (
      <h1 style={{ textAlign: "center" }}>
        {" "}
        Looks like somethoing wrong with your intenet.Pease check your
        connection.
      </h1>
    );
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <>      
      <CarouselComp />
      <hr className="line-divider" />
      <div className="restaurant-wrapper">
        <div className="restaurant-header">
          Restaurants with online food delivery
        </div>
        <div className="filter-bar">
          <div className="filter-block">
            <button  className="filter-button">
              Filter Restaurants
            </button>
            <button className="filter-button">
              Fast Delievery
            </button>
            <button  className="filter-button">
              New on Swiggy
            </button>
            <button onClick={filterbyRating}  className="filter-button">
              Ratings 4.0+
            </button>
            <button  className="filter-button">
             Pure Veg
            </button>
            <button className="filter-button">
              Rs 300-600
            </button>
            <button className="filter-button">
              BestSeller
            </button>
            
           
          </div>
          <span className="search-block">
            <input
              id="outlined-basic"
              className="search-input"
              label="Outlined"
              placeholder="Search any restaurant"
              variant="outlined"
              value={inputData}
              onChange={handleChange}
            />

            <button onClick={handleClick} className="search-btn">
              <Search />
              Search
            </button>
          </span>
        </div>
        <div className="restaurant-container">
          {filteredList.length === 0 ? (
            <span className="no-results">
              <SentimentVeryDissatisfiedIcon style={{ fontSize: "72px" }} />
              <span class="no-results-text">Oops ! No Restaurants Found </span>
            </span>
          ) : (
            filteredList.map((restaurants) => {
              console.log("check here", restaurants);
              return (
                <Link
                  key={restaurants?.id}
                  to={"/restaurant/" + restaurants?.id}
                >
                  <RestaurantCard resData={restaurants} />{" "}
                </Link>
              );
            })
          )}
        </div>
      </div>
      <hr className="line-divider" />
      <div className="try-cuisines">Best Places To Eat Across Cities</div>
      <div className="recc-container">
        {recommended.map((recommendedCities) => {
          return <Recommendations reccData={recommendedCities} />;
        })}
      </div>
      <div className="try-cuisines">Best Cuisines Near Me</div>
      <div className="recc-container">
        {cuisineList.map((recommendedCuisine) => {
          return <Cuisines cuisineData={recommendedCuisine} />;
        })}
      </div>
      <div className="try-cuisines">Explore Every Restaurants Near Me</div>
      <div className="recc-container">
        {exploreList.map((recommendedCuisine) => {
          return <Explore exploreData={recommendedCuisine} />;
        })}
      </div>
    </>
  );
};

export default Restaurant;
