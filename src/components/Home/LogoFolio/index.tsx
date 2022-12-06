import { useState } from "react";
import heartEmoji from "../../assets/img/home/heartEmoji.svg";

import g1 from "../../../assets/img/home/portfolio/g1.png";
import g2 from "../../../assets/img/home/portfolio/g2.png";
import g3 from "../../../assets/img/home/portfolio/g3.png";
import g4 from "../../../assets/img/home/portfolio/g4.png";
import g5 from "../../../assets/img/home/portfolio/g5.png";
import g6 from "../../../assets/img/home/portfolio/g6.png";

import a1 from "../../../assets/img/home/portfolio/a1.png";
import a2 from "../../../assets/img/home/portfolio/a2.png";
import a3 from "../../../assets/img/home/portfolio/a3.png";
import a4 from "../../../assets/img/home/portfolio/a4.png";
import a5 from "../../../assets/img/home/portfolio/a5.png";
import a6 from "../../../assets/img/home/portfolio/a6.png";
import a7 from "../../../assets/img/home/portfolio/a7.png";
import a8 from "../../../assets/img/home/portfolio/a8.png";
import a9 from "../../../assets/img/home/portfolio/a9.png";
import a10 from "../../../assets/img/home/portfolio/a10.png";
import a11 from "../../../assets/img/home/portfolio/a11.png";
import a12 from "../../../assets/img/home/portfolio/a12.png";

import "./styles.css";
import SideBar from "../SideBar";

function LogoFolio() {
  return (
    <div>
      <div className="grid grid-cols-12 py-10 text-white font-poppins font-extralight bg-black">
        <SideBar bg="black" color="white" />
        <div className="relative col-span-12 lg:col-span-11">
          <div className="relative grid grid-cols-4 justify-center items-center">
            <div className="col-span-2 md:col-span-1 flex justify-center relative">
              <img className="logo" src={a1} width="50%" />
              <div className="logo-overlay"></div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center relative">
              <img className="logo" src={a2} width="50%" />
              <div className="logo-overlay"></div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center relative">
              <img className="logo" src={a3} width="50%" />
              <div className="logo-overlay"></div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center relative">
              <img className="logo" src={a4} width="50%" />
              <div className="logo-overlay"></div>
            </div>
          </div>

          <div className="relative grid grid-cols-4 justify-center items-center">
            <div className="col-span-2 md:col-span-1 flex justify-center relative">
              <img className="logo" src={a5} width="70%" />
              <div className="logo-overlay"></div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center relative">
              <img className="logo" src={a6} width="70%" />
              <div className="logo-overlay"></div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center relative">
              <img className="logo" src={a7} width="70%" />
              <div className="logo-overlay"></div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center relative">
              <img className="logo" src={a8} width="70%" />
              <div className="logo-overlay"></div>
            </div>
          </div>

          <div className="relative grid grid-cols-4 justify-center items-center">
            <div className="col-span-2 md:col-span-1 flex justify-center relative">
              <img className="logo" src={a9} width="70%" />
              <div className="logo-overlay"></div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center relative">
              <img className="logo" src={a10} width="70%" />
              <div className="logo-overlay"></div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center relative">
              <img className="logo" src={a11} width="70%" />
              <div className="logo-overlay"></div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center relative">
              <img className="logo" src={a12} width="70%" />
              <div className="logo-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoFolio;
