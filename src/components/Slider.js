import React from "react";
import Slider from "react-slick";
// import heroImage from "../../public/assets/img/banner-fruits.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
  };

  return (
    <Slider {...settings}>
      <div className="carousel-item active rounded">
        {/* <img
          src={heroImage}
          className="img-fluid w-100 h-100 bg-secondary rounded"
          alt="First slide"
          // style={{ width: "100", height: "100" }}
        /> */}
        <a href="#" className="btn px-4 py-2 text-white rounded">
          Fruites
        </a>
      </div>
      <div className="carousel-item rounded">
        {/* <img
          src={heroImage}
          className="img-fluid w-100 h-100 rounded"
          alt="Second slide"
        /> */}
        <a href="#" className="btn px-4 py-2 text-white rounded">
          Vesitables
        </a>
      </div>
    </Slider>
  );
}
