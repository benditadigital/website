import "./styles.css";

import carousel1 from "../../assets/img/carousel/1.jpg";
import carousel2 from "../../assets/img/carousel/2.jpg";
import carousel3 from "../../assets/img/carousel/3.jpg";
import carousel4 from "../../assets/img/carousel/4.jpg";
import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const slides = [
  {
    image: carousel1,
    title: "The Hand of 1",
    description: "The strongest STAND1.",
  },
  {
    image: carousel2,
    title: "The Hand of 2",
    description: "The strongest STAND2.",
  },
  {
    image: carousel3,
    title: "The Hand of 3",
    description: "The strongest STAND3.",
  },
  {
    image: carousel4,
    title: "The Hand of 4",
    description: "The strongest STAND4.",
  },
  // repeat
  {
    image: carousel1,
    title: "The Hand of 1",
    description: "The strongest STAND5.",
  },
  {
    image: carousel2,
    title: "The Hand of 2",
    description: "The strongest STAND6.",
  },
  {
    image: carousel3,
    title: "The Hand of 3",
    description: "The strongest STAND7.",
  },
  {
    image: carousel4,
    title: "The Hand of 4",
    description: "The strongest STAND8.",
  },
];

function Carousel() {
  const [imagesOrder, setImagesOrder] = useState(["1", "2", "3"]);
  const [nextImage, setNextImage] = useState("1");

  const [currentSlide, setCurrentSlide] = useState(0);
  const [usedButton, setUsedButton] = useState(false);

  const [runAgain, setRunAgain] = useState(false);

  useEffect(() => {
    var timing = 3000;
    if (!usedButton) {
      setTimeout(function () {
        if (currentSlide < 4) {
          setCurrentSlide(currentSlide + 1);
        } else {
          setCurrentSlide(0);
        }
      }, timing);
    } else {
      console.log("Botão apertado! Ignorando");
      setUsedButton(false);
      setRunAgain(!runAgain);
    }
  }, [currentSlide, runAgain]);

  var boxStyle = {
    transform: `translateX(calc(var(--slide-width) * ${currentSlide} * -1))`,
    transition: currentSlide === 0 ? "" : "all 1s ease 0s",
  };

  function handleArrowLeft(e: any) {
    e.preventDefault();
    setUsedButton(true);
    if (currentSlide === 0) {
      setCurrentSlide(4);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function handleArrowRight(e: any) {
    e.preventDefault();
    setUsedButton(true);
    console.log("botao usado?", usedButton);
    if (currentSlide === 4) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function renderSlides(slides: any) {
    return slides.map((slide: any) => (
      <div className="box" key={slide.description} style={boxStyle}>
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

  return (
    <div className="carousel">
      <div className="arrows">
        <button className="arrow_left" onClick={(e) => handleArrowLeft(e)}>
          <FaAngleLeft />
        </button>
        <button className="arrow_right" onClick={(e) => handleArrowRight(e)}>
          <FaAngleRight />
        </button>
      </div>
      {renderSlides(slides)}
    </div>
  );
}

export default Carousel;
