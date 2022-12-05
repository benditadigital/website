import FeedbacksCarousel from "./FeedbacksCarousel";
import LastWebsitesCarousel from "./LastWebsitesCarousel";
import "./styles.css";

export default function Feedbacks() {
  return (
    <div className="express-website-feedbacks font-poppins">
      <div className="container mx-auto max-w-[1180px]">
        <div className="text-center py-[50px]">
          <p className="font-normal text-[15px]">
            Quem conhece indica! Gestão e Criação de Websites.
          </p>
          <h3 className="font-semibold text-[40px]">Clientes e Avaliações</h3>
        </div>
        <FeedbacksCarousel />
        <div className="text-center pt-[100px] pb-[50px]">
          <p className="font-normal text-[15px]">
            Design Profissional, Responsividade e Velocidade Definem os Nossos
            Sites.
          </p>
          <h3 className="font-semibold text-[40px]">
            Últimos Sites Desenvolvidos
          </h3>
        </div>
        <LastWebsitesCarousel />
      </div>
    </div>
  );
}
