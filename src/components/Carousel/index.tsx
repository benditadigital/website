import "./styles.css";

import carousel1 from "../../assets/img/carousel/1.jpg";
import carousel2 from "../../assets/img/carousel/2.jpg";
import carousel3 from "../../assets/img/carousel/3.jpg";
import carousel4 from "../../assets/img/carousel/4.jpg";
import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

import Slider from "react-slick";

const slides = [
  {
    index: "1",
    image: carousel1,
    title: "The Hand of 1",
    description: "The strongest STAND1.",
  },
  {
    index: "2",
    image: carousel2,
    title: "The Hand of 2",
    description: "The strongest STAND2.",
  },
  {
    index: "3",
    image: carousel3,
    title: "The Hand of 3",
    description: "The strongest STAND3.",
  },
  {
    index: "4",
    image: carousel4,
    title: "The Hand of 4",
    description: "The strongest STAND4.",
  },
];

function renderSlides(slides: any) {
  return slides.map((slide: any) => (
    <div className="box" key={slide.key}>
      <img src={slide.image} />
      <div className="info text-right p-8">
        <div className="info-description">
          <h5 className="title font-bold text-[26px]">{slide.title}</h5>
          <p className="description text-[12px] font-light">
            {slide.description}
          </p>
        </div>
      </div>
    </div>
  ));
}

function Carousel() {
  var settings = {
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 500,
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
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel-wrapper fix-zindex">
      <Slider {...settings}>{renderSlides(slides)}</Slider>
    </div>
  );
}

export default Carousel;
