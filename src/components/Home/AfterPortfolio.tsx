import { useState } from "react";
import heartEmoji from "../../assets/img/home/heartEmoji.svg";

function AfterPortfolio() {
  return (
    <div className="relative grid grid-cols-2 gap-10 font-poppins font-extralight h-[300px] text-white bg-black justify-center items-center">
      <div className="text-right pr-5">
        <h2 className="text-[41px] font-medium flex gap-4 text-right justify-end">
          Deu
          <strong className="font-bold">
            {" "}
            <em>Match!</em>
          </strong>
          <img src={heartEmoji} width={41} />
        </h2>
      </div>
      <div className="pr-[250px] font-extralight text-[16x]">
        Mais que logotipos: bom relacionamento e compromisso com nossos
        clientes.
        <br />
        Atuamos em nível estratégico; menos jobs e mais relações de longo prazo.
      </div>
    </div>
  );
}

export default AfterPortfolio;
