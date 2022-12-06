import "./styles.css";
import icon01 from "../../../assets/img/expresswebsite/_4.png";
import icon02 from "../../../assets/img/expresswebsite/_7.png";
import icon03 from "../../../assets/img/expresswebsite/_9.png";
import icon04 from "../../../assets/img/expresswebsite/_8.png";
import icon05 from "../../../assets/img/expresswebsite/_5.png";
import icon06 from "../../../assets/img/expresswebsite/_3.png";

export default function Functionalities() {
  return (
    <section className="functionalities text-white font-poppins py-10">
      <div className="container max-w-[1180px] mx-auto py-10">
        <div className="text-center">
          <h5 className="text-[15px] font-normal mb-3">
            Desenvolvemos funcionalidades incríveis!
          </h5>
          <h3 className="text-[40px] font-semibold">Funcionalidades</h3>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="grid grid-cols-12 gap-5 px-10 col-span-2 md:col-span-1">
            <div className="col-span-2 flex justify-center items-center">
              <img src={icon01} className="max-h-[48px]" />
            </div>
            <div className="col-span-10">
              <h4 className="text-[20px] font-semibold leading-tight">
                Design Único
              </h4>
              <p className="text-[15px] font-light">
                Nada de modelos prontos! Nós criamos o seu site totalmente do
                zero com um design único e exclusivo!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 px-10 col-span-2 md:col-span-1">
            <div className="col-span-2 flex justify-center items-center">
              <img src={icon02} className="max-h-[48px]" />
            </div>
            <div className="col-span-10">
              <h4 className="text-[20px] font-semibold leading-tight">
                Otimizado para o Google
              </h4>
              <p className="text-[15px] font-light">
                Otimizamos o SEO do seu site para que possa ser encontrado no
                Google!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 px-10 col-span-2 md:col-span-1">
            <div className="col-span-2 flex justify-center items-center">
              <img src={icon03} className="max-h-[48px]" />
            </div>
            <div className="col-span-10">
              <h4 className="text-[20px] font-semibold leading-tight">
                Recursos avançados
              </h4>
              <p className="text-[15px] font-light">
                Chat Online, botão Whatsapp, e-mail marketing, formulários de
                contato e muito mais!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 px-10 col-span-2 md:col-span-1">
            <div className="col-span-2 flex justify-center items-center">
              <img src={icon04} className="max-h-[48px]" />
            </div>
            <div className="col-span-10">
              <h4 className="text-[20px] font-semibold leading-tight">
                Responsividade
              </h4>
              <p className="text-[15px] font-light">
                Seu site se adaptará automaticamente a todos os tamanhos de tela
                e dispositivos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 px-10 col-span-2 md:col-span-1">
            <div className="col-span-2 flex justify-center items-center">
              <img src={icon05} className="max-h-[48px]" />
            </div>
            <div className="col-span-10">
              <h4 className="text-[20px] font-semibold leading-tight">
                Hospedagem Rápida e Segura
              </h4>
              <p className="text-[15px] font-light">
                Hospedamos o seu website em nossos servidores garantindo uma
                navegação fluida e segura.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 px-10 col-span-2 md:col-span-1">
            <div className="col-span-2 flex justify-center items-center">
              <img src={icon06} className="max-h-[48px]" />
            </div>
            <div className="col-span-10">
              <h4 className="text-[20px] font-semibold leading-tight">
                Domínio Gratuito
              </h4>
              <p className="text-[15px] font-light">
                Registramos o seu domínio de forma totalmente gratuita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
