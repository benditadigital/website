import NeonButton from "../../shared/NeonButton";
import SideBar from "../SideBar";
import "./styles.css";
import { motion } from "framer-motion";

import { FaBehance, FaInstagram } from "react-icons/fa";

import horizontalLogo from "../../../assets/img/shared/horizontal.png";
import { InView, useInView } from "react-intersection-observer";

function TalkToUs() {
  const { ref, inView, entry } = useInView();

  console.log(entry);

  return (
    <div className="talk-to-us grid grid-cols-12 font-poppins text-white bg-black">
      <SideBar bg="black" color="white" />
      <div className="col-span-11 grid grid-cols-12 pb-[45px] ">
        <div className="col-span-1"></div>
        <div ref={ref} className="relative col-span-10">
          <svg
            className="rotate font-light text-white"
            viewBox="0 0 100 100"
            width="300"
            height="300"
          >
            <defs>
              <path
                id="circle"
                d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text font-size="5.8" className="caption">
              <textPath href="#circle" startOffset="0%">
                ⊛ Desenvolvimento Web ⊛ Social Media ⊛ Identidade Visual ⊛
                Marketing Digital
              </textPath>
            </text>
          </svg>
          <InView threshold={0.25}>
            {({ ref, inView, entry }) => {
              return (
                <motion.h2
                  ref={ref}
                  className="text-[64px] leading-none font-semibold mb-5"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Fale
                  <br />
                  Conosco
                </motion.h2>
              );
            }}
          </InView>

          <div className="font-extralight text-[16x]">
            Temos especialistas em desenvolvimento, design e marketing prontos
            <br /> para atender a sua demanda, preencha o formulário e entramos
            em contato o mais breve possível!
          </div>

          <div className="text-center mt-[60px]">
            <NeonButton title="Fale Conosco" className="py-3" />
          </div>

          <div className="relative bg-[#4a15bd] p-10 mt-10 flex items-center justify-between">
            <div className="flex gap-5 items-center">
              <img
                src={horizontalLogo}
                width="250px"
                className="logo self-center"
              />
              <span className="text-[14px] font-extralight">
                © 2022 Agência Bendita Digital
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <a href="#" target="_blank">
                <FaInstagram size={23} />
              </a>
              <a href="#" target="_blank">
                <FaBehance size={23} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default TalkToUs;
