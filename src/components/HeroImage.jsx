import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroImage = () => {
  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      stopOnHover={false}
      showArrows={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={7000}
    >
      <div>
        <img src="/images/blood-donation-illustration-concept-with-blood-bag-world-blood-donor-day_95561-346-removebg-preview.png" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/images/front-view-shopping-cart-with-pill-foils-containers_23-2148533497.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/images/front-view-shopping-cart-with-pill-foils-containers_23-2148533497.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};
export default HeroImage;
