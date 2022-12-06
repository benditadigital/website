import { useRef, useState } from "react";
import "./styles.css";
import NeonButton from "../NeonButton";

import { HiBars3 } from "react-icons/hi2";

import horizontalLogo from "../../../assets/img/shared/horizontal.png";
import DesktopNavbar from "./Desktop";
import MobileNavbar from "./Mobile";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isNavbarOpen } from "../../../App";
import { currentPath } from "../../../App";

function Navbar() {
  const [isNavbarOpenState, setIsNavbarOpenState] =
    useRecoilState(isNavbarOpen);

  console.log(window.location.pathname);

  return (
    <div>
      <div
        className={`navbar text-white ${isNavbarOpenState ? "max-zindex" : ""}`}
      >
        <div className="p-4 mx-auto flex justify-around gap-5">
          <Link onClick={(e) => setIsNavbarOpenState(false)} to="/">
            <img
              src={horizontalLogo}
              width="235px"
              className="logo self-center"
            />
          </Link>

          <DesktopNavbar />
          <NeonButton className="hidden md:flex" title={"Fale Conosco"} />
          <button onClick={(e) => setIsNavbarOpenState(!isNavbarOpenState)}>
            {isNavbarOpenState ? (
              <AiOutlineCloseSquare size={40} color="white" />
            ) : (
              <HiBars3 className="md:hidden" size={40} color="white" />
            )}
          </button>
        </div>
      </div>
      <MobileNavbar />
      <div className="navbarOffset h-[72px] bg-[#ccc]"></div>
    </div>
  );
}

export default Navbar;
