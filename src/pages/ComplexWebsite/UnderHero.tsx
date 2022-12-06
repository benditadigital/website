import website from "./assets/img/website.png";
import preferences from "./assets/img/preferences.png";
import diamond from "./assets/img/diamond.png";

export default function UnderHero() {
  return (
    <section className="complex-website how-it-works font-poppins py-10">
      <div className="container max-w-[1180px] mx-auto mb-[50px]">
        <div className="text-center py-10">
          <h5 className="text-[15px] font-normal mb-3">
            Criação e Desenvolvimento de Sites Profissionais
          </h5>
          <h3 className="text-[40px] font-semibold">Como Funciona?</h3>
        </div>

        <div className="intro grid grid-cols-3 pb-10">
          <div className="flex flex-col col-span-3 md:col-span-1 my-8 items-center text-center">
            <img src={website} className="max-h-[80px] mb-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Seu site à sua
              <br /> escolha
            </h4>
            <p className="text-[15px] font-light px-10">
              Do jeitinho que você sempre sonhou, um site personalizado, montado
              a partir de descrições e referências que são a sua cara!
            </p>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1 my-8 items-center text-center">
            <img src={preferences} className="max-h-[80px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Funcionalidades sob medida
            </h4>
            <p className="text-[15px] font-light px-10">
              Atendendo as suas demandas, adicionaremos ao seu site campos para
              blog, institucional, loja virtual, recursos multi-idiomas e muito
              mais.
            </p>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1 my-8 items-center text-center">
            <img src={diamond} className="max-h-[80px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              E que venham os benditos frutos!
            </h4>
            <p className="text-[15px] font-light px-10">
              Em poucos dias o seu site estará no ar. Entre em contato agora
              mesmo para realizarmos nosso briefing e pormos as mãos na massa!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
