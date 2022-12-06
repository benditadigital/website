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

import { useRecoilState } from "recoil";
import { currentPath } from "../../App";
import { useEffect } from "react";

export default function Home() {
  const [websiteCurrentPath, setWebsiteCurrentPath] =
    useRecoilState(currentPath);

  useEffect(() => {
    setWebsiteCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
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
