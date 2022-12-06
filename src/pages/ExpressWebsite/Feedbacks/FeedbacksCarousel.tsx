import icon1 from "../../../assets/img/expresswebsite/feedbacks/icon1.png";
import icon2 from "../../../assets/img/expresswebsite/feedbacks/icon2.png";
import icon3 from "../../../assets/img/expresswebsite/feedbacks/icon3.png";
import icon4 from "../../../assets/img/expresswebsite/feedbacks/icon4.png";

import { AiFillStar } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import "tiny-slider/dist/tiny-slider.css";

import Slider from "react-slick";

const slides = [
  {
    index: "1",
    image: icon1,
    title: "Assistec Solar",
    site: "www.assistecsolar.com.br",
    feedback:
      "Excelentes profissionais. Desenvolveram a minha identidade visual e site no prazo acordado. Gostei e recomendo.",
  },
  {
    index: "2",
    image: icon2,
    title: "Heloterio Engenharia",
    site: "www.heloterio.com.br",
    feedback:
      "Super indico! Não só fiz a identidade visual da minha empresa como também criamos o nosso site com a Bendita! Profissionais excelentes e um atendimento diferenciado.",
  },
  {
    index: "3",
    image: icon3,
    title: "Voltec Engenharia",
    site: "www.voltecegenharia.com.br",
    feedback:
      "Contratei a Bendita para dar uma repaginada no visual do meu site que era antigo e tinha muitos problemas de lentidão, e com um ótimo atendimento ao cliente e um design lindo eles fizeram o meu novo site, inclusive resolvendo os problemas que eu tinha anteriormente.",
  },
  {
    index: "4",
    image: icon4,
    title: "Syke Digital",
    site: "www.sykedigital.com.br",
    feedback:
      "A Bendita desenvolveu nossa identidade visual e nosso site e o resultado foi além das nossas expectativas, trampo foda! Recomendo mt!",
  },
];

function renderSlides(slides: any) {
  return slides.map((slide: any) => (
    <div key={slide.key} className="feedbacks-carousel-box py-5">
      <div className="top-side grid grid-cols-12 px-5 pb-3">
        <div className="col-span-1 flex items-center justify-center">
          <img width="36px" height="36px" src={slide.image} />
        </div>
        <div className="col-span-10 pl-3">
          <h5 className="title">{slide.title} </h5>
          <div className="flex">
            <AiFillStar color="#f0ad4e" />
            <AiFillStar color="#f0ad4e" />
            <AiFillStar color="#f0ad4e" />
            <AiFillStar color="#f0ad4e" />
            <AiFillStar color="#f0ad4e" />
          </div>
          <p className="site">{slide.site}</p>
        </div>
        <div className="col-span-1 flex justify-end">
          <BsWhatsapp size={14} color="#25D366" />
        </div>
      </div>
      <div className="p-4">"{slide.feedback}"</div>
    </div>
  ));
}

function FeedbacksCarousel() {
  var settings = {
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: false,
    nextArrow: <MdOutlineKeyboardArrowRight size="55" color="white" />,
    prevArrow: <RiArrowLeftSLine className="leftarrow" color="white" />,
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
    <Slider className="feedbacks-carousel" {...settings}>
      {renderSlides(slides)}
    </Slider>
  );
}

export default FeedbacksCarousel;
