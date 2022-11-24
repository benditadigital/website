import { useEffect, useState } from "react";
import Navbar from "./components/shared/Navbar/Navbar";

import alternativaLogo from "./assets/img/home/alternativa1.png";
import { UilAngleDown } from "@iconscout/react-unicons";
import "./components/Home/Hero/styles.css";

import heartEmoji from "./assets/img/home/heartEmoji.svg";
import NeonButton from "./components/shared/NeonButton";

import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Carousel from "./components/Carousel";
import Portfolio from "./components/Home/Portfolio";
import AfterPortfolio from "./components/Home/AfterPortfolio";
import LogoFolio from "./components/Home/LogoFolio";
import LogoCarousel from "./components/Home/LogoCarousel";
import TalkToUs from "./components/Home/TalkToUs";
import Mousey from "./components/shared/Mousey";
import SideBar from "./components/Home/SideBar";
import WhatsappButton from "./components/shared/WhatsappButton/WhatsappButton";
import Introduction from "./components/Home/Introduction";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <div className="transition-start"></div>
      <Navbar />
      <div className="navbarOffset h-[72px] bg-[#ccc]"></div>

      <div className="relative grid grid-cols-5 font-poppins font-extralight text-white">
        <div className="hero relative col-span-2 bg-[#4A15BD] flex justify-center ">
          <img src={alternativaLogo} width="272px" className="self-center" />
          <span>Marketing Digital</span>
          <span>Estratégia e Planejamento</span>
          <span>Design e Desenvolvimento criativo</span>
          <span className="font-semibold">
            <motion.div>Bendito seja o fruto da arte.</motion.div>
          </span>
        </div>
        <div className="p-[104px] text-black col-span-3 h-[910px] bg-[#EAEAEA] relative">
          <svg
            className="rotate font-light"
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
            <text font-size="5.8">
              <textPath href="#circle" startOffset="0%">
                ⊛ Desenvolvimento Web ⊛ Social Media ⊛ Identidade Visual ⊛
                Marketing Digital
              </textPath>
            </text>
          </svg>

          <h3 className="text-black text-[26px] font-normal mt-[80px] flex gap-2">
            <img src={heartEmoji} width={26} />
            Somos a <span className="font-bold">revolução</span>
          </h3>
          <h3 className="text-black text-[26px] font-normal">
            <span className="font-bold">digital</span> do seu negócio!
          </h3>
          <h1 className="font-bold text-[101px] leading-none">
            agência <br /> bendita
          </h1>
          <div className="mt-[56px] text-black font-light gap-6 relative grid grid-cols-2 font-poppins font-extralight text-white">
            <div>
              Prazer, bendita! Somos uma agência digital de
              <br /> origem brasileira, focada em desenvolvimento web e<br />{" "}
              gestão de mídias sociais para projetos de grande
              <br /> impacto, seja você autônomo, pequena ou grande
              <br /> empresa.
              <br />
              <br />
              Somos referência global! 🇧🇷 🇵🇹 🇦🇴 🇲🇿{" "}
            </div>
            <div>
              Atuamos globalmente com o apoio de clientes em 4 países. <br />
              <br /> Todos os dias trabalhamos para que as pessoas e as empresas
              otimizem os seus negócios.
              <br />
              <br /> É a nossa paixão, não um trabalho.
            </div>
            <button className="home-button text-[19px] w-[150px] p-3 flex justify-center align-center gap-1">
              Explorar <UilAngleDown />
            </button>
          </div>
        </div>
      </div>

      <div className="fix-zindex">
        <div className="relative grid grid-cols-5 font-poppins font-extralight h-[175px] text-white receba">
          <div className="overlay"></div>
          <div className="col-span-3 flex justify-center flex-col items-center">
            <div>
              <h3 className="font-bold text-3xl">
                Receba seu orçamento em minutos!
              </h3>
              <p>
                Sem enrolação, sem burocracia, vem falar direto com um
                especialista! 😉
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <NeonButton
              className="py-7"
              title="Falar com um Especialista"
              icon={<FaArrowRight />}
            />
          </div>
        </div>

        <Introduction />
        <Carousel />

        <Portfolio />
      </div>
      <AfterPortfolio />
      <LogoFolio />
      <LogoCarousel />
      <TalkToUs />
      <WhatsappButton />
    </div>
  );
}

export default App;
