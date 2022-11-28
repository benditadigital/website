import { useRef, useState } from "react";
import "./styles.css";
import NeonButton from "../NeonButton";

import { HiBars3 } from "react-icons/hi2";

import horizontalLogo from "../../../assets/img/shared/horizontal.png";
import DesktopNavbar from "./Desktop";
import { MobileNavbar } from "./Mobile";
import { AiOutlineCloseSquare } from "react-icons/ai";

function Navbar() {
  var isMenuShowing = useRef(false);

  const [isOpen, setIsOpen] = useState(false);

  function handleMenuShowingButton(e: any) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className={`navbar text-white ${isOpen ? "max-zindex" : ""}`}>
        <div className="p-4 mx-auto flex justify-around gap-5">
          <img
            src={horizontalLogo}
            width="235px"
            className="logo self-center"
          />
          <DesktopNavbar />
          <NeonButton className="hidden md:block" title={"Fale Conosco"} />
          <button onClick={(e) => handleMenuShowingButton(e)}>
            {isOpen ? (
              <AiOutlineCloseSquare size={40} color="white" />
            ) : (
              <HiBars3 className="md:hidden" size={40} color="white" />
            )}
          </button>
        </div>
      </div>
      <MobileNavbar ref={isMenuShowing} isShowing={isOpen} />
      <div className="navbarOffset h-[72px] bg-[#ccc]"></div>
    </div>
  );
}

export default Navbar;
