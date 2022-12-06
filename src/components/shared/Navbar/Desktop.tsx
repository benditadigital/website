import { UilAngleDown } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import NeonButton from "../NeonButton";

import { useRecoilState } from "recoil";
import { currentPath } from "../../../App";

export default function DesktopNavbar() {
  const [websiteCurrentPath, setWebsiteCurrentPath] =
    useRecoilState(currentPath);

  return (
    <nav className="font-poppins hidden md:block">
      <ul className="flex items-center h-[100%] font-extralight">
        <li className="pr-10">
          {websiteCurrentPath == "/" ? (
            <a href="#about_us">Sobre Nós</a>
          ) : (
            <Link to="/#about_us">Sobre Nós</Link>
          )}
        </li>
        <li className="flex pr-10">
          <a className="dropdown flex flex-row">
            Criação de Sites <UilAngleDown />
          </a>
          <div className="dropdown-box font-medium text-[13px]">
            <div className="dropdown-space"></div>
            <div className="dropdown-body">
              <Link className="dropdown-item first" to="/sites/expresso">
                Site Expresso
              </Link>
              <Link to="/sites/complexo" className="dropdown-item last">
                Site Sob Demanda
              </Link>
            </div>
          </div>
        </li>
        <li className="flex pr-10">
          <a className="dropdown flex flex-row">
            Portfólio <UilAngleDown />
          </a>
          <div className="dropdown-box font-medium text-[13px]">
            <div className="dropdown-space"></div>
            <div className="dropdown-body">
              <Link className="dropdown-item unique" to="/portfolio-sites">
                Sites
              </Link>
            </div>
          </div>
        </li>
        <li>
          <a href="#talk_to_us">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
