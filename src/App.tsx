import "./components/Home/Hero/styles.css";

/* Custom Components */
import Navbar from "./components/shared/Navbar";
import Carousel from "./components/Carousel";
import Portfolio from "./components/Home/Portfolio";
import AfterPortfolio from "./components/Home/AfterPortfolio";
import LogoFolio from "./components/Home/LogoFolio";
import LogoCarousel from "./components/Home/LogoCarousel";
import TalkToUs from "./components/Home/TalkToUs";
import WhatsappButton from "./components/shared/WhatsappButton/WhatsappButton";
import Introduction from "./components/Home/Introduction";
import Hero from "./components/Home/Hero";
import TalkToEspecialist from "./components/Home/TalkToEspecialist";

function App() {
  return (
    <div className="App">
      <div className="transition-start"></div>
      <Navbar />
      <Hero />
      <div className="fix-zindex">
        <TalkToEspecialist />
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
