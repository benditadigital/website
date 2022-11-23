import Mousey from "../../shared/Mousey";
import "./styles.css";

import { FaBehance, FaInstagram } from "react-icons/fa";

interface SideBarProps {
  bg: string;
  color: string;
}

function SideBar(props: SideBarProps) {
  var sidebarClassName = `sidebar font-extralight font-poppins text-right pt-[60px] col-span-1 h-[100%] flex flex-col justify-between items-center bg-${props.bg} text-${props.color} sidebar-${props.color}`;

  return (
    <div className={sidebarClassName}>
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
