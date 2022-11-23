import SideBar from "../SideBar";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-parallax";

export default function Introduction() {
  function calculateTranslateY(percentage) {
    //[0, 1]
    //[-35, 35]
    if (percentage <= 1) {
      return (
        (-35 * (1 - percentage) + 35 * percentage).toFixed(2).toString() + "px"
      );
    }
  }

  return (
    <div className="relative grid grid-cols-12 gap-10 font-poppins font-extralight h-[800px] text-white bg-black justify-center items-center">
      <SideBar bg="white" color="white" />
      <div className="text-right pr-5 col-span-5 flex flex-col">
        <Parallax
          renderLayer={(percentage) => {
            var translate = calculateTranslateY(percentage);
            return (
              <div
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
              </div>
            );
          }}
        ></Parallax>
      </div>
      <div className="pr-[250px] col-span-6 font-extralight text-[16x]">
        Somos uma agência digital de origem brasileira especializada em criar
        experiências únicas que deixam os nossos clientes tão apaixonados quanto
        nós por aquilo que fazemos.
        <br />
        <br />
        Somos experts em desenvolvimento web, criação de websites, landing
        pages, lojas virtuais e designs para projetos de alto impacto.
        <br />
        <br />
        Trabalhamos globalmente com o apoio de clientes em quatro países. Todos
        os dias trabalhamos para que as pessoas e as empresas otimizem os seus
        negócios. Nossa visão foca em fazer a diferença em cada projeto como
        resultado de uma estratégia de sucesso, de acordo com as tendências
        atuais do mercado.
      </div>
    </div>
  );
}
