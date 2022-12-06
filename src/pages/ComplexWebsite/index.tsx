import TalkToEspecialist from "../../components/Home/TalkToEspecialist";
import TalkToUs from "../../components/Home/TalkToUs";
import WhatsappButton from "../../components/shared/WhatsappButton/WhatsappButton";
import Budget from "../ExpressWebsite/Budget";
import Faq from "../ExpressWebsite/Faq";
import Feedbacks from "../ExpressWebsite/Feedbacks";
import Hero from "../_sharedComponents/Hero";
import UnderHero from "./UnderHero";
import "./styles.css";
import WhyChooseUs from "./WhyChooseUs";

import { useRecoilState } from "recoil";
import { currentPath } from "../../App";
import { useEffect } from "react";

export default function ComplexWebsite() {
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
        pretitle={`Somos Especialistas em Criação de Sites`}
        title={`Nós fazemos o
        seu site profissional`}
        description={`Somos uma agência digital especialista em criar
        experiências únicas. Projetamos, desenvolvemos e gerenciamos
        websites de alto valor e impacto que geram leads, vendem produtos
        e contam histórias.`}
      />
      <UnderHero />
      <WhyChooseUs />
      <TalkToEspecialist />
      <WhatsappButton />
      <Feedbacks />
      <Faq />
      <Budget />
      <TalkToUs />
    </div>
  );
}
