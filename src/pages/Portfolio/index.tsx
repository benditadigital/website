import heartEmoji from "../../assets/img/home/heartEmoji.svg";

import image01 from "../../assets/img/portfolio/01.jpg";
import image02 from "../../assets/img/portfolio/02.jpg";
import image03 from "../../assets/img/portfolio/03.jpg";
import image04 from "../../assets/img/portfolio/04.jpg";
import image05 from "../../assets/img/portfolio/05.jpg";
import image06 from "../../assets/img/portfolio/06.jpg";
import image07 from "../../assets/img/portfolio/07.jpg";
import image08 from "../../assets/img/portfolio/08.jpg";
import TalkToUs from "../../components/Home/TalkToUs";

import "./styles.css";

export default function Portfolio() {
  return (
    <div className="portfolio-page font-poppins">
      <div className="transition-start"></div>
      <div className="grid grid-cols-2 py-10 my-10 justify-center items-center gap-10 text-white">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-[41px] md:pr-10 font-medium flex gap-4 text-center md:text-right justify-center md:justify-end">
            Deu
            <strong className="font-bold">
              {" "}
              <em>Match!</em>
            </strong>
            <img src={heartEmoji} width={41} />
          </h2>
        </div>
        <div className="text-[19px] px-5 text-center md:text-left font-normal col-span-2 md:col-span-1">
          Websites desenvolvidos por nós, com muito amor!
        </div>
      </div>
      <div className="px-5 portfolio-imgs container max-w-[1024px] mx-auto justify-center items-center text-white">
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2 md:col-span-1">
            <a target="_blank" href="https://www.sykedigital.com.br/">
              <img src={image01} width="100%" />
            </a>
          </div>
          <div className="col-span-2 md:col-span-1">
            <a target="_blank" href="https://www.agenciacalliope.com/">
              <img src={image02} width="100%" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 my-5">
          <div className="col-span-2 md:col-span-1">
            <a target="_blank" href="https://bendita.digital/beatclass/">
              <img src={image03} width="100%" />
            </a>
          </div>
          <div className="col-span-2 md:col-span-1">
            <a target="_blank" href="https://www.voltecengenharia.com/">
              <img src={image04} width="100%" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 my-5">
          <div className="col-span-2 md:col-span-1">
            <a target="_blank" href="http://m1.bendita.digital/">
              <img src={image05} width="100%" />
            </a>
          </div>
          <div className="col-span-2 md:col-span-1">
            <a target="_blank" href="https://www.eliasdearaujo.com/">
              <img src={image06} width="100%" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 my-5">
          <div className="col-span-2 md:col-span-1">
            <a target="_blank" href="https://www.grupomirad.com/">
              <img src={image07} width="100%" />
            </a>
          </div>
          <div className="col-span-2 md:col-span-1">
            <a target="_blank" href="https://www.heloterio.com.br/">
              <img src={image08} width="100%" />
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center max-w-[1024px] flex flex-col mx-auto justify-center items-center text-white mb-[125px]">
        <h3 className="text-[32px] px-5 font-semibold my-10">
          Somos apaixonados pela arte!
        </h3>
        <div className="text-[16px] font-light px-8 max-w-[665px] text-justify">
          Para nós, arte é toda a subjetividade que podemos extrair da atividade
          humana. Arte é o nascer e o pôr do sol. Arte é uma música, um texto e
          uma imagem. Arte é tudo o que a gente significa como arte, e para nós
          é o que fazemos diariamente. Bendito seja o fruto da arte!
        </div>
      </div>
      <TalkToUs />
    </div>
  );
}
