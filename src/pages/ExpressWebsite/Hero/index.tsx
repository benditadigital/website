import { RiArrowRightSLine } from "react-icons/ri";
import alternativaLogo from "../../../assets/img/home/alternativa1.png";
import ClassicButton from "../../../components/shared/ClassicButton";

import "./styles.css";

export default function Hero() {
  return (
    <section className="text-white express-website-hero font-poppins">
      <div className="container py-[150px] min-h-[600px] max-w-[1180px] mx-auto">
        <div className="grid grid-cols-2 flex justify-center items-center">
          <div>
            <h5 className="text-[15px]">
              👋 Nós viemos estabelecer sua pequena/média empresa no mercado
              digital!
            </h5>
            <h3 className="text-[60px] font-semibold leading-none">
              Criamos o seu site em até 5 dias!
            </h3>
            <p className="font-light text-[16px] my-8">
              Somos uma agência digital especialista em criar experiências
              únicas, e o nosso website por assinatura é a solução fácil, rápida
              e econômica de ter um site desenhado e desenvolvido por
              especialistas.
            </p>
            <ClassicButton
              title="Solicite um Orçamento"
              icon={<RiArrowRightSLine size={23} />}
              className="variant-bottom-left"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={alternativaLogo}
              height={"100%"}
              className="max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
