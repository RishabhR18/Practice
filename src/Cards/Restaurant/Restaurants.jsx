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

// const resObj = [
//   {
//     id: "23925",
//     name: "Domino's Pizza",
//     cloudinaryImageId: DominosImage,
//     locality: "BT Road",
//     areaName: "Bidhannagar",
//     costForTwo: "₹400 for two",
//     cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
//     avgRating: 2.3,
//     feeDetails: {
//       restaurantId: "23925",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 3000,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 3000,
//     },
//     parentId: "2456",
//     avgRatingString: "4.3",
//     totalRatingsString: "10K+",
//     sla: {
//       deliveryTime: 25,
//       serviceability: "SERVICEABLE",
//       slaString: "25 mins",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2023-09-17 02:57:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "₹100 OFF",
//       subHeader: "ABOVE ₹999",
//       discountTag: "FLAT DEAL",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   {
//     id: "44319",
//     name: "KFC",
//     cloudinaryImageId: KfcImage,
//     locality: "Saltlake",
//     areaName: "Nicco Park",
//     costForTwo: "₹450 for two",
//     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//     avgRating: 4.1,
//     feeDetails: {
//       restaurantId: "44319",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 3500,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 3500,
//     },
//     parentId: "547",
//     avgRatingString: "4.1",
//     totalRatingsString: "10K+",
//     sla: {
//       deliveryTime: 26,
//       lastMileTravel: 2.1,
//       serviceability: "SERVICEABLE",
//       slaString: "26 mins",
//       lastMileTravelString: "2.1 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2023-09-16 23:59:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "20% OFF",
//       subHeader: "UPTO ₹50",
//     },
//     loyaltyDiscoverPresentationInfo: {
//       badgeType: "BADGE_TYPE_OFFER_PACK",
//       offerSubText: "with offer pack",
//       nonSwiggyOneFreedelMessage: "FREE DELIVERY",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   {
//     id: "240184",
//     name: "Burger King",
//     cloudinaryImageId: BurgerImage,
//     locality: "City Center 1 Mall",
//     areaName: "Bidhannagar",
//     costForTwo: "₹350 for two",
//     cuisines: ["Burgers", "American"],
//     avgRating: 4.2,
//     feeDetails: {
//       restaurantId: "240184",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 3000,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 3000,
//     },
//     parentId: "166",
//     avgRatingString: "4.2",
//     totalRatingsString: "10K+",
//     sla: {
//       deliveryTime: 31,
//       lastMileTravel: 1.9,
//       serviceability: "SERVICEABLE",
//       slaString: "31 mins",
//       lastMileTravelString: "1.9 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2023-09-17 00:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "60% OFF",
//       subHeader: "UPTO ₹120",
//     },
//     loyaltyDiscoverPresentationInfo: {
//       badgeType: "BADGE_TYPE_OFFER_PACK",
//       offerSubText: "with offer pack",
//       nonSwiggyOneFreedelMessage: "FREE DELIVERY",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   {
//     id: "14155",
//     name: "Subway",
//     cloudinaryImageId: SubwayImage,
//     locality: "Swimming Pool, Sector 1",
//     areaName: "Bidhannagar",
//     costForTwo: "₹350 for two",
//     cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
//     avgRating: 4.4,
//     feeDetails: {
//       restaurantId: "14155",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 3000,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 3000,
//     },
//     parentId: "2",
//     avgRatingString: "4.4",
//     totalRatingsString: "10K+",
//     sla: {
//       deliveryTime: 21,
//       lastMileTravel: 1.4,
//       serviceability: "SERVICEABLE",
//       slaString: "21 mins",
//       lastMileTravelString: "1.4 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2023-09-17 01:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     loyaltyDiscoverPresentationInfo: {
//       badgeType: "BADGE_TYPE_OFFER_PACK",
//       offerSubText: "with offer pack",
//       nonSwiggyOneFreedelMessage: "FREE DELIVERY",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   {
//     id: "10365",
//     name: "Pizza Hut",
//     cloudinaryImageId: PizzaHutImage,
//     locality: "CC1 (57)",
//     areaName: "Bidhannagar",
//     costForTwo: "₹350 for two",
//     cuisines: ["Pizzas"],
//     avgRating: 4.1,
//     feeDetails: {
//       restaurantId: "10365",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 3000,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 3000,
//     },
//     parentId: "721",
//     avgRatingString: "4.1",
//     totalRatingsString: "5K+",
//     sla: {
//       deliveryTime: 32,
//       lastMileTravel: 2.1,
//       serviceability: "SERVICEABLE",
//       slaString: "32 mins",
//       lastMileTravelString: "2.1 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2023-09-16 23:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "30% OFF",
//       subHeader: "UPTO ₹75",
//     },
//     loyaltyDiscoverPresentationInfo: {
//       badgeType: "BADGE_TYPE_OFFER_PACK",
//       offerSubText: "with offer pack",
//       nonSwiggyOneFreedelMessage: "FREE DELIVERY",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   {
//     id: "496195",
//     name: "Wow! Momo",
//     cloudinaryImageId: MomoImage,
//     locality: "Sector-1",
//     areaName: "Saltlake",
//     costForTwo: "₹300 for two",
//     cuisines: [
//       "Tibetan",
//       "Healthy Food",
//       "Asian",
//       "Chinese",
//       "Snacks",
//       "Continental",
//       "Desserts",
//       "Beverages",
//     ],
//     avgRating: 4.4,
//     feeDetails: {
//       restaurantId: "496195",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 3000,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 3000,
//     },
//     parentId: "1776",
//     avgRatingString: "4.4",
//     totalRatingsString: "1K+",
//     sla: {
//       deliveryTime: 23,
//       lastMileTravel: 2,
//       serviceability: "SERVICEABLE",
//       slaString: "23 mins",
//       lastMileTravelString: "2.0 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2023-09-16 23:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "60% OFF",
//       subHeader: "UPTO ₹120",
//     },
//     loyaltyDiscoverPresentationInfo: {
//       badgeType: "BADGE_TYPE_OFFER_PACK",
//       offerSubText: "with offer pack",
//       nonSwiggyOneFreedelMessage: "FREE DELIVERY",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   {
//     id: "242966",
//     name: "La Pino'z Pizza",
//     cloudinaryImageId: LaPinozImage,
//     locality: "Sector V Salt Lake",
//     areaName: "Bidhannagar",
//     costForTwo: "₹250 for two",
//     cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
//     avgRating: 4.1,
//     feeDetails: {
//       restaurantId: "242966",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 3600,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 3600,
//     },
//     parentId: "4961",
//     avgRatingString: "4.1",
//     totalRatingsString: "5K+",
//     sla: {
//       deliveryTime: 27,
//       lastMileTravel: 3.6,
//       serviceability: "SERVICEABLE",
//       slaString: "27 mins",
//       lastMileTravelString: "3.6 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2023-09-17 05:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "30% OFF",
//       subHeader: "UPTO ₹75",
//     },
//     loyaltyDiscoverPresentationInfo: {
//       badgeType: "BADGE_TYPE_OFFER_PACK",
//       offerSubText: "with offer pack",
//       nonSwiggyOneFreedelMessage: "FREE DELIVERY",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   {
//     id: "43087",
//     name: "The Belgian Waffle Co.",
//     cloudinaryImageId: WaffleImage,
//     locality: "Sector 1",
//     areaName: "Bidhannagar",
//     costForTwo: "₹200 for two",
//     cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
//     avgRating: 4.5,
//     veg: true,
//     feeDetails: {
//       restaurantId: "43087",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 3000,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 3000,
//     },
//     parentId: "2233",
//     avgRatingString: "4.5",
//     totalRatingsString: "5K+",
//     sla: {
//       deliveryTime: 21,
//       lastMileTravel: 1.4,
//       serviceability: "SERVICEABLE",
//       slaString: "21 mins",
//       lastMileTravelString: "1.4 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2023-09-17 02:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "20% OFF",
//       subHeader: "UPTO ₹50",
//     },
//     loyaltyDiscoverPresentationInfo: {
//       badgeType: "BADGE_TYPE_OFFER_PACK",
//       offerSubText: "with offer pack",
//       nonSwiggyOneFreedelMessage: "FREE DELIVERY",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   {
//     id: "664280",
//     name: "Giani's",
//     cloudinaryImageId: GianisImage,
//     locality: "Bidhannagar",
//     areaName: "Salt Lake",
//     costForTwo: "₹250 for two",
//     cuisines: ["Ice Cream"],
//     avgRating: 3.8,
//     feeDetails: {
//       restaurantId: "664280",
//       fees: [
//         {
//           name: "BASE_DISTANCE",
//           fee: 3000,
//         },
//         {
//           name: "BASE_TIME",
//         },
//         {
//           name: "ANCILLARY_SURGE_FEE",
//         },
//       ],
//       totalFee: 3000,
//     },
//     parentId: "380244",
//     avgRatingString: "3.8",
//     totalRatingsString: "100+",
//     sla: {
//       deliveryTime: 19,
//       lastMileTravel: 0.5,
//       serviceability: "SERVICEABLE",
//       slaString: "19 mins",
//       lastMileTravelString: "0.5 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2023-09-17 04:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "25% OFF",
//       subHeader: "UPTO ₹65",
//     },
//     loyaltyDiscoverPresentationInfo: {
//       badgeType: "BADGE_TYPE_OFFER_PACK",
//       offerSubText: "with offer pack",
//       nonSwiggyOneFreedelMessage: "FREE DELIVERY",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
// ];

