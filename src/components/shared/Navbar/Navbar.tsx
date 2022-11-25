import { useState } from "react";
import "./Navbar.css";
import NeonButton from "../NeonButton";

import { UilAngleDown } from "@iconscout/react-unicons";
import { HiBars3 } from "react-icons/hi2";

import horizontalLogo from "../../../assets/img/shared/horizontal.png";

function Navbar() {
  return (
    <div>
      <div className="navbar text-white">
        <div className="p-4 mx-auto flex justify-around gap-5">
          <img
            src={horizontalLogo}
            width="235px"
            className="logo self-center"
          />
          <nav className="font-poppins hidden md:block">
            <ul className="flex gap-12 items-center h-[100%] font-extralight">
              <li>Sobre Nós</li>
              <li className="flex gap-1">
                Criação de Sites <UilAngleDown />
              </li>
              <li className="flex gap-1">
                Portfólio <UilAngleDown />
              </li>
              <li>Contato</li>
            </ul>
          </nav>
          <NeonButton className="hidden md:block" title={"Fale Conosco"} />
          <HiBars3 className="md:hidden" size={40} />
        </div>
      </div>
      <div className="navbarOffset h-[72px] bg-[#ccc]"></div>
    </div>
  );
}

export default Navbar;
