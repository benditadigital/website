import rocketIcon from "../../assets/img/expresswebsite/_1.png";
import dominioIcon from "../../assets/img/expresswebsite/dominio.png";
import hospedagemIcon from "../../assets/img/expresswebsite/hospedagem.png";
import emailIcon from "../../assets/img/expresswebsite/email.png";
import responsiveIcon from "../../assets/img/expresswebsite/_8.png";
import googleIcon from "../../assets/img/expresswebsite/_7.png";
import questionIcon from "../../assets/img/expresswebsite/_2.png";
import editIcon from "../../assets/img/expresswebsite/_4.png";
import carrinhoIcon from "../../assets/img/expresswebsite/carrinho.png";

export default function WhyChooseUs() {
  return (
    <section className="complex-website why-choose-us font-poppins py-10">
      <div className="container max-w-[1180px] mx-auto mb-[80px]">
        <div className="text-center py-10">
          <h5 className="text-[15px] font-normal mb-3">
            Somos uma Agência Completa, Somos Experts em Desenvolvimento de
            Sites
          </h5>
          <h3 className="text-[40px] font-semibold">Somos Diferentes!</h3>
        </div>

        <div className="intro grid grid-cols-3 pb-10">
          <div className="flex flex-col col-span-3 md:col-span-1 mb-5 items-center text-center">
            <img src={hospedagemIcon} className="max-h-[60px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Hospedagem Premium
            </h4>
            <p className="text-[15px] font-light px-10">
              Nada de perder tráfego por causa da lentidão! Nossos servidores
              estão localizados no Brasil e garantem uma conexão rápida entre o
              usuário e o seu site.
            </p>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1 mb-5 items-center text-center">
            <img src={dominioIcon} className="max-h-[60px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Registro de Domínio Gratuito
            </h4>
            <p className="text-[15px] font-light px-10">
              Entre uma infinidade de possibilidades é muito importante ter um
              endereço estratégico, nós garantimos o domínio perfeito para você!
            </p>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1 mb-5 items-center text-center">
            <img src={emailIcon} className="max-h-[60px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              E-mail Profissional Incluso
            </h4>
            <p className="text-[15px] font-light px-10">
              Chega de “@gmail” ou “@hotmail”, está na hora de ter um e-mail
              profissional com o seu próprio domínio, mais credibilidade para
              você!
            </p>
          </div>
        </div>

        <div className="intro grid grid-cols-3 pb-10">
          <div className="flex flex-col col-span-3 md:col-span-1 mb-5 items-center text-center">
            <img src={responsiveIcon} className="max-h-[60px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Sites Responsivos
            </h4>
            <p className="text-[15px] font-light px-10">
              Quer que seu site esteja sempre no topo das pesquisas? Então deixa
              com a gente. Garantimos uma classificação positiva para você
              através da utilização de tecnologias recentes do mercado,
              disponibilizando websites compatíveis com PCs, Tablets e
              Smartphones.
            </p>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1 mb-5 items-center text-center">
            <img src={googleIcon} className="max-h-[60px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Sites Otimizados para o Google
            </h4>
            <p className="text-[15px] font-light px-10">
              Todos os sites são criados para que possam ter um melhor
              posicionamento no Google. Ao desenvolver o site, configuramos e
              entregamos já otimizado com as diretrizes do Google.
            </p>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1 mb-5 items-center text-center">
            <img src={rocketIcon} className="max-h-[60px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Tecnologias de Ponta
            </h4>
            <p className="text-[15px] font-light px-10">
              Utilizamos as tecnologias mais modernas do mercado para
              desenvolver o seu site, loja ou blog da melhor maneira possível,
              além de um design elegante e moderno.
            </p>
          </div>
        </div>

        <div className="intro grid grid-cols-3 pb-10">
          <div className="flex flex-col col-span-3 md:col-span-1 mb-5 items-center text-center">
            <img src={carrinhoIcon} className="max-h-[60px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Ferramentas de Venda
            </h4>
            <p className="text-[15px] font-light px-10">
              Quer converter visitantes em clientes? Ao fazer seu site você
              poderá ter funcionalidades exclusivas como: Chat Online, PopUps
              Inteligentes, Email Marketing, Redes Sociais, Google Analytics,
              Integração com plataformas de pagamento digital e muuuuito mais!
            </p>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1 mb-5 items-center text-center">
            <img src={editIcon} className="max-h-[60px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Design Personalizado
            </h4>
            <p className="text-[15px] font-light px-10">
              Desenvolvemos todos os sites com design exclusivo, layouts 100%
              personalizados para a sua marca. Uma aparência bonita e moderna é
              o que irá transmitir confiança a seus visitantes. Formas, cores,
              imagens, ícones. Tudo isso é pensado nos mínimos detalhes,
              especialmente para você.
            </p>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1 mb-5 items-center text-center">
            <img src={questionIcon} className="max-h-[60px] my-3 mb-5" />
            <h4 className="text-[30px] font-semibold leading-tight mb-6">
              Manutenção e Suporte
            </h4>
            <p className="text-[15px] font-light px-10">
              Através do nosso serviço de manutenção, estaremos a postos para te
              ajudar através de nosso canal exclusivo de suporte. Realizamos
              atualizações semanais em todas as ferramentas do seu site, para
              mantê-lo seguro e livre de bugs. Você também poderá solicitar
              alterações todos os meses e nossa equipe irá cuidar de tudo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
