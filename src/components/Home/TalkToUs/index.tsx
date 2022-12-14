import NeonButton from "../../shared/NeonButton";
import SideBar from "../SideBar";
import "./styles.css";
import { motion } from "framer-motion";

import { FaBehance, FaInstagram } from "react-icons/fa";

import horizontalLogo from "../../../assets/img/shared/horizontal.png";
import { InView, useInView } from "react-intersection-observer";
import { calculateTranslateY } from "../../../utils/parallax";
import { Parallax } from "react-parallax";

function TalkToUs() {
  const { ref, inView, entry } = useInView();

  return (
    <div
      id="talk_to_us"
      className="talk-to-us grid grid-cols-12 font-poppins text-white bg-black"
    >
      <SideBar bg="black" color="white" />
      <div className="col-span-12 lg:col-span-10 grid grid-cols-12 pb-[45px] ">
        <div className="hidden md:flex md:col-span-1"></div>

        <div ref={ref} className="relative col-span-12">
          <svg
            className="hidden lg:block rotate font-light text-white"
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
          <Parallax
            renderLayer={(percentage) => {
              var translate = calculateTranslateY(percentage, 1);

              return (
                <InView threshold={0.25}>
                  {({ ref, inView }) => {
                    return (
                      <motion.h2
                        ref={ref}
                        className="px-10 md:px-0 text-[64px] leading-none font-semibold mb-5"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                          transform: `translateX(${translate})`,
                          transition: "100ms",
                        }}
                      >
                        Fale
                        <br />
                        Conosco
                      </motion.h2>
                    );
                  }}
                </InView>
              );
            }}
          ></Parallax>

          <Parallax
            renderLayer={(percentage) => {
              var translate = calculateTranslateY(percentage, -1);
              return (
                <InView threshold={0.25}>
                  {({ ref, inView }) => {
                    return (
                      <motion.div
                        ref={ref}
                        className="px-10 md:px-0 font-extralight text-[16x]"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                          transform: `translateX(${translate})`,
                          transition: "100ms",
                        }}
                      >
                        Temos especialistas em desenvolvimento, design e
                        marketing prontos
                        <br /> para atender a sua demanda, preencha o formulário
                        e entramos em contato o mais breve possível!
                      </motion.div>
                    );
                  }}
                </InView>
              );
            }}
          ></Parallax>

          <div className="text-center mt-[60px] flex items-center justify-center">
            <NeonButton title="Fale Conosco" className="py-3" />
          </div>

          <div className="relative bg-[#4a15bd] p-10 mt-10 grid grid-cols-12 justify-between">
            <div className="col-span-8 lg:col-span-6 flex flex-col lg:flex-row gap-5 items-center">
              <img
                src={horizontalLogo}
                width="250px"
                className="logo self-center"
              />
              <span className="text-[14px] font-extralight">
                © 2022 Agência Bendita Digital
              </span>
            </div>
            <div className="col-span-4 lg:col-span-6 flex gap-5 items-center justify-end">
              <a
                href="https://www.instagram.com/bendita.digital/"
                target="_blank"
              >
                <FaInstagram size={23} />
              </a>
              <a href="https://www.behance.net/bendita" target="_blank">
                <FaBehance size={23} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:col-span-1"></div>
    </div>
  );
}

export default TalkToUs;
