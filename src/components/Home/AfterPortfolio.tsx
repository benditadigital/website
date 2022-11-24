import { motion } from "framer-motion";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import { Parallax } from "react-parallax";
import heartEmoji from "../../assets/img/home/heartEmoji.svg";
import { calculateTranslateY } from "../../utils/parallax";

function AfterPortfolio() {
  return (
    <div className="relative grid grid-cols-2 gap-10 font-poppins font-extralight h-[300px] text-white bg-black justify-center items-center">
      <div className="col-span-2 md:col-span-1 mt-10 md:my-0 pr-5">
        <Parallax
          renderLayer={(percentage) => {
            var translate = calculateTranslateY(percentage, -1);
            return (
              <InView threshold={0.15}>
                {({ ref, inView }) => (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      transform: `translateY(${translate})`,
                      transition: "150ms",
                    }}
                  >
                    <h2 className="text-[41px] font-medium flex gap-4 text-center md:text-right justify-center md:justify-end">
                      Deu
                      <strong className="font-bold">
                        {" "}
                        <em>Match!</em>
                      </strong>
                      <img src={heartEmoji} width={41} />
                    </h2>
                  </motion.div>
                )}
              </InView>
            );
          }}
        ></Parallax>
      </div>
      <div className="col-span-2 md:col-span-1 md:pr-10 lg:pr-[250px] text-center md:text-left font-extralight text-[16x]">
        <Parallax
          renderLayer={(percentage) => {
            var translate = calculateTranslateY(percentage, 1);
            return (
              <InView threshold={0.15}>
                {({ ref, inView }) => (
                  <motion.p
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      transform: `translateY(${translate})`,
                      transition: "150ms",
                    }}
                  >
                    Mais que logotipos: bom relacionamento e compromisso com
                    nossos clientes.
                    <br />
                    Atuamos em nível estratégico; menos jobs e mais relações de
                    longo prazo.
                  </motion.p>
                )}
              </InView>
            );
          }}
        ></Parallax>
      </div>
    </div>
  );
}

export default AfterPortfolio;
