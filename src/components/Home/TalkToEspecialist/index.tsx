import { FaArrowRight } from "react-icons/fa";
import NeonButton from "../../shared/NeonButton";

export default function TalkToEspecialist() {
  return (
    <div className="relative grid grid-cols-5 font-poppins font-extralight min-h-[175px] text-white receba fix-zindex">
      <div className="overlay"></div>
      <div className="col-span-5 md:col-span-3 my-5 md:m-0 text-center md:text-start flex justify-center flex-col items-center">
        <div>
          <h3 className="font-bold m-5 md:m-0 text-3xl">
            Receba seu orçamento em minutos!
          </h3>
          <p>
            Sem enrolação, sem burocracia, vem falar direto com um especialista!
            😉
          </p>
        </div>
      </div>
      <div className="my-5 md:my-0 col-span-5 md:col-span-1 flex justify-center md:justify-end items-center">
        <NeonButton
          className="py-7"
          title="Falar com um Especialista"
          icon={<FaArrowRight />}
        />
      </div>
    </div>
  );
}
