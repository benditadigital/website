import { UilAngleDown } from "@iconscout/react-unicons";
import alternativaLogo from "../../../assets/img/home/alternativa1.png";
import heartEmoji from "../../../assets/img/home/heartEmoji.svg";
import "./styles.css";

export default function Hero() {
  return (
    <div className="relative grid grid-cols-5 font-poppins font-extralight text-white">
      <div className="hero min-h-[800px] relative col-span-5 md:col-span-2 bg-[#4A15BD] flex justify-center ">
        <img
          src={alternativaLogo}
          className="self-center w-[250px] md:w-[272px]"
        />
        <span>Marketing Digital</span>
        <span className="mr-[-110px] md:mr-[-70px]">
          Estratégia e Planejamento
        </span>
        <span className="ml-[-150px] md:ml-[-120px]">
          Design e Desenvolvimento criativo
        </span>
        <span className="font-semibold">Bendito seja o fruto da arte.</span>
      </div>
      <div className="p-5 md:p-[104px] text-black col-span-5 md:col-span-3 min-h-[910px] bg-[#EAEAEA] relative">
        <svg
          className="rotate font-light hidden md:block"
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

        <h3 className="text-black text-[26px]  font-normal mt-[80px] flex gap-2 justify-center md:justify-start">
          <img src={heartEmoji} width={26} />
          Somos a <span className="font-bold">revolução</span>
        </h3>
        <h3 className="text-black text-[26px] text-center md:text-start font-normal">
          <span className="font-bold">digital</span> do seu negócio!
        </h3>
        <h1 className="font-bold text-[80px] text-center md:text-start md:text-[101px] leading-none">
          agência <br /> bendita
        </h1>
        <div className="mt-[56px] text-black font-light gap-4 md:gap-6 relative grid grid-cols-2 font-poppins font-extralight text-white">
          <div className="col-span-2 md:col-span-1 text-center md:text-start">
            Prazer, bendita! <br />
            Somos uma agência digital de
            <br className="hidden md:block" /> origem brasileira, focada em
            desenvolvimento web e<br className="hidden md:block" /> gestão de
            mídias sociais para projetos de grande
            <br className="hidden md:block" /> impacto, seja você autônomo,
            pequena ou grande
            <br className="hidden md:block" /> empresa.
            <br />
            <br />
            Somos referência global! 🇧🇷 🇵🇹 🇦🇴 🇲🇿{" "}
          </div>
          <div className="col-span-2 md:col-span-1 text-center md:text-start">
            Atuamos globalmente com o apoio de clientes em 4 países. <br />
            <br className="hidden md:block" /> Todos os dias trabalhamos para
            que as pessoas e as empresas otimizem os seus negócios.
            <br />
            <br /> É a nossa paixão, não um trabalho.
          </div>
        </div>
        <a
          href="#about_us"
          className="home-button text-[19px] mt-5 w-[150px] p-3 flex justify-center align-center gap-1 mx-auto"
        >
          Explorar <UilAngleDown />
        </a>
      </div>
    </div>
  );
}
