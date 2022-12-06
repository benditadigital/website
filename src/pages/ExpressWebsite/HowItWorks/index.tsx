import "./styles.css";

import icon01 from "../../../assets/img/expresswebsite/icon01.png";
import icon02 from "../../../assets/img/expresswebsite/icon02.png";
import icon03 from "../../../assets/img/expresswebsite/icon03.png";

import icon04 from "../../../assets/img/expresswebsite/_1.png";
import icon05 from "../../../assets/img/expresswebsite/_6.png";
import icon06 from "../../../assets/img/expresswebsite/_2.png";
import icon09 from "../../../assets/img/expresswebsite/_9.png";

import logo from "../../../assets/img/expresswebsite/logo.png";

export default function HowItWorks() {
  return (
    <section className="express-website how-it-works font-poppins py-10">
      <div className="container max-w-[1180px] mx-auto mb-10">
        <div className="text-center py-10">
          <h5 className="text-[15px] font-normal mb-3">
            Site barato, rápido e profissional!
          </h5>
          <h3 className="text-[40px] font-semibold">Como Funciona?</h3>
          <p className="text-[15px] px-10 font-light">
            Nosso Site Expresso é um website totalmente criado em formato
            OnePage, onde todas as informações, textos e imagens são
            estrategicamente posicionados ao longo da mesma página. Esse método
            de criação é tão moderno e confiável que este site foi construído
            desta maneira.
          </p>
        </div>

        <div className="intro grid grid-cols-3 pb-10">
          <div className="flex flex-col col-span-3 my-10 md:col-span-1 items-center text-center">
            <img src={icon01} className="max-h-[80px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Design e<br /> Conteúdo
            </h4>
            <p className="text-[15px] font-light px-10">
              Primeiramente vamos definir o conteúdo do seu site e criar um
              design único, para te destacar entre seus concorrentes!
            </p>
          </div>
          <div className="flex flex-col col-span-3 my-10 md:col-span-1 items-center text-center">
            <img src={icon02} className="max-h-[80px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Protótipo e<br /> Desenvolvimento
            </h4>
            <p className="text-[15px] font-light px-10">
              Vamos desenvolver o seu website utilizando as tecnologias mais
              modernas do mercado. Garantindo rapidez e segurança!
            </p>
          </div>
          <div className="flex flex-col col-span-3 my-10 md:col-span-1 items-center text-center">
            <img src={icon03} className="max-h-[80px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Lançamento e<br /> Manutenção
            </h4>
            <p className="text-[15px] font-light px-10">
              Após aprovado, seu website estará online 24 horas por dia, 7 dias
              por semana, coberto pelo nosso time de manutenção e segurança.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-10 px-10 flex justify-center items-center">
          <div className="col-span-2 md:col-span-1">
            <h5>Manter o seu site rápido e seguro é nossa prioridade!</h5>
            <h4 className="text-[35px] font-semibold">Manutenção e Suporte</h4>
            <div className="grid grid-cols-12 my-5 items-center">
              <div className="col-span-3">
                <img src={icon04} className="px-3 md:px-10" />
              </div>
              <div className="col-span-9">
                <h4 className="font-semibold text-[20px]">
                  Otimização de Performance
                </h4>
                <p>
                  Trabalhamos para criar uma infraestrutura focada em garantir
                  desempenho e performance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 my-5 items-center">
              <div className="col-span-3">
                <img src={icon05} className="px-3 md:px-10" />
              </div>
              <div className="col-span-8">
                <h4 className="font-semibold text-[20px]">
                  Manutenção e Cuidados{" "}
                </h4>
                <p>
                  Para manter o seu site em perfeito funcionamento, temos uma
                  rotina mensal de manutenção onde otimizamos recursos e fazemos
                  ajustes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 my-5 items-center">
              <div className="col-span-3">
                <img src={icon06} className="px-3 md:px-10" />
              </div>
              <div className="col-span-8">
                <h4 className="font-semibold text-[20px]">
                  Atendimento e Suporte
                </h4>
                <p>
                  Para atender a todas as suas demandas, oferecemos atendimento
                  exclusivo via e-mail, telefone, chat online e Whastapp!
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-center items-center">
            <img src={logo} className="w-[100%] md:w-[480px]" />
          </div>
        </div>

        <div className="px-10 grid grid-cols-3 flex items-start gap-10 pt-10 mt-10">
          <div className="min-h-[100px] col-span-3 md:col-span-1 grid grid-cols-12 items-center text-center">
            <img src={icon09} className="col-span-3 px-5 " />
            <div className="col-span-9 text-left">
              <h4 className="text-[20px] font-semibold leading-tight">
                Tudo Incluso
              </h4>
              <p className="text-[15px] font-light">
                Registramos o seu domínio de escolha e hospedamos o seu site em
                nossos servidores.
              </p>
            </div>
          </div>
          <div className="min-h-[100px] col-span-3 md:col-span-1 grid grid-cols-12 items-center text-center">
            <img src={icon09} className="col-span-3 px-5" />
            <div className="col-span-9 text-left">
              <h4 className="text-[20px] font-semibold leading-tight">
                Design Exclusivo
              </h4>
              <p className="text-[15px] font-light">
                Nada de modelos prontos, nós fazemos o seu site totalmente do
                ZERO!
              </p>
            </div>
          </div>
          <div className="min-h-[100px] col-span-3 md:col-span-1 grid grid-cols-12 items-center text-center">
            <img src={icon09} className="col-span-3 px-5" />
            <div className="col-span-9 text-left">
              <h4 className="text-[20px] font-semibold leading-tight">
                Velocidade & Segurança
              </h4>
              <p className="text-[15px] font-light">
                Hospedado na Bendita, seu site estará pronto para chegar ao topo
                do mercado!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
