import Carousel from "../../components/Carousel";
import AfterPortfolio from "../../components/Home/AfterPortfolio";
import Hero from "../../components/Home/Hero";
import Introduction from "../../components/Home/Introduction";
import LogoFolio from "../../components/Home/LogoFolio";
import Portfolio from "../../components/Home/Portfolio";
import TalkToEspecialist from "../../components/Home/TalkToEspecialist";
import LogoCarousel from "../../components/Home/LogoCarousel";
import TalkToUs from "../../components/Home/TalkToUs";
import WhatsappButton from "../../components/shared/WhatsappButton/WhatsappButton";

export default function Home() {
  return (
    <div>
      <div className="transition-start"></div>
      <Hero />
      <TalkToEspecialist />
      <Introduction />
      <Carousel />
      <Portfolio />
      <AfterPortfolio />
      <LogoFolio />
      <LogoCarousel />
      <TalkToUs />
      <WhatsappButton />
    </div>
  );
}
