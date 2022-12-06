import TalkToEspecialist from "../../components/Home/TalkToEspecialist";
import TalkToUs from "../../components/Home/TalkToUs";
import WhatsappButton from "../../components/shared/WhatsappButton/WhatsappButton";
import Budget from "./Budget";
import Faq from "./Faq";
import Feedbacks from "./Feedbacks";
import Functionalities from "./Functionalities";
import Hero from "../_sharedComponents/Hero";
import HowItWorks from "./HowItWorks";

import { useRecoilState } from "recoil";
import { currentPath } from "../../App";
import { useEffect } from "react";

export default function ExpressWebsite() {
  const [websiteCurrentPath, setWebsiteCurrentPath] =
    useRecoilState(currentPath);

  useEffect(() => {
    setWebsiteCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="transition-start"></div>
      <Hero
        pretitle={`Nós viemos estabelecer sua pequena/média empresa no mercado digital!`}
        title={`Criamos o seu site em até 5 dias!`}
        description={`Somos uma agência digital especialista em criar experiências
        únicas, e o nosso website por assinatura é a solução fácil, rápida
        e econômica de ter um site desenhado e desenvolvido por
        especialistas.`}
      />
      <HowItWorks />
      <Functionalities />
      <TalkToEspecialist />
      <WhatsappButton />
      <Feedbacks />
      <Faq />
      <Budget />
      <TalkToUs />
    </div>
  );
}
