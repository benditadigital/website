import { useState } from "react";
import "./Navbar.css";
import NeonButton from "../NeonButton";

import { UilBars } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { HiBars3 } from "react-icons/hi2";

import horizontalLogo from "../../../assets/img/shared/horizontal.png";

function Navbar() {
  return (
    <div className="navbar text-white">
      <div className="p-4 mx-auto flex justify-around gap-5">
        <img src={horizontalLogo} width="235px" className="logo self-center" />
        <nav className="font-poppins">
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
        <NeonButton title={"Fale Conosco"} />
        <HiBars3 size={40} />
      </div>
    </div>
  );
}

export default Navbar;
