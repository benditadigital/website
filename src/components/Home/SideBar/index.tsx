import Mousey from "../../shared/Mousey";
import "./styles.css";

import { FaBehance, FaInstagram } from "react-icons/fa";

function SideBar() {
  return (
    <div className="sidebar text-right pt-[50px] col-span-1 bg-black h-[100%] flex flex-col justify-between items-center">
      <p>Contato</p>
      <Mousey />
      <div className="pb-[50px]">
        <a href="#" target="_blank">
          <FaInstagram size={23} />
        </a>
        <a href="#" target="_blank">
          <FaBehance size={23} className="mt-5" />
        </a>
      </div>
    </div>
  );
}

export default SideBar;
