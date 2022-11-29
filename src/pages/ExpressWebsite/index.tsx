import TalkToEspecialist from "../../components/Home/TalkToEspecialist";
import WhatsappButton from "../../components/shared/WhatsappButton/WhatsappButton";
import Functionalities from "./Functionalities";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";

export default function ExpressWebsite() {
  return (
    <div>
      <div className="transition-start"></div>
      <Hero />
      <HowItWorks />
      <Functionalities />
      <TalkToEspecialist />
      <WhatsappButton />
    </div>
  );
}
