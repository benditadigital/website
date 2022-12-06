import image01 from "../../../assets/img/portfolio/01.jpg";
import image02 from "../../../assets/img/portfolio/02.jpg";
import image03 from "../../../assets/img/portfolio/03.jpg";
import image04 from "../../../assets/img/portfolio/04.jpg";
import image05 from "../../../assets/img/portfolio/05.jpg";
import image06 from "../../../assets/img/portfolio/06.jpg";
import image07 from "../../../assets/img/portfolio/07.jpg";
import image08 from "../../../assets/img/portfolio/08.jpg";

import "tiny-slider/dist/tiny-slider.css";

import Slider from "react-slick";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const slides = [
  {
    index: "1",
    image: image01,
    title: "Syke",
    site: "https://www.sykedigital.com.br",
  },
  {
    index: "2",
    image: image02,
    title: "Calliope",
    site: "https://www.agenciacalliope.com.br",
  },
  {
    index: "3",
    image: image03,
    title: "BeatClass Masters",
    site: "https://www.beatclass.com.br",
  },
  {
    index: "4",
    image: image04,
    title: "Voltec Engenharia",
    site: "https://www.voltecengenharia.com",
  },
  {
    index: "5",
    image: image08,
    title: "Helotério",
    site: "https://www.heloterio.com.br",
  },
];

function renderSlides(slides: any) {
  return slides.map((slide: any) => (
    <div key={slide.key} className="lastwebsites-carousel-box">
      <a href={slide.site} target="_blank">
        <h6 className="font-bold mb-1 text-[22px]">{slide.title}</h6>
        <small>Visite o site</small>
      </a>
      <img width="100%" height="100%" src={slide.image} />
    </div>
  ));
}

export default function LastWebsitesCarousel() {
  var settings = {
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 7000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: false,
    nextArrow: <HiArrowRight color="#4a15bd" className="last-websites-arrow" />,
    prevArrow: <HiArrowLeft color="#4a15bd" className="last-websites-arrow" />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider className="lastwebsites-carousel" {...settings}>
      {renderSlides(slides)}
    </Slider>
  );
}
