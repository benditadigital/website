import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import NeonButton from "../NeonButton";
import { Link } from "react-router-dom";

/* Recoil */
import { useRecoilState } from "recoil";
import { isNavbarOpen } from "../../../App";

export default function MobileNavbar() {
  const [isNavbarOpenState, setIsNavbarOpenState] =
    useRecoilState(isNavbarOpen);

  return (
    <nav
      className={`mobile-navbar ${
        isNavbarOpenState ? "active" : ""
      } pb-10 gap-10 flex flex-col justify-center items-center text-white  font-medium font-poppins block md:hidden`}
    >
      <div className="flex justify-center flex-col gap-3 items-center">
        <a className="dropdown flex flex-row text-2xl text-gray-500">
          Criação de Sites
        </a>
        <hr />
        <Link
          onClick={(e) => setIsNavbarOpenState(false)}
          className="dropdown flex flex-row items-center gap-1"
          to="/sites/expresso"
        >
          <RiArrowRightSFill />
          SITE EXPRESS
          <RiArrowLeftSFill />
        </Link>
        <Link
          onClick={(e) => setIsNavbarOpenState(false)}
          className="dropdown flex flex-row items-center gap-1"
          to="/sites/complexo"
        >
          <RiArrowRightSFill />
          SITE SOB MEDIDA
          <RiArrowLeftSFill />
        </Link>
      </div>

      <div className="flex justify-center flex-col gap-3 items-center">
        <a className="dropdown flex flex-row text-2xl text-gray-500">
          Portfolio
        </a>
        <hr />
        <Link
          onClick={(e) => setIsNavbarOpenState(false)}
          className="dropdown flex flex-row  items-center gap-1"
          to="/portfolio-sites"
        >
          <RiArrowRightSFill />
          SITES
          <RiArrowLeftSFill />
        </Link>
      </div>
      <NeonButton title="Fale Conosco" className="py-5 mt-10" />
    </nav>
  );
}
