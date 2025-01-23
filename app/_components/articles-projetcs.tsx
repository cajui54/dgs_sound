import Image from "next/image";
import React from "react";
import imgCar from "@/app/_assets/images/cars/carro02-removebg.png";
import SubtitlesComponent from "./subtiltes-component";
const ArticleProject = () => {
  return (
    <div className="w-[90%] sm:w-[600px]  mx-auto">
      <article>
        <div className="w-4/5 mx-auto my-5">
          <Image src={imgCar} alt="carro com som automotivo" />
        </div>

        <section className="mx-auto">
          <SubtitlesComponent
            subtitle="Alto Falantes Automotivos"
            title="DGS Sound"
          />
          <h3>🎶 Transforme Seu Carro em Uma Potência Musical! 🎶</h3>
          <p className="tracking-widest leading-loose	">
            Está pronto para sentir a batida? 🚗💥
          </p>
          <p>👉 Som Automotivo de Qualidade:</p>
          <ul className="w-4/5 mx-auto mt-4  list-disc [&>*]:my-3">
            <li>Graves potentes que fazem o chão tremer!</li>
            <li>
              Médios e agudos cristalinos para curtir cada detalhe da sua música
              favorita.
            </li>
            <li>
              Marcas líderes no mercado: confiabilidade e durabilidade
              garantidas.
            </li>
          </ul>

          <ul className="w-4/5 mx-auto mt-5">
            <li>
              🔥 Não perca tempo! Transforme seu carro em uma verdadeira máquina
              do som.
            </li>
            <li>
              📍 Visite nossa loja ou fale conosco pelo WhatsApp para um
              orçamento personalizado.
            </li>
            <li>🎵 Curta a estrada com o som que você merece!</li>
          </ul>
          <strong>VEM QUE A GENTE TURBINA O SEU SOM!</strong>
        </section>
      </article>
    </div>
  );
};

export default ArticleProject;
