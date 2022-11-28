import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import NeonButton from "../NeonButton";

export const MobileNavbar = forwardRef((props: any, ref: any) => {
  function handleCloseButton(e: any) {
    e.preventDefault();
    setIsOpen(false);
  }
  const [isOpen, setIsOpen] = useState(props.isShowing);

  useEffect(() => {
    setIsOpen(props.isShowing);
  }, [props.isShowing]);

  useImperativeHandle(
    ref,
    () => ({
      getIsOpen: () => {
        return isOpen;
      },
    }),
    [isOpen]
  );

  return (
    <nav
      className={`mobile-navbar ${
        isOpen ? "active" : ""
      } pb-10 gap-10 flex flex-col justify-center items-center text-white  font-medium font-poppins block md:hidden`}
    >
      <div className="flex justify-center flex-col gap-3 items-center">
        <a className="dropdown flex flex-row text-2xl text-gray-500">
          Criação de Sites
        </a>
        <hr />
        <a className="dropdown flex flex-row items-center gap-1">
          <RiArrowRightSFill />
          SITE EXPRESS
          <RiArrowLeftSFill />
        </a>
        <a className="dropdown flex flex-row items-center gap-1">
          <RiArrowRightSFill />
          SITE SOB MEDIDA
          <RiArrowLeftSFill />
        </a>
      </div>

      <div className="flex justify-center flex-col gap-3 items-center">
        <a className="dropdown flex flex-row text-2xl text-gray-500">
          Portfolio
        </a>
        <hr />
        <a className="dropdown flex flex-row  items-center gap-1">
          <RiArrowRightSFill />
          SITES
          <RiArrowLeftSFill />
        </a>
      </div>
      <NeonButton title="Fale Conosco" className="py-5 mt-10" />
    </nav>
  );
});
