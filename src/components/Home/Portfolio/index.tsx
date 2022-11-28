import { useState } from "react";

import "./styles.css";
import alternativaLogo from "../../../assets/img/home/alternativa1.png";
import SideBar from "../SideBar";

function Portfolio() {
  return (
    <div className="relative grid grid-cols-12 font-poppins font-extralight text-white fix-zindex">
      <SideBar bg="[#EAEAEA]" color="black" />
      <div className="text-center lg:text-start lg:pl-[104px] py-[304px] text-black col-span-12 lg:col-span-6 bg-[#EAEAEA] flex justify-center items-center">
        <div className="portfolio text-[38px] font-semibold">
          <ul>
            <li>
              <a className="px-10 lg:px-0">Criação de Sites</a>
            </li>
            <li>
              <a className="px-10 lg:px-0">Landing Pages</a>
            </li>
            <li>
              <a className="px-10 lg:px-0">E-Commerce</a>
            </li>
            <li>
              <a className="px-10 lg:px-0">Identidade Visual</a>
            </li>
            <li>
              <a className="">Gestão de Mídias Sociais</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex relative col-span-6 xl:col-span-5 bg-[#4A15BD] justify-center ">
        <img src={alternativaLogo} width="50%" className="self-center" />
      </div>
    </div>
  );
}

export default Portfolio;
