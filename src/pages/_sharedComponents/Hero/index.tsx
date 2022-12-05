import { RiArrowRightSLine } from "react-icons/ri";
import alternativaLogo from "../../../assets/img/home/alternativa1.png";
import ClassicButton from "../../../components/shared/ClassicButton";

import "./styles.css";

interface HeroProps {
  pretitle: string;
  title: string;
  description: string;
}

export default function Hero(props: HeroProps) {
  return (
    <section className="text-white express-website-hero font-poppins">
      <div className="container py-[150px] min-h-[600px] max-w-[1180px] mx-auto">
        <div className="grid grid-cols-2 flex justify-center items-center">
          <div>
            <h5 className="text-[15px]">👋 {props.pretitle}</h5>
            <h3 className="text-[55px] font-semibold leading-none">
              {props.title}
            </h3>
            <p className="font-light text-[16px] my-8">{props.description}</p>
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
