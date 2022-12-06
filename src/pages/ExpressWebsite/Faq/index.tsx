import "./styles.css";
import { Disclosure, Transition } from "@headlessui/react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import questions from "./questions";
import ClassicButton from "../../../components/shared/ClassicButton";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
} from "react-html-parser";

interface Question {
  title: string;
  description: string;
}

function renderQuestions(questions: Array<Question>, method: string) {
  const half = Math.ceil(questions.length / 2);
  var parsedQuestions = [];
  if (method === "firstHalf") {
    parsedQuestions = questions.slice(0, half);
  } else {
    parsedQuestions = questions.slice(half);
  }

  return parsedQuestions.map((question: Question) => {
    return (
      <div className="mb-1">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-btn p-5 w-[100%] text-start font-medium bg-white disclosureButton flex items-center gap-2">
                {open ? <HiMinusSm size={20} /> : <HiPlusSm size={20} />}
                {question.title}
              </Disclosure.Button>
              <Transition
                enter="transition ease duration-500 transform"
                enterFrom="opacity-0 -translate-y-12"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease duration-300 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-12"
              >
                <Disclosure.Panel className="disclosure-pnl text-black bg-[#F4F4F4] p-5 disclosurePanel">
                  {ReactHtmlParser(question.description)}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    );
  });
}

export default function Faq() {
  return (
    <section className="express-website faq pt-10">
      <div className="container mx-auto max-w-[1180px]">
        <div className="text-center py-[50px]">
          <p className="font-normal text-[15px]">
            Quem conhece indica! Gestão e Criação de Websites.
          </p>
          <h3 className="font-semibold text-[40px]">Clientes e Avaliações</h3>
        </div>
        <div className="grid grid-cols-2 gap-10 pb-[80px]">
          <div className="col-span-2 px-5 md:col-span-1 md:px-0">
            {renderQuestions(questions, "firstHalf")}
          </div>
          <div className="col-span-2 px-5 md:col-span-1 md:px-0">
            {renderQuestions(questions, "secondHalf")}
          </div>
        </div>
        <div className="text-center flex flex-col justify-center items-center pb-[80px]">
          <span className="font-medium text-[20px]">
            Ficou com alguma dúvida?
          </span>
          <ClassicButton
            className="mt-5 variant-top-left"
            title="Fale Conosco no Whatsapp"
          />
        </div>
      </div>
    </section>
  );
}
