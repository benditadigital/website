import { UilAngleDown } from "@iconscout/react-unicons";
import NeonButton from "../NeonButton";

export default function DesktopNavbar() {
  return (
    <nav className="font-poppins hidden md:block">
      <ul className="flex items-center h-[100%] font-extralight">
        <li className="pr-10">Sobre Nós</li>
        <li className="flex pr-10">
          <a className="dropdown flex flex-row">
            Criação de Sites <UilAngleDown />
          </a>
          <div className="dropdown-box font-medium text-[13px]">
            <div className="dropdown-space"></div>
            <div className="dropdown-body">
              <a className="dropdown-item first">Site Expresso</a>
              <a className="dropdown-item last">Site Sob Demanda</a>
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
              <a className="dropdown-item unique">Sites</a>
            </div>
          </div>
        </li>
        <li>Contato</li>
      </ul>
    </nav>
  );
}
