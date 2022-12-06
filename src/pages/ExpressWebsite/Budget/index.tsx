import cards from "./cards";
import "./styles.css";

import { BsCheck } from "react-icons/bs";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
} from "react-html-parser";
import ClassicButton from "../../../components/shared/ClassicButton";
import TalkToUs from "../../../components/Home/TalkToUs";

interface Card {
  type: string;
  icon: string;
  title: string;
  heading: string;
  subtitle: string;
  traits: Array<string>;
  footerMsg: string;
}

function renderCards(cards: Array<Card>) {
  function renderTraits(traits: Array<string>) {
    if (traits)
      return traits.map((trait: string) => (
        <div className="traits__trait font-light my-3">
          <BsCheck size={30} color="#4a15bd" className="inline" />
          {trait}
        </div>
      ));
  }

  if (cards)
    return cards.map((card: Card) => {
      return (
        <div className="card text-white col-span-2 md:col-span-1">
          <div className="card__classification">
            <small>{card.type}</small>
          </div>
          <div className="card__header py-10 gap-2">
            <div className="header__icon">
              <img src={card.icon} />
            </div>
            <h6 className="header__title font-semibold text-[18px]">
              {card.title}
            </h6>
            <p className="header__subtitle text-[16px] font-light">
              {card.subtitle}
            </p>
          </div>
          <div className="card__heading py-[35px] px-10">
            {ReactHtmlParser(card.heading)}
          </div>
          <div className="card__traits px-10 my-[60px]">
            {renderTraits(card.traits)}
          </div>
          <div className="card_footer text-center bg-[#efefef] py-10">
            <a
              href="https://wa.me/+5561981466888"
              target="_blank"
              className="bg-[var(--benditaPurple)]
              font-bold text-white
              hover:text-[var(--benditaPurple)]
              hover:bg-white py-3 px-5
              rounded-3xl"
            >
              Peça um Orçamento
            </a>
            <br />
            <br />
            <p className="text-[#9a9a9a]">{card.footerMsg}</p>
          </div>
        </div>
      );
    });
}

export default function Budget() {
  return (
    <section className="budget">
      <div className="container mx-auto max-w-[1180px] py-[50px] px-10">
        <p className="text-[15px] pt-[25px] text-white text-center">
          Preços e Orçamentos
        </p>
        <h4 className="text-[45px] pt-[5px] pb-[55px] text-white text-center font-semibold">
          Contrate um Site Profissional!
        </h4>
        <div className="grid grid-cols-2 gap-10">{renderCards(cards)}</div>
        <div className="pt-[50px] pb-[100px] text-center text-white">
          <p>E aí, vamo fechar? 😉</p>
          <div className="flex mt-5 justify-center">
            <ClassicButton
              title="Solicite um Orçamento"
              className="variant-top-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
