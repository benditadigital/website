import { useState } from "react";
import heartEmoji from "../../assets/img/home/heartEmoji.svg";

import g1 from "../../../assets/img/home/portfolio/g1.png";
import g2 from "../../../assets/img/home/portfolio/g2.png";
import g3 from "../../../assets/img/home/portfolio/g3.png";
import g4 from "../../../assets/img/home/portfolio/g4.png";
import g5 from "../../../assets/img/home/portfolio/g5.png";
import g6 from "../../../assets/img/home/portfolio/g6.png";

import "./styles.css";

function LogoFolio() {
  return (
    <div>
      <div className="relative grid grid-cols-4 gap-10 font-poppins font-extralight text-white bg-black justify-center items-center">
        <div className="flex justify-center relative">
          <img className="logo" src={g1} width="70%" />
          <div className="logo-overlay"></div>
        </div>
        <div className="flex justify-center relative">
          <img className="logo" src={g2} width="70%" />
          <div className="logo-overlay"></div>
        </div>
        <div className="flex justify-center relative">
          <img className="logo" src={g3} width="70%" />
          <div className="logo-overlay"></div>
        </div>
        <div className="flex justify-center relative">
          <img className="logo" src={g4} width="70%" />
          <div className="logo-overlay"></div>
        </div>
      </div>
      <div className="relative grid grid-cols-4 gap-10 font-poppins font-extralight text-white bg-black justify-center items-center">
        <div className="flex justify-center relative">
          <img className="logo" src={g1} width="70%" />
          <div className="logo-overlay"></div>
        </div>
        <div className="flex justify-center relative">
          <img className="logo" src={g2} width="70%" />
          <div className="logo-overlay"></div>
        </div>
        <div className="flex justify-center relative">
          <img className="logo" src={g3} width="70%" />
          <div className="logo-overlay"></div>
        </div>
        <div className="flex justify-center relative">
          <img className="logo" src={g4} width="70%" />
          <div className="logo-overlay"></div>
        </div>
      </div>
      <div className="relative grid grid-cols-4 gap-10 font-poppins font-extralight text-white bg-black justify-center items-center">
        <div className="flex justify-center relative">
          <img className="logo" src={g1} width="70%" />
          <div className="logo-overlay"></div>
        </div>
        <div className="flex justify-center relative">
          <img className="logo" src={g2} width="70%" />
          <div className="logo-overlay"></div>
        </div>
        <div className="flex justify-center relative">
          <img className="logo" src={g3} width="70%" />
          <div className="logo-overlay"></div>
        </div>
        <div className="flex justify-center relative">
          <img className="logo" src={g4} width="70%" />
          <div className="logo-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default LogoFolio;