const Restaurant = () => {
  const [resList, setResList] = useState([]);
  // const [carousel,setCarousel] = useState ([]);
  const [inputData, setInputData] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [cuisineList, setCuisineList] = useState([]);
  const [exploreList, setExploreList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.590798&lng=88.423888&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const apiData = await data.json();
    const resolvedData =
      apiData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.map(
        (res) => {
          return res.info;
        }
      );

    // const carouselData= apiData.data.cards[0].card.card.gridElements.infoWithStyle.info.map(
    //   (res) => {
    //     return res.imageId;
    //   }
    // );

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
    // setCarousel(carouselData);
  };

  const filterRestaurants = () => {
    const filterList = resList.filter((res) => {
      return res.avgRating > 4.2;
    });
    console.log("8888", filterList);
    setFilteredList(filterList);
  };

  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  const handleClick = () => {
    let searchList = resList.filter((rest) => {
      return rest.name.toLowerCase().includes(inputData.toLowerCase());
    });
    console.log("9999", searchList);
    //setResList(searchList);
    setFilteredList(searchList);
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* {carousel.map((carouselImg) =>{
        return <Carousel carouselData = {carouselImg}/>
       })} */}

      <Carousel />
      <hr className="line-divider" />
      <div className="restaurant-wrapper">
        <div className="restaurant-header">
          Restaurants with online food delivery
        </div>
        <div className="filter-bar">
          <span className="filter-block">
            <button onClick={filterRestaurants} className="filter-button">
              Filter Restaurants
            </button>

            <FilterAltOutlinedIcon style={{ fontSize: "32px" }} />
          </span>
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
              console.log("check here",restaurants);
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
