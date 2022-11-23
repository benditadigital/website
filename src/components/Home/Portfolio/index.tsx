import { useState } from "react";

import "./styles.css";
import alternativaLogo from "../../../assets/img/home/alternativa1.png";
import SideBar from "../SideBar";

function Portfolio() {
  return (
    <div className="relative grid grid-cols-12 font-poppins font-extralight text-white">
      <SideBar bg="[#EAEAEA]" color="black" />
      <div className="pl-[104px] py-[304px] text-black col-span-6 bg-[#EAEAEA] flex justify-center items-center">
        <div className="portfolio text-[38px] font-semibold">
          <ul>
            <li>
              <a>Criação de Sites</a>
            </li>
            <li>
              <a>Landing Pages</a>
            </li>
            <li>
              <a>E-Commerce</a>
            </li>
            <li>
              <a>Identidade Visual</a>
            </li>
            <li>
              <a>Gestão de Mídias Sociais</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative col-span-5 bg-[#4A15BD] flex justify-center ">
        <img src={alternativaLogo} width="440px" className="self-center" />
      </div>
    </div>
  );
}

export default Portfolio;
