import { useState } from "react";

import "./styles.css";
import alternativaLogo from "../../../assets/img/home/alternativa1.png";

function Portfolio() {
  return (
    <div className="relative grid grid-cols-5 font-poppins font-extralight text-white">
      <div className="pl-[204px] py-[304px] text-black col-span-3 bg-[#EAEAEA] flex justify-center items-center">
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
      <div className="relative col-span-2 bg-[#4A15BD] flex justify-center ">
        <img src={alternativaLogo} width="440px" className="self-center" />
      </div>
    </div>
  );
}

export default Portfolio;
