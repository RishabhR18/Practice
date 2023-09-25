import React from "react";
import Pizza from "../../../utils/images/Pizza1.webp";
import NorthIndian from "../../../utils/images/northIndian.webp";
import Pasta from "../../../utils/images/Pasta.webp";
import Biryani from "../../../utils/images/biryani 1.webp";
import Noodles from "../../../utils/images/Noodles (1).webp";
import Icecream from "../../../utils/images/Ice_Creams.webp";
import Khichdi from "../../../utils/images/Khichdi.webp";
import Dosa from "../../../utils/images/Dosa.webp";
import SouthIndian from "../../../utils/images/South_Indian.webp";
import Kebabs from "../../../utils/images/Kebabs.webp";
import Chole from "../../../utils/images/Chole_Bature.webp";
import PavBhaji from "../../../utils/images/Pav_Bhaji.webp";
import Rolls from "../../../utils/images/Rolls.webp";
import Paratha from "../../../utils/images/Paratha.webp";
import Cakes from "../../../utils/images/Cakes.webp";
import Dessets from "../../../utils/images/Desserts.webp";
import Rasgulla from "../../../utils/images/Rasgulla.webp";
import Veg from "../../../utils/images/Pure_Veg.webp";
import { useRef, useState } from "react";
import "./PromotionCarousel.css";

const PromotionCarousel = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
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
  const CarouselArr = [
    {
      image: Pizza,
    },
    {
      image: NorthIndian,
    },
    {
      image: SouthIndian,
    },
    {
      image: Noodles,
    },
    { image: Dessets },
    { image: Cakes },
    {
      image: Dosa,
    },
    {
      image: Khichdi,
    },
    {
      image: Icecream,
    },
    {
      image: Biryani,
    },
    {
      image: Pasta,
    },
    {
      image: Paratha,
    },
    {
      image: Rolls,
    },
    {
      image: PavBhaji,
    },
    { image: Chole },
    { image: Kebabs },
    { image: Rasgulla },
    {
      image: Veg,
    },
  ];


  return (
    <>
    <div className="promotion-carousel">
      <button onClick={() => scroll("left")} className="prev-btn">
        &lt;
      </button>
      <button onClick={() => scroll("right")} className="next-btn">
        &gt;
      </button>

      <div className="promotion-container" ref={containerRef}>
        {CarouselArr.map((caraouselImage) => {
          return <img src={caraouselImage.image} className="items-image" />;
        })}
      </div>
    </div>
    </>
  );
};

export default PromotionCarousel;
