import "./styles.css";

import carousel1 from "../../../assets/img/home/logocarousel/a1.png";
import carousel2 from "../../../assets/img/home/logocarousel/a2.png";
import carousel3 from "../../../assets/img/home/logocarousel/a3.png";
import carousel4 from "../../../assets/img/home/logocarousel/a4.png";
import carousel5 from "../../../assets/img/home/logocarousel/a5.png";
import carousel6 from "../../../assets/img/home/logocarousel/a6.png";

import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

import Slider from "react-slick";

const slides = [
  {
    index: "1",
    image: carousel1,
  },
  {
    index: "2",
    image: carousel2,
  },
  {
    index: "3",
    image: carousel3,
  },
  {
    index: "4",
    image: carousel4,
  },
  {
    index: "5",
    image: carousel5,
  },
  {
    index: "6",
    image: carousel6,
  },
];

function renderSlides(slides: any) {
  return slides.map((slide: any) => (
    <div className="logo-carousel" key={slide.key}>
      <img src={slide.image} />
    </div>
  ));
}

function Carousel() {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="logo-carousel-wrapper">
      <Slider {...settings}>{renderSlides(slides)}</Slider>
    </div>
  );
}

export default Carousel;
