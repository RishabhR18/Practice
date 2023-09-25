import React from "react";
import { useRef, useState } from "react";
import Offer1 from "../../../utils/images/offer1.webp";
import Offer2 from "../../../utils/images/offer2.webp";
import Offer3 from "../../../utils/images/offer3.webp";
import Offer4 from "../../../utils/images/offer4.webp";
import Offer5 from "../../../utils/images/offer5.webp";
import Offer6 from "../../../utils/images/offer6.webp";
import Offer7 from "../../../utils/images/offer7.webp";
import Offer8 from "../../../utils/images/offer8.webp";

import "./OfferCarousel.css";

const PromotionCarousel = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const containedRef = useRef(null);

  const scroll = (direction) => {
    const container = containedRef.current;
    const scrollAmount = 250; // Adjust the scroll amount as needed
    const newPosition =
      direction === "left"
        ? scrollLeft - scrollAmount
        : scrollLeft + scrollAmount;

    if (container) {
      container.scrollTo({
        left: newPosition,
        behavior: "smooth", // Add smooth scrolling effect
      });
      setScrollLeft(newPosition);
    }
  };

  const promotionArr = [
    {
      image: Offer1,
    },
    {
      image: Offer2,
    },
    {
      image: Offer7,
    },
    {
      image: Offer8,
    },
    {
      image: Offer6,
    },
    {
      image: Offer3,
    },
    {
      image: Offer4,
    },
    {
      image: Offer5,
    },
  ];

  return (
    <>
      <div className="promotion-carousel">
        <button onClick={() => scroll("left")} className="previous-btn">
          &lt;
        </button>
        <button onClick={() => scroll("right")} className="upcoming-btn">
          &gt;
        </button>

        <div className="promotion-container" ref={containedRef}>
          {promotionArr.map((caraouselImage) => {
            return <img src={caraouselImage.image} className="promo-image" />;
          })}
        </div>
      </div>
    </>
  );
};

export default PromotionCarousel;
