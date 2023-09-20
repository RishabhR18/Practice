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

import "./Carousel.css";

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

const Carousel = () => {
  return (
    <>
      <div className="carousel-wrapper">
        <div>
          <div className="carousel-header">Rishabh, what's on your mind?</div>
          {CarouselArr.map((caraouselImage) => {
            return <img src={caraouselImage.image} className="image-list" />;
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
