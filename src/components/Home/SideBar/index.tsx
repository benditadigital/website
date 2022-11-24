import Mousey from "../../shared/Mousey";
import "./styles.css";

import { FaBehance, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

interface SideBarProps {
  bg: string;
  color: string;
}

function SideBar(props: SideBarProps) {
  var sidebarClassName = `hidden md:flex sidebar font-extralight font-poppins text-right pt-[60px] col-span-1 h-[100%] flex-col justify-between items-center bg-${props.bg} text-${props.color} sidebar-${props.color}`;

  return (
    <div className={sidebarClassName}>
      <InView threshold={0.25}>
        {({ ref, inView }) => (
          <motion.p
            ref={ref}
            className={`text-${props.color} contact`}
            initial={{ opacity: 0, marginTop: "-55px" }}
            animate={inView ? { opacity: 1, marginTop: "0px" } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Contato
          </motion.p>
        )}
      </InView>
      <Mousey />
      <InView threshold={0.25}>
        {({ ref, inView }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            animate={
              inView
                ? { opacity: 1, transform: "translateY(0px)" }
                : { opacity: 0 }
            }
            transition={{ duration: 1 }}
            className={`text-${props.color} pb-[80px]`}
          >
            <a href="#" target="_blank">
              <FaInstagram size={23} />
            </a>
            <a href="#" target="_blank">
              <FaBehance size={23} className="mt-5" />
            </a>
          </motion.div>
        )}
      </InView>
    </div>
  );
}

export default SideBar;
