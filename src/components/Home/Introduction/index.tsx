import SideBar from "../SideBar";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import { Parallax } from "react-parallax";
import { calculateTranslateY } from "../../../utils/parallax";

export default function Introduction() {
  return (
    <div className="relative grid grid-cols-12 gap-10 font-poppins font-extralight h-[800px] text-white bg-black justify-center items-center">
      <SideBar bg="white" color="white" />
      <div
        className="text-right pr-5 col-span-5 flex flex-col"
        style={{ overflow: "visible" }}
      >
        <Parallax
          renderLayer={(percentage) => {
            var translate = calculateTranslateY(percentage, -1);
            return (
              <InView threshold={0.25}>
                {({ ref, inView }) => (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      transform: `translateY(${translate})`,
                      transition: "100ms",
                    }}
                  >
                    <h3 className="text-[16x]">Prazer, bendita. 👋</h3>
                    <h2 className="text-[41px] font-medium">
                      Criamos
                      <br />
                      <strong className="font-bold">
                        <em>experiências únicas!</em>
                      </strong>
                    </h2>
                  </motion.div>
                )}
              </InView>
            );
          }}
        ></Parallax>
      </div>
      <div className="pr-[250px] col-span-6 font-extralight text-[16x]">
        <Parallax
          renderLayer={(percentage) => {
            var translate = calculateTranslateY(percentage);
            return (
              <InView threshold={0.25}>
                {({ ref, inView }) => (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      transform: `translateY(${translate})`,
                      transition: "100ms",
                    }}
                  >
                    Somos uma agência digital de origem brasileira especializada
                    em criar experiências únicas que deixam os nossos clientes
                    tão apaixonados quanto nós por aquilo que fazemos.
                    <br />
                    <br />
                    Somos experts em desenvolvimento web, criação de websites,
                    landing pages, lojas virtuais e designs para projetos de
                    alto impacto.
                    <br />
                    <br />
                    Trabalhamos globalmente com o apoio de clientes em quatro
                    países. Todos os dias trabalhamos para que as pessoas e as
                    empresas otimizem os seus negócios. Nossa visão foca em
                    fazer a diferença em cada projeto como resultado de uma
                    estratégia de sucesso, de acordo com as tendências atuais do
                    mercado.
                  </motion.div>
                )}
              </InView>
            );
          }}
        ></Parallax>
      </div>
    </div>
  );
}